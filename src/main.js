/*
 * @Date: 2022-03-21 13:58:42
 * @LastEditors: dwj18066042960
 * @FilePath: \qiankun\src\main.js
 */
import { createApp } from "vue";
import "./App.css";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(router);
app.mount("#app");


import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'Test app', // app name registered
    entry: { scripts: ['//localhost:3001'] },
    container: '#TestApp',
    activeRule: '/test',
  }
]);

start();