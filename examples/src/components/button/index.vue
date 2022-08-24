<script lang="ts" setup>
// import {QuickButton} from '@quick-vue3-ui/components'
const handleClick = () => {
  console.log("handleClick");
};
</script>
<template>
  <div>
    <quick-button
      tip="我是测试按钮"
      size="large"
      type="primary"
      @click="handleClick"
      >我是quick按钮</quick-button
    >
  </div>
</template>
