<!--
 * @Date: 2022-03-21 13:58:42
 * @LastEditors: dwj18066042960
 * @FilePath: \qiankun\src\App.vue
-->
<template>
<div class="h-[40px] bg-blue-300 flex items-center px-4">
    <!-- 子应用路由跳转 -->
    <router-link class="text-white" to="/child/child1">child/child1</router-link>
</div>
<!-- 子应用 -->
<div id="TestApp"></div>
</template>

<script lang="ts" setup>
</script>

