/*
 * @Date: 2022-03-21 14:28:20
 * @LastEditors: dwj18066042960
 * @FilePath: \qiankun\src\router.js
 */

import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Index",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
