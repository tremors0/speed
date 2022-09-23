import { createApp } from "vue"
import App from "./App.vue"
import "./main.css"
import Toast from "vue-toastification"
// Import the CSS or use your own!
import "vue-toastification/dist/index.css"

createApp(App).use(Toast).mount("#app")
