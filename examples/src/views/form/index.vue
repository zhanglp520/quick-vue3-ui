<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import QuickCode from '../../components/QuickCode/index.vue'
import baseDefault from './baseDefault.vue'
import customAction from './customAction.vue'
import hiddenButton from './hiddenButton.vue'
import enableInline from './enableInline.vue'
import enableRule from './enableRule.vue'
import formType from './formType.vue'
import searchForm from './searchForm.vue'
import dialogForm from './dialogForm.vue'
import drawerForm from './drawerForm.vue'

const form = reactive({
  baseDefaultCode: '',
  customActionCode: '',
  hiddenButtonCode: '',
  enableInlineCode: '',
  enableRuleCode: '',
  formTypeCode: '',
  searchFormCode: '',
  dialogFormCode: '',
  drawerFormCode: '',
})
const getSourceCode = async () => {
  const baseDefaultResult = await import(
    /* @vite-ignore */ `./baseDefault.vue?raw`
  )
  form.baseDefaultCode = baseDefaultResult.default

  const customActionResult = await import(
    /* @vite-ignore */ `./customAction.vue?raw`
  )
  form.customActionCode = customActionResult.default
  const hiddenButtonResult = await import(
    /* @vite-ignore */ `./hiddenButton.vue?raw`
  )
  form.hiddenButtonCode = hiddenButtonResult.default

  const enableInlineResult = await import(
    /* @vite-ignore */ `./enableInline.vue?raw`
  )
  form.enableInlineCode = enableInlineResult.default

  const enableRuleResult = await import(
    /* @vite-ignore */ `./enableRule.vue?raw`
  )
  form.enableRuleCode = enableRuleResult.default

  const formTypeResult = await import(/* @vite-ignore */ `./formType.vue?raw`)
  form.formTypeCode = formTypeResult.default

  const searchFormResult = await import(
    /* @vite-ignore */ `./searchForm.vue?raw`
  )
  form.searchFormCode = searchFormResult.default

  const dialogFormResult = await import(
    /* @vite-ignore */ `./dialogForm.vue?raw`
  )
  form.dialogFormCode = dialogFormResult.default

  const drawerFormResult = await import(
    /* @vite-ignore */ `./drawerForm.vue?raw`
  )
  form.drawerFormCode = drawerFormResult.default
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
          <p>常规表单</p>
        </div>
      </template>
      <base-default></base-default>
      <quick-code :autodetect="true" :code="form.baseDefaultCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>自定义表单操作按钮</h2>
        </div>
        <div class="card-description">
          <p>
            通过设置属性:action-slot="true"启用插槽，然后通过插槽自定义表单操作按钮
          </p>
        </div>
      </template>
      <custom-action></custom-action>
      <quick-code :autodetect="true" :code="form.customActionCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>隐藏表单按钮</h2>
        </div>
        <div class="card-description">
          <p>通过设置属性:hidden-action="true"隐藏表单操作按钮</p>
        </div>
      </template>
      <hidden-button></hidden-button>
      <quick-code :autodetect="true" :code="form.hiddenButtonCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>行内表单</h2>
        </div>
        <div class="card-description">
          <p>通过设置属性:inline="true"启用行内表单</p>
        </div>
      </template>
      <enable-inline></enable-inline>
      <quick-code :autodetect="true" :code="form.enableInlineCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>表单验证</h2>
        </div>
        <div class="card-description">
          <p>通过设置属性formItems中的prop和rules校验表单</p>
        </div>
      </template>
      <enable-rule></enable-rule>
      <quick-code :autodetect="true" :code="form.enableRuleCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>表单类型</h2>
        </div>
        <div class="card-description">
          <p>
            通过设置属性formType="form",默认值form，可选值：form|search|add|edit|detail
          </p>
        </div>
      </template>
      <form-type></form-type>
      <quick-code :autodetect="true" :code="form.formTypeCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>搜索表单</h2>
        </div>
        <div class="card-description">
          <p>默认搜索表单，如需更灵活的配置，请使用search组件</p>
        </div>
      </template>
      <search-form></search-form>
      <quick-code :autodetect="true" :code="form.searchFormCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>弹窗表单</h2>
        </div>
        <div class="card-description">
          <p>使用默认表单，如需更灵活的配置，请使用参考表单组件</p>
        </div>
      </template>
      <dialog-form></dialog-form>
      <quick-code :autodetect="true" :code="form.dialogFormCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>抽屉表单</h2>
        </div>
        <div class="card-description">
          <p>使用默认表单，如需更灵活的配置，请使用参考表单组件</p>
        </div>
      </template>
      <drawer-form></drawer-form>
      <quick-code :autodetect="true" :code="form.drawerFormCode"></quick-code>
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
