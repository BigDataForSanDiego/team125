import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import "bootstrap";

import Session from "./core/session";
window.Session = Session;

createApp(App).use(router).mount("#app");
