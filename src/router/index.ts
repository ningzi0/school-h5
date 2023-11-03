import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
 
// 1. 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/", // 登录
    component: () => import("../views/login.vue"),
  },
  {
    path: "/reset", // 重置密码
    component: () => import("../views/reset.vue"),
  },
  {
    path: "/index", // 首页
    component: () => import("../views/index.vue"),
  },
  {
    path: "/my", // 我的
    component: () => import("../views/my.vue"),
  },
  {
    path: "/myRegistration", // 我的活动
    component: () => import("../views/my-registration.vue"),
  },
  {
    path: "/fraction", // 得分
    component: () => import("../views/fraction.vue"),
  },
  {
    path: "/report", // 申报
    component: () => import("../views/report.vue"),
  },
  {
    path: "/record", // 申报
    component: () => import("../views/record.vue"),
  },
 
];
// 2.返回一个 router 实列，为函数，配置 history 模式
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
// 3.导出路由   去 main.ts 注册 router.ts
export default router