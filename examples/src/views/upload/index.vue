<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import QuickCode from '../../components/QuickCode/index.vue'
import baseDefault from './baseDefault.vue'

const form = reactive({
  defaultCode: '',
})
const getSourceCode = async () => {
  const baseDefaultResult = await import(
    /* @vite-ignore */ `./baseDefault.vue?raw`
  )
  form.defaultCode = baseDefaultResult.default
}
onMounted(() => {
  getSourceCode()
})
</script>
<template>
  <div class="component-demo">
    <el-card>
      <template #header>
        <div class="card-header card-name">
          <h2>默认</h2>
        </div>
        <div class="card-description">
          <p>常规工具栏</p>
        </div>
      </template>
      <base-default></base-default>
      <quick-code :autodetect="true" :code="form.defaultCode"></quick-code>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.component-demo {
  .card-name {
  }
  .card-description {
    margin-top: 10px;
  }
  .item {
    margin-top: 10px;
  }
}
</style>
