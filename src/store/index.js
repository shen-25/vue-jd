import { createStore } from "vuex";

export default createStore({
  state: {
    cartList: {},

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
      console.log(state.cartList);
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const productItem = state.cartList[shopId].productList[productId];
      productItem.check = !productItem.check;
    },

    handleCartClear(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};
    },

    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const shopInfo = state.cartList[shopId];
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;
    },
  },
  actions: {},
  modules: {},
});
