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

<style lang="scss" scoped></style>
