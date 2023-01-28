<template>
  <div class="wrapper">
    <TopArea />
    <ProductList :shopName="shopName" :productList="productList" />
    <Order
      :productList="productList"
      :calculations="calculations"
      :shopName="shopName"
      :shopId="shopId"
    />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useCommonCartEffect } from "../../effects/cartEffect";

import TopArea from "./TopArea.vue";
import Order from "./Order.vue";
import ProductList from "./ProductList.vue";

export default {
  name: "OrderConfirmation",
  components: { TopArea, Order, ProductList },
  setup() {
    const route = useRoute();
    const shopId = ref(route.params.id);
    const { productList, shopName, calculations } = useCommonCartEffect(
      shopId.value
    );

    return { productList, shopName, calculations, shopId };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>
