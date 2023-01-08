<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      class="docker__item"
      :class="{ 'docker__item--active': index === 0 }"
      :key="item.icon"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  setup() {
    const dockerList = [
      { icon: "&#xe64d;", text: "首页" },
      { icon: "&#xe7e5;", text: "购物车" },
      { icon: "&#xe605;", text: "订单" },
      { icon: "&#xe78b;", text: "我的" },
    ];
    return { dockerList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.docker {
  display: flex;
  // align-items: center;
  // justify-content: space-around;
  flex-direction: row;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 0.58rem;
  box-sizing: border-box;
  padding: 0 0.08rem 0.08rem 0.08rem;
  border-top: 1px solid $content-bg-color;
  color: $content-font-color;
  background-color: #fff;
  &__item {
    flex: 1;
    text-align: center;
    height: auto;
    .iconfont {
      margin: 0.07rem 0 0.04rem 0;
      font-size: 0.24rem;
    }
    .docker &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 0.22rem;
    line-height: 0.22rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
