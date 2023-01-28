import { useStore } from "vuex";
import { computed, toRefs } from "vue";
const useCommonCartEffect = (shopId) => {
  const store = useStore();
  const { cartList } = toRefs(store.state);
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit("changeCartItemInfo", {
      shopId,
      productId,
      productInfo,
      num,
    });
  };

  return { changeCartItemInfo, cartList };
};

export { useCommonCartEffect };
