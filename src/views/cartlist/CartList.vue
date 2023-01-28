<template>
  <div class="container">购物车列表</div>
  <Navigation :currentIndex="1" />
</template>

<script>
import Navigation from "../../components/Navigation.vue";

export default {
  name: "CartList",
  components: { Navigation },
};
</script>

<style lang="scss" scoped></style>
