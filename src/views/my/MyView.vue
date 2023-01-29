<template>
  <div class="container">我的</div>
  <Navigation :currentIndex="3" />
</template>

<script>
import Navigation from "../../components/Navigation.vue";

export default {
  name: "MyView",
  components: { Navigation },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 0.8rem;
  text-align: center;
  font-size: 0.18rem;
}
</style>
