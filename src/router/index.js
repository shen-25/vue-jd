import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "HomeView"*/ "../views/home/HomeView"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login"*/ "../views/login/Login"),
    // 路由守卫
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      if (isLogin) {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: 'Register' */ "../views/register/Register"),
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: 'Shop' */ "../views/shop/Shop"),
  },
  {
    path: "/cartList",
    name: "CartList",
    component: () =>
      import(/* webpackChunkName: 'CartList' */ "../views/cartlist/CartList"),
  },
  {
    path: "/orderConfirmation/:id",
    name: "OrderConfirmation",
    component: () =>
      import(
        /* webpackChunkName: 'OrderConfirmation' */ "../views/orderconfirmation/OrderConfirmation"
      ),
  },
  {
    path: "/orderList",
    name: "OrderList",
    component: () =>
      import(
        /* webpackChunkName: 'OrderList' */ "../views/orderlist/OrderList"
      ),
  },
  {
    path: "/my",
    name: "My",
    component: () =>
      import(/* webpackChunkName: 'MyView' */ "../views/my/MyView"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//to去哪里，from从哪来
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  if (isLogin || to.name === "Login" || to.name === "Register") {
    next();
  } else {
    next({ name: "Login" });
  }
});

export default router;
