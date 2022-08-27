<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import QuickCode from '../../components/QuickCode/index.vue'
import baseDefault from './baseDefault.vue'
import enableActionbar from './enableActionbar.vue'
import hiddenButton from './hiddenButton.vue'
import customButton from './customButton.vue'
import customActionbar from './customActionbar.vue'
import actionbarSlot from './actionbarSlot.vue'

const form = reactive({
  baseDefaultCode: '',
  enableActionbarCode: '',
  hiddenButtonCode: '',
  customButtonCode: '',
  customActionbarCode: '',
  actionbarSlotCode: '',
})
const getSourceCode = async () => {
  const baseDefaultResult = await import(
    /* @vite-ignore */ `./baseDefault.vue?raw`
  )
  form.baseDefaultCode = baseDefaultResult.default

  const enableActionbarResult = await import(
    /* @vite-ignore */ `./enableActionbar.vue?raw`
  )
  form.enableActionbarCode = enableActionbarResult.default

  const hiddenButtonResult = await import(
    /* @vite-ignore */ `./hiddenButton.vue?raw`
  )
  form.hiddenButtonCode = hiddenButtonResult.default

  const customButtonResult = await import(
    /* @vite-ignore */ `./customButton.vue?raw`
  )
  form.customButtonCode = customButtonResult.default

  const customActionbarResult = await import(
    /* @vite-ignore */ `./customActionbar.vue?raw`
  )
  form.customActionbarCode = customActionbarResult.default

  const actionbarSlotResult = await import(
    /* @vite-ignore */ `./actionbarSlot.vue?raw`
  )
  form.actionbarSlotCode = baseDefaultResult.default
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
          <p>常规表格,默认表格高575</p>
        </div>
      </template>
      <base-default></base-default>
      <quick-code :autodetect="true" :code="form.baseDefaultCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>带默认操作</h2>
        </div>
        <div class="card-description">
          <p>
            通过设置属性:tableActionbar="true"启用操作栏,操作栏默认宽度100，当需要调整操作栏宽度时可以设置:tableActionbar="{width:200}"
          </p>
        </div>
      </template>
      <enable-actionbar></enable-actionbar>
      <quick-code
        :autodetect="true"
        :code="form.enableActionbarCode"
      ></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>隐藏操作栏按钮</h2>
        </div>
        <div class="card-description">
          <p>
            通过设置属性：:hiddenEditButton="true";:hiddenDeleteButton="true";:hiddenDetailButton="true"来隐藏操作栏按钮
          </p>
        </div>
      </template>
      <hidden-button></hidden-button>
      <quick-code :autodetect="true" :code="form.hiddenButtonCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>自定义操作栏按钮名称</h2>
        </div>
        <div class="card-description">
          <p>
            通过设置属性：editButtonName="修改";deleteButtonName="移除";detailButtonName="查看"来自定义操作栏按钮名称
          </p>
        </div>
      </template>
      <custom-button></custom-button>
      <quick-code :autodetect="true" :code="form.customButtonCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>自定义操作栏按钮</h2>
        </div>
        <div class="card-description">
          <p>
            通过设置属性position为left或者right即可控制自定义按钮的位置。默认right，还可以设置其他属性。如业务需求更复杂，请使用插槽方式完全自定义,可以使用el任意组件。（通用性）
          </p>
        </div>
      </template>
      <custom-actionbar></custom-actionbar>
      <quick-code
        :autodetect="true"
        :code="form.customActionbarCode"
      ></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>操作栏插槽</h2>
        </div>
        <div class="card-description">
          <p>
            通过使用插槽名leftActionbar或rightActionbar来完全自定义操作栏中的按钮，（灵活性）
          </p>
        </div>
      </template>
      <actionbar-slot></actionbar-slot>
      <quick-code
        :autodetect="true"
        :code="form.actionbarSlotCode"
      ></quick-code>
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
