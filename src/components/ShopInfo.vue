<template>
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl" />
    <div
      class="shop__content"
      :class="{ 'shop__content--bordered': !hideBorder }"
    >
      <div class="shop__content__title">{{ item.title }}</div>
      <div class="shop__content__tags">
        <div class="shop__content__tags__item">月售: {{ item.sales }}</div>
        <div class="shop__content__tags__item">
          起送: {{ item.expressLimit }}
        </div>
        <div class="shop__content__tags__item">
          基础运费: {{ item.expressPrice }}
        </div>
      </div>
      <div class="shop__content__desc">
        {{ item.slogan }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopInfo",
  props: ["item", "hideBorder"],
};
</script>

<style lang="scss" scoped>
@import "../style/viriables.scss";
.shop {
  display: flex;
  padding-top: 0.12rem;
  &__img {
    margin-right: 0.16rem;
    width: 0.5rem;
    height: 0.5rem;
  }
  &__content {
    flex: 1;
    padding-bottom: 0.11rem;
    &--bordered {
      border-bottom: 1.3px solid $content-bg-color;
    }

    &__title {
      font-size: 0.16rem;
      color: $content-font-color;

      line-height: 0.22rem;
    }
    &__tags {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: nowrap;
      font-size: 0.13rem;
      height: 0.2rem;
      margin-right: 0.35rem;
      &__item {
        width: 33%;
        padding: 0.08rem 0 0.04rem 0;
      }
    }
    &__desc {
      font-size: 0.13rem;
      margin-top: 0.08rem;
      color: #e93b3b;
    }
  }
}
</style>
