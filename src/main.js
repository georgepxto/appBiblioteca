import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Importe o Vuetify e outros plugins necessários
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const vuetify = createVuetify({
  // suas configurações do Vuetify aqui
});

const app = createApp(App);

// Use o router antes de montar a aplicação
app.use(router);
app.use(vuetify);

app.mount("#app");
