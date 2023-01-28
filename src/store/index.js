import { createStore } from "vuex";

const setLocalStorage = (state) => {
  const { cartList } = state;
  const cartListStr = JSON.stringify(cartList);
  localStorage.cartList = cartListStr;
};

const getLocalStorageCartList = () => {
  if (localStorage.cartList) {
    return JSON.parse(localStorage.cartList);
  } else {
    return {};
  }
};
export default createStore({
  state: {
    cartList: getLocalStorageCartList(),

    /**
     * {
      // 第一层级是商铺的id
      shopId: {
        shopName: "",
        productList: {
          productId: {
            _id: "1",
            name: "番茄250g/份",
            imgUrl: "http://www.dell-lee.com/imgs/vue3/tomato.png",
            sales: 10,
            price: 33.6,
            oldPrice: 39.6,
            count: 2,
          },
        },
      },
    },
     */
  },
  getters: {},
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, num } = payload;
      let shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {},
      };
      let product = shopInfo.productList[productId];
      if (!product) {
        product = productInfo;
        product.count = 0;
      }
      product.count += num;
      if (product.count <= 0) {
        product.count = 0;
        product.check = false;
      } else {
        product.check = true;
      }
      shopInfo.productList[productId] = product;
      state.cartList[shopId] = shopInfo;
      setLocalStorage(state);
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const productItem = state.cartList[shopId].productList[productId];
      productItem.check = !productItem.check;
      setLocalStorage(state);
    },

    handleCartClear(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};
      setLocalStorage(state);
    },

    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      let shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {},
      };
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;
      setLocalStorage(state);
    },

    clearCartData(state, payload) {
      const { shopId } = payload;
      // console.log(shopId);
      state.cartList[shopId].productList = {};
      state.cartList[shopId].shopName = "";

      setLocalStorage(state);
    },
  },
  actions: {},
  modules: {},
});
