import { createApp } from "vue";
import App from "./App.vue";

import "./styles/main.scss";
import "./styles/progressbar.scss";

const app = createApp(App);

// Pinia
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
