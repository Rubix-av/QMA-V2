import store from "./store.js";
import Home from "../pages/Home.js";
import Login from "../pages/Login.js";

// admin imports
import admin_quiz from "../pages/admin/admin_quiz.js";
import admin_dashboard from "../pages/admin/admin_dashboard.js";
import admin_summary from "../pages/admin/admin_summary.js";

// user imports
import user_scores from "../pages/user/user_scores.js";
import user_dashboard from "../pages/user/user_dashboard.js";
import user_summary from "../pages/user/user_summary.js";
import user_register from "../pages/user/user_register.js";

const routes = [
  { path: "/", component: Home },
  { path: '/login', component: Login },

  // admin paths
  { path: '/admin-quiz', component: admin_quiz },
  { path: '/admin-dashboard', component: admin_dashboard },
  { path: '/admin-summary', component: admin_summary },

  // user paths
  { path: '/user-scores', component: user_scores },
  { path: '/user-dashboard', component: user_dashboard },
  { path: '/user-summary', component: user_summary },
  { path: '/user-register', component: user_register }
]

const router = new VueRouter({
    routes,
});

// router.beforeEach((to, from, next) => {
//   if (!store.state.loggedIn && to.path !== "/user-login" && to.path !== "/" && to.path !== "/inf-register" && to.path !== "/spon-register") {
//     next({ path: "/user-login" });
//   }
//   else {
//     next();
//   }
// })

export default router;
