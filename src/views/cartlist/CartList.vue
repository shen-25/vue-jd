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

<style lang="scss" scoped>
.container {
  margin-top: 0.4rem;
  text-align: center;
  font-size: 0.18rem;
}
</style>
