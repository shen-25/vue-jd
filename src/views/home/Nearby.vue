<template>
  <div class="nearby">
    <div class="nearby__store">附近店铺</div>
    <ShopInfo
      v-for="item in nearbyList"
      :key="item._id"
      :item="item"
      @click="hanldeToShop(item._id)"
    />
    <!-- <router-link
      v-for="item in nearbyList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item" />
    </router-link> -->
  </div>
</template>

<script>
import { effectScope, ref } from "vue";
import { get } from "../../utils/request";
import ShopInfo from "../../components/ShopInfo";
import { useRouter } from "vue-router";
const useNearbyListEffect = () => {
  const nearbyList = ref([]);

  const getNearbyList = async () => {
    if (localStorage.nearbyList != null) {
      nearbyList.value = JSON.parse(localStorage.nearbyList);
      return;
    }
    try {
      const result = await get("/api/shop/hot-list");
      if (result.errno === 0) {
        nearbyList.value = result.data;
        localStorage.nearbyList = JSON.stringify(result.data);
      }
    } catch (e) {
      console.log("获取失败");
    }
  };
  return { nearbyList, getNearbyList };
};
export default {
  name: "Nearby",
  components: {
    ShopInfo,
  },
  setup() {
    const router = useRouter();
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    getNearbyList();
    const hanldeToShop = (id) => {
      router.push({ path: "shop/" + id });
    };
    return { nearbyList, hanldeToShop };
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
}
a {
  text-decoration: none;
  color: $content-font-color;
}
</style>
