<template>
  <div class="wrapper">
    <StaticPart />
    <NearBy />
  </div>
  <Navigation />
</template>

<script>
import StaticPart from "./StaticPart";
import NearBy from "./Nearby.vue";
import Navigation from "./Navigation.vue";
export default {
  name: "HomeView",
  components: { StaticPart, NearBy, Navigation },
};
</script>
<style lang="scss" scoped>
// scoped只对同级的组件不生效，父子会生效
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.12rem 0.18rem;
  overflow-y: auto;
  color: $content-font-color;
}
</style>
