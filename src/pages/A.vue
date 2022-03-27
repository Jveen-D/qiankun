<!--
 * @Date: 2022-03-27 13:07:28
 * @LastEditors: dwj18066042960
 * @FilePath: \Test\src\pages\A.vue
-->
<template>
<div>This is A</div>
<Test></Test>
<Test2></Test2>
</template>
<script lang="ts" setup>
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
window.onresize = ()=>{
    console.log('A component resize')
}
</script>