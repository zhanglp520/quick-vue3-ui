<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import QuickCode from '../../components/QuickCode/index.vue'
import baseDefault from './baseDefault.vue'
import leftTree from './leftTree.vue'
import enableActionbar from './enableActionbar.vue'
import enableToolbar from './enableToolbar.vue'
import enablePagebar from './enablePagebar.vue'
import enableSearchbar from './enableSearchbar.vue'

const form = reactive({
  baseDefaultCode: '',
  leftTreeCode: '',
  enableActionbarCode: '',
  enableToolbarCode: '',
  enablePagebarCode: '',
  enableSearchbarCode: '',
})

const getSourceCode = async () => {
  const baseDefaultResult = await import(
    /* @vite-ignore */ `./baseDefault.vue?raw`
  )
  form.baseDefaultCode = baseDefaultResult.default

  const leftTreeResult = await import(/* @vite-ignore */ `./leftTree.vue?raw`)
  form.leftTreeCode = leftTreeResult.default

  const enableActionbarResult = await import(
    /* @vite-ignore */ `./enableActionbar.vue?raw`
  )
  form.enableActionbarCode = enableActionbarResult.default

  const enableToolbarResult = await import(
    /* @vite-ignore */ `./enableToolbar.vue?raw`
  )
  form.enableToolbarCode = enableToolbarResult.default

  const enablePagebarResult = await import(
    /* @vite-ignore */ `./enablePagebar.vue?raw`
  )
  form.enablePagebarCode = enablePagebarResult.default

  const enableSearchbarResult = await import(
    /* @vite-ignore */ `./enableSearchbar.vue?raw`
  )
  form.enableSearchbarCode = enableSearchbarResult.default
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
    <el-card>
      <template #header>
        <div class="card-header card-name">
          <h2>左树右表</h2>
        </div>
        <div class="card-description">
          <p>
            通过配置:left-tree="false"或者不配置不显示tree，配置:left-tree="leftTree"显示tree及tree的配置属性，具体查看如下源码
          </p>
        </div>
      </template>
      <left-tree></left-tree>
      <quick-code :autodetect="true" :code="form.leftTreeCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>启用操作栏及配置操作栏</h2>
        </div>
        <div class="card-description">
          <p>
            tableActionbar为true启用操作，tableActionbar为对象项目，配置操作栏。
            :tableActionbar="{width:200,editButtonName:'修改',hiddenDetailButton:true}"，具体查看如下源码。
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
          <h2>启用工具栏栏及配置工具栏</h2>
        </div>
        <div class="card-description">
          <p>
            toolbar为true 启用操作，toolbar为对象，配置操作栏。
            :toolbar="{addButtonName:'创建',hiddenBatchDeleteButton:true}"，具体查看如下源码。
          </p>
        </div>
      </template>
      <enable-toolbar></enable-toolbar>
      <quick-code
        :autodetect="true"
        :code="form.enableActionbarCode"
      ></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>启用分页</h2>
        </div>
        <div class="card-description">
          <p>通过配置page对象的属性来配置分页。</p>
        </div>
      </template>
      <enable-pagebar></enable-pagebar>
      <quick-code
        :autodetect="true"
        :code="form.enablePagebarCode"
      ></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>启用搜索</h2>
        </div>
        <div class="card-description">
          <p>通过配置searchFormModel和searchFormItems来控制搜索栏</p>
        </div>
      </template>
      <enable-searchbar></enable-searchbar>
      <quick-code
        :autodetect="true"
        :code="form.enableSearchbarCode"
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
