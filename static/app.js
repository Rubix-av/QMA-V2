import router from "./utils/router.js";
import Navbar from "./components/Navbar.js";
import store from "./utils/store.js";

console.log("app.js loaded");

new Vue({
  el: "#app",
  template: `
    <div>
      <Navbar />
      <div>
        <router-view />
      </div>
    </div>
  `,
  router,
  store,
  components: {
    Navbar
  }
});