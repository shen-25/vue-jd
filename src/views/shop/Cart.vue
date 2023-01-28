<template>
  <div class="mask" v-show="showCart" />
  <div class="cart">
    <div class="product" v-show="showCart && calculations.total > 0">
      <div class="product__header">
        <div class="product__header__all">
          <span
            class="product__header__icon iconfont"
            :class="allChecked ? 'icon-checked-color' : 'icon-no-check-color'"
            v-html="
              allChecked ? checkIconCode.checkIcon : checkIconCode.uncheckIcon
            "
          ></span>
          全选
        </div>
        <div class="product__header__clear">
          <span
            class="product__header__clear__btn"
            @click="handleCartClear(shopId)"
            >清空购物车</span
          >
        </div>
      </div>
      <div class="product_container">
        <template v-for="item in productList" :key="item._id">
          <!-- v-if="item.count > 0"有个判断加个template -->
          <div class="product__item">
            <div
              class="product__item__checked iconfont"
              :class="item.check ? 'icon-checked-color' : 'icon-no-check-color'"
              v-html="
                item.check ? checkIconCode.checkIcon : checkIconCode.uncheckIcon
              "
              @click="changeCartItemChecked(shopId, item._id)"
            ></div>
            <img class="product__item__img" :src="item.imgUrl" />
            <div class="product__item__detail">
              <h4 class="product__item__title">{{ item.name }}</h4>
              <p class="product__item__price">
                <span class="product__item__yen">&yen;{{ item.price }}</span>
                <span class="product__item__origin"
                  >&yen;{{ item.oldPrice }}</span
                >
              </p>
            </div>
            <div class="product__number">
              <span
                class="product__number__minus iconfont"
                @click="changeCartItemInfo(shopId, item._id, item, -1)"
                >&#xe8e6;</span
              >
              {{ item.count }}
              <span
                class="product__number__plus iconfont"
                @click="changeCartItemInfo(shopId, item._id, item, 1)"
                >&#xe601;</span
              >
            </div>
          </div>
        </template>
      </div>
      <div class="show-cart-tips" v-show="showCart && calculations.total <= 0">
        购物车空空如也~
      </div>
    </div>

    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
          @click="handleCartShowChange"
        />

        <div class="check__icon__tag">{{ calculations.total }}</div>
      </div>
      <div class="check__info">
        总计：
        <span class="check__info__price"
          >&yen; {{ calculations.totalPrice }}</span
        >
      </div>
      <div class="check__btn">
        <router-link :to="{ path: `/orderConfirmation/${shopId}` }"
          >去结算</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useCommonCartEffect } from "../../effects/cartEffect";

const checkIconCode = {
  uncheckIcon: "&#xe731;",
  checkIcon: "&#xe66e;",
};

const useCartEffect = (shopId) => {
  const store = useStore();
  const { changeCartItemInfo, cartList, productList, calculations } =
    useCommonCartEffect(shopId);

  const allChecked = computed(() => {
    const productList = cartList[shopId]?.productList;
    let result = true;

    if (!productList) {
      result = false;
    }
    let flag = false;
    for (let i in productList) {
      const product = productList[i];
      if (product.count > 0 && !product.check) {
        result = false;
      }
      if (product.check) {
        flag = true;
      }
    }
    if (result) {
      result = flag;
    }
    return result;
  });

  const changeCartItemChecked = (shopId, productId) => {
    store.commit("changeCartItemChecked", {
      shopId,
      productId,
    });
  };
  const handleCartClear = (shopId) => {
    store.commit("handleCartClear", { shopId });
  };

  return {
    calculations,
    productList,
    allChecked,
    changeCartItemInfo,
    changeCartItemChecked,
    handleCartClear,
  };
};

const toggleCartEffect = () => {
  //显示购物车的功能
  const showCart = ref(false);
  const handleCartShowChange = () => {
    showCart.value = !showCart.value;
  };
  return { showCart, handleCartShowChange };
};
export default {
  name: "Cart",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const {
      calculations,
      productList,
      changeCartItemInfo,
      changeCartItemChecked,
      handleCartClear,
      allChecked,
    } = useCartEffect(shopId);

    const { showCart, handleCartShowChange } = toggleCartEffect();

    return {
      calculations,
      productList,
      shopId,
      changeCartItemChecked,
      changeCartItemInfo,
      handleCartClear,
      allChecked,
      showCart,
      handleCartShowChange,
      checkIconCode,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.icon-checked-color {
  color: $btn-bgColor;
}
.icon-no-check-color {
  color: $dark-fontColor;
}
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.cart {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}
.product {
  position: relative;
  flex: 1;
  background: $bgColor;
  &_container {
    overflow-y: scroll;
    padding-top: 0.4rem;
    height: 2rem;
  }
  &__header {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 11;
    height: 0.44rem;
    line-height: 0.44rem;
    border-bottom: 0.01rem solid $content-bgColor;
    font-size: 0.14rem;
    color: $content-fontcolor;
    &__all {
      margin-left: 0.16rem;
    }
    &__icon {
      display: inline-block;
      margin-right: 0.06rem;
      vertical-align: top;
      font-size: 0.3rem;
    }
    &__clear {
      flex: 1;
      margin-right: 0.16rem;
      text-align: right;
      &__btn {
        display: inline-block;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__checked {
      line-height: 0.5rem;
      margin-right: 0.2rem;
      font-size: 0.24rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.26rem;
      &__minus {
        position: relative;
        top: 0.02rem;
        font-size: 0.15rem;
        color: $medium-fontColor;
        margin-right: 0.05rem;
      }
      &__plus {
        position: relative;
        top: 0.02rem;
        font-size: 0.165rem;
        color: $btn-bgColor;
        margin-left: 0.05rem;
      }
    }
  }
}
.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  line-height: 0.49rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      margin: 0.1rem auto;
      width: 0.26rem;
      height: 0.24rem;
    }
    &__tag {
      position: absolute;
      left: 0.54rem;
      top: 0.03rem;
      padding: 0 0.09rem;
      min-width: 0.14rem;
      height: 0.3rem;
      line-height: 0.3rem;
      background-color: $hightlight-fontColor;
      border-radius: 0.12rem;
      font-size: 0.2rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: 0.12rem;
    &__price {
      line-height: 0.49rem;
      color: $hightlight-fontColor;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background-color: #4fb0f9;
    text-align: center;
    font-size: 0.14rem;
    a {
      color: $bgColor;
      text-decoration: none;
    }
  }
}
</style>
