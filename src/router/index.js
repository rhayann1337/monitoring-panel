import { createRouter, createWebHistory } from "vue-router";
import SendMessagePage from "../pages/SendMessage.vue";
import SensorsPage from "../pages/Sensors.vue";

const routes = [
  {
    path: "/",
    name: "sensors",
    component: SensorsPage,
  },
  {
    path: "/send-message",
    name: "sendMessage",
    component: SendMessagePage,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
