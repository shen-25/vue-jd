import { useStore } from "vuex";
import { computed } from "vue";
const useCommonCartEffect = (shopId) => {
  const store = useStore();
  const cartList = store.state.cartList;
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit("changeCartItemInfo", {
      shopId,
      productId,
      productInfo,
      num,
    });
  };

  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {};
    const notEmptyProductList = {}; // 排除数量为0得情况
    for (let i in productList) {
      const product = productList[i];
      if (product.count > 0) {
        notEmptyProductList[i] = product;
      }
    }
    return notEmptyProductList;
  });

  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || "";
    return shopName;
  });

  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList;
    let count = 0;
    let price = 0;
    for (let i in productList) {
      const product = productList[i];
      count += product.count;
      if (product.check) {
        price += product.count * product.price;
      }
    }
    return { total: count, totalPrice: price.toFixed(2) };
  });

  return {
    changeCartItemInfo,
    cartList,
    shopName,
    shopId,
    productList,
    calculations,
  };
};

export { useCommonCartEffect };
