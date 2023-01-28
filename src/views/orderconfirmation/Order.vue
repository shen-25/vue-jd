<template>
  <div class="order">
    <div class="order__price">
      实付金额&nbsp;<b>&yen;&nbsp;{{ calculations.totalPrice }}</b>
    </div>
    <div class="order__btn" @click="handleSumbitOrderClick">提交订单</div>
  </div>
  <div class="mask" v-show="showPay">
    <div class="mask__content">
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--first"
          @click="handleOrder(false)"
        >
          取消订单
        </div>
        <div
          class="mask__content__btn mask__content__btn--last"
          @click="handleOrder(true)"
        >
          确认支付
        </div>
      </div>
    </div>
  </div>
  <Toast />
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import Toast, { userToastEffect } from "../../components/Toast";

const useShowMaskEffect = (showPay) => {
  const handleSumbitOrderClick = () => {
    // console.log(showPay);
    showPay.value = true;
  };
  return { handleSumbitOrderClick };
};
const useMakeOrderEffect = (shopName, productList, shopId, showPay) => {
  const store = useStore();
  const router = useRouter();

  const handleOrder = async (isCanceled) => {
    const products = [];
    for (let i in productList) {
      const product = productList[i];
      products.push({ id: parseInt(product._id, 10), num: product.count });
    }
    try {
      const result = await post("/api/order", {
        addressId: 1,
        shopId,
        shopName: shopName,
        isCanceled,
        products,
      });
      if (result.errno === 0) {
        store.commit("clearCartData", { shopId });
        showPay.value = false;
        router.push({ name: "OrderList" });
      }
    } catch {
      showPay.value = false;
    }
  };
  return { handleOrder };
};

export default {
  name: "Order",
  components: {
    Toast,
  },
  props: ["calculations", "shopName", "productList", "shopId"],
  setup(props) {
    const { shopName, productList, shopId } = props;
    const showPay = ref(false);

    const { handleOrder } = useMakeOrderEffect(
      shopName,
      productList,
      shopId,
      showPay
    );
    const { handleSumbitOrderClick } = useShowMaskEffect(showPay);
    return { handleOrder, showPay, handleSumbitOrderClick };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 0.49rem;
  line-height: 0.49rem;
  background: $bgColor;
  &__price {
    flex: 1;
    text-indent: 0.24rem;
    font-size: 0.15rem;
    color: $content-fontcolor;
  }
  &__btn {
    width: 0.98rem;
    background: #4fb0f9;
    color: #fff;
    text-align: center;
    font-size: 0.14rem;
  }
}
.mask {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background: #fff;
    text-align: center;
    border-radius: 0.04rem;
    &__title {
      margin: 0.24rem 0 0 0;
      line-height: 0.26rem;
      font-size: 0.18rem;
      color: #333;
    }
    &__desc {
      margin: 0.08rem 0 0 0;
      font-size: 0.14rem;
      color: #666666;
    }
    &__btns {
      display: flex;
      margin: 0.24rem 0.58rem;
    }
    &__btn {
      flex: 1;
      width: 0.8rem;
      line-height: 0.32rem;
      border-radius: 0.16rem;
      font-size: 0.14rem;
      &--first {
        margin-right: 0.12rem;
        border: 0.01rem solid #4fb0f9;
        color: #4fb0f9;
      }
      &--last {
        margin-left: 0.12rem;
        background: #4fb0f9;
        color: #fff;
      }
    }
  }
}
</style>
