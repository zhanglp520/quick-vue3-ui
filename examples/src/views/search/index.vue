<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import QuickCode from '../../components/QuickCode/index.vue'
import baseDefault from './baseDefault.vue'
import hiddenButton from './hiddenButton.vue'
import customButton from './customButton.vue'

const form = reactive({
  baseDefaultCode: '',
  customButtonCode: '',
  hiddenButtonCode: '',
})
const getSourceCode = async () => {
  const baseDefaultResult = await import(
    /* @vite-ignore */ `./baseDefault.vue?raw`
  )
  form.baseDefaultCode = baseDefaultResult.default
  const customButtonResult = await import(
    /* @vite-ignore */ `./customButton.vue?raw`
  )
  form.customButtonCode = customButtonResult.default
  const hiddenButtonResult = await import(
    /* @vite-ignore */ `./hiddenButton.vue?raw`
  )
  form.hiddenButtonCode = hiddenButtonResult.default
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
          <p>常规搜索</p>
        </div>
      </template>
      <base-default></base-default>
      <quick-code :autodetect="true" :code="form.baseDefaultCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>自定义按钮</h2>
        </div>
        <div class="card-description">
          <p>
            通过设置属性search-button-name="搜索"自定义查询按钮文本名称，通过设置属性reset-button-name="重置"自定义清空按钮文本名称
          </p>
        </div>
      </template>
      <custom-button></custom-button>
      <quick-code :autodetect="true" :code="form.customButtonCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>隐藏清空按钮</h2>
        </div>
        <div class="card-description">
          <p>通过设置属性:hidden-reset-button="false"隐藏清空按钮</p>
        </div>
      </template>
      <hidden-button></hidden-button>
      <quick-code :autodetect="true" :code="form.hiddenButtonCode"></quick-code>
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
