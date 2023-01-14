import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home/HomeView";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
    component: Register,
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
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
  next();
});

export default router;
