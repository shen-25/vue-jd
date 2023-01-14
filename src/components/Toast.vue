<template>
  <div class="toast">{{ message }}</div>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "Toast",
  props: ["message"],
};
const userToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    toastMessage: "",
  });
  const showToast = (message) => {
    toastData.showToast = true;
    toastData.toastMessage = message;
    setTimeout(() => {
      toastData.showToast = false;
      toastData.toastMessage = "";
    }, 2000);
  };
  return { toastData, showToast };
};
export { userToastEffect };
</script>

<style lang="scss" scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.35);
  font-size: 0.14rem;
  border-radius: 0.05rem;
  padding: 0.09rem 0.14rem;
  color: #fff;
}
</style>
