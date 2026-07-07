import { createRouter, createWebHistory } from "vue-router";
 
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
 
const routes = [
  { path: "/", component: HomeView },
  { path: "/shop", component: ShopView },
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;