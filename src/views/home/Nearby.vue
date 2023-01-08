<template>
  <div class="nearby">
    <div class="nearby__store">附近店铺</div>
    <div class="nearby__item" v-for="item in nearbyList" :key="item.id">
      <img class="nearby__item__img" :src="item.imgUrl" />
      <div class="nearby__item__content">
        <div class="nearby__item__content__title">{{ item.title }}</div>
        <div class="nearby__item__content__tags">
          <div
            class="nearby__item__content__tags__item"
            v-for="innerItem in item.tags"
            :key="innerItem"
          >
            {{ innerItem }}
          </div>
        </div>
        <div class="nearby__item__content__desc">
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nearby",
  setup() {
    const nearbyList = [
      {
        id: "1",
        title: "沃尔玛",
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        tags: ["月售一万+", "月售二万+", "月售三万+"],
        desc: "vip大数据量咖啡打算看了(每月2张)",
      },
      {
        id: "2",
        title: "沃尔玛",
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        tags: ["月售一万+", "月售二万+", "月售三万+"],
        desc: "vip大数据量咖啡打算看了(每月2张)",
      },
      {
        id: "3",
        title: "沃尔玛",
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        tags: ["月售一万+", "月售二万+", "月售三万+"],
        desc: "vip大数据量咖啡打算看了(每月2张)",
      },
      {
        id: "4",
        title: "沃尔玛",
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        tags: ["月售一万+", "月售二万+", "月售三万+"],
        desc: "vip大数据量咖啡打算看了(每月2张)",
      },
    ];
    return { nearbyList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.nearby {
  &__store {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: $content-font-color;
  }

  &__item {
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
      border-bottom: 1.3px solid $content-bg-color;
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
}
</style>
