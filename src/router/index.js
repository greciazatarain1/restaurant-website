import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutUsView.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () =>
      import("../views/MenuView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return savedPosition || {top: 0}
  },
});

export default router;
