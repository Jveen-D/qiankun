<!--
 * @Date: 2022-03-27 13:09:15
 * @LastEditors: dwj18066042960
 * @FilePath: \Test\src\pages\components\Test.vue
-->
<template>
<div class="text-blue-500">This is Test</div>
</template>
<script lang="ts" setup>
// window.onresize = ()=>{
//     console.log('Test window resize')
// }
window.addEventListener('resize',()=>{
    console.log('Test window resize')
})
</script>