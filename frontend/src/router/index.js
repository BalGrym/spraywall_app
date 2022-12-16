import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/wall/:id/:slug",
    name: "wall.show",
    component: () => import("../views/WallShow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
