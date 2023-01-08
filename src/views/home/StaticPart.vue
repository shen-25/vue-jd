<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe61f;</span>
    广东省茂名市茂南区公馆镇黄泥塘村大院村委会
    <span class="iconfont position__notice">&#xe629;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe65c;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt=""
    />
  </div>
  <div class="icons">
    <div class="icons__item" v-for="item in iconList" :key="item.title">
      <!-- 这里必须加一个''或者``让他变成字符串？ -->
      <img
        class="icons__item__img"
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
      />
      <div class="icons__item__title">{{ item.title }}</div>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: "StaticPart",
  setup() {
    const iconList = [
      { imgName: "超市", title: "超市便利" },
      { imgName: "菜市场", title: "菜市场" },
      { imgName: "水果店", title: "水果店" },
      { imgName: "鲜花", title: "鲜花绿植" },
      { imgName: "医药健康", title: "医药健康" },
      { imgName: "家居", title: "家居时尚" },
      { imgName: "蛋糕", title: "烘培蛋糕" },
      { imgName: "签到", title: "签到" },
      { imgName: "大牌免运", title: "大牌免运" },
      { imgName: "红包", title: "红包套餐" },
    ];
    return { iconList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  &__icon {
    position: relative;
    font-size: 0.2rem;
    margin-right: 0.08rem;
    top: 0.01rem;
  }
  &__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
}

.search {
  line-height: 0.32rem;
  background-color: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  margin-bottom: 0.12rem;
  .iconfont {
    display: inline-block;
    font-size: 0.17rem;
    padding: 0 0.08rem 0 0.16rem;
  }
  &__text {
    display: inline-block;
  }
}

.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__img {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__title {
      text-align: center;
      padding: 0.06rem 0 0.15rem 0;
      color: $content-font-color;
    }
  }
}

.gap {
  height: 0.08rem;
  background-color: $content-bg-color;
  margin: 0 -0.18rem;
}
</style>
