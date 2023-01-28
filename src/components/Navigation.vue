<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      class="docker__item"
      :class="{ 'docker__item--active': index == currentIndex }"
      :key="item.icon"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon"></div>
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: ["currentIndex"],
  setup() {
    const dockerList = [
      { icon: "&#xe6b8;", text: "首页", to: { name: "Home" } },
      { icon: "&#xe67f;", text: "购物车", to: { name: "CartList" } },
      { icon: "&#xe613;", text: "订单", to: { name: "OrderList" } },
      { icon: "&#xe78b;", text: "我的", to: { name: "My" } },
    ];
    return { dockerList };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/viriables.scss";

a {
  text-decoration: none;
  color: $content-font-color;
}
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
  border-top: 0.01rem solid $content-bg-color;
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
    &--active {
      a {
        color: #1fa4fc;
      }
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
