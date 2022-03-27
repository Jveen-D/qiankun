<!--
 * @Date: 2022-03-27 13:14:50
 * @LastEditors: dwj18066042960
 * @FilePath: \Test\src\pages\components\Test2.vue
-->
<template>
<div class="text-blue-500">This is Test</div>
</template>
<script lang="ts" setup>
window.onresize = ()=>{
    console.log('Testsss window resize')
}
// window.addEventListener('resize',()=>{
//     console.log('Test2 window resize')
// })
</script>