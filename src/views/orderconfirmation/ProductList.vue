<template>
  <!-- 不够完美，应该是判断是否有选择的商品 已做 -->
  <div class="products" v-show="hasProductCheck">
    <div class="products__title">{{ shopName }}</div>
    <div class="products__wrapper">
      <div class="products__list">
        <template v-for="item in productList" :key="item._id">
          <div class="products__item" v-show="item.check">
            <img class="products__item__img" :src="item.imgUrl" />
            <div class="products__item__detail">
              <h4 class="products__item__title">{{ item.name }}</h4>
              <p class="products__item__price">
                <span>
                  <span class="products__item__yen"
                    >&yen;{{ item.price.toFixed(2) }} x {{ item.count }}</span
                  >
                </span>
                <span class="products__item__total">
                  <span class="products__item__yen"
                    >&yen;
                    {{ getPersonTotalPrice(item.count, item.price) }}</span
                  >
                </span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <div class="cart-status-desc" v-show="!hasProductCheck">
    你的购物车空空如也
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "ProductList",
  props: ["shopName", "productList"],
  setup(props) {
    const getPersonTotalPrice = (count, price) => {
      let total = count * price;
      return total.toFixed(2);
    };
    const hasProductCheck = computed(() => {
      let result = false;
      for (let i in props.productList) {
        const product = props.productList[i];
        if (product.check) {
          result = true;
          break;
        }
      }
      return result;
    });

    return { getPersonTotalPrice, hasProductCheck };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.cart-status-desc {
  margin: 0.16rem 0.18rem 0.1rem 0.18rem;
  padding: 0.4rem 0rem;
  font-size: 0.18rem;
  color: $content-fontcolor;
  text-align: center;
  background-color: #fff;
  border-radius: 0.1rem;
}

.products {
  margin: 0.16rem 0.18rem 0.1rem 0.18rem;
  background: $bgColor;
  &__title {
    padding: 0.16rem;
    font-size: 0.15rem;
    color: $content-fontcolor;
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 0.18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.49rem;
    top: 2.6rem;
  }
  &__list {
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 0.16rem 0.16rem 0.16rem;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: $dark-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
  }
}
</style>
