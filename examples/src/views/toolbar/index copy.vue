<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import QuickCode from '../../components/QuickCode/index.vue'
import BaseDefault from './baseDefault.vue'

const form = reactive({
  defaultCode: '',
})

const getSourceCode = async () => {
  const msg = await import(/* @vite-ignore */ `./baseDefault.vue?raw`)
  console.log(msg.default)
  form.defaultCode = msg.default
}

onMounted(() => {
  getSourceCode()
})
</script>
<template>
  <el-card>
    <base-default></base-default>
    <quick-code :autodetect="true" :code="form.defaultCode"></quick-code>
  </el-card>
  <el-card>
    <base-default></base-default>
    <quick-code :autodetect="true" :code="form.defaultCode"></quick-code>
  </el-card>
</template>
<style>
.el-card {
  margin-top: 20px;
}
</style>
