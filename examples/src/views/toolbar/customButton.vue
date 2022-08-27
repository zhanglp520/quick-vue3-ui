<script lang="ts" setup>
import { reactive } from 'vue'
import { Toolbar } from '@ainiteam/quick-vue3-ui'

const handleAdd = () => {
  console.log('handleAdd')
}
const handleBatchDelete = () => {
  console.log('handleBatchDelete')
}
const handleImport = () => {
  console.log('handleImport')
}
const handleExport = () => {
  console.log('handleExport')
}
const handlePrint = () => {
  console.log('handlePrint')
}
const handleRefresh = () => {
  console.log('handleRefresh')
}
const handleCustomBtn = (data: any, done: any) => {
  console.log('handleCustomBtn')
}
const tableToolbarLeft = reactive<Toolbar>({
  btns: [
    {
      name: '左边-自定义按钮',
      position: 'left',
      type: 'default',
      click(data: any, done: any) {
        handleCustomBtn(data, done)
      },
    },
  ],
})

const tableToolbarRight = reactive<Toolbar>({
  btns: [
    {
      name: '右边-自定义按钮',
      type: 'default',
      click(data: any, done: any) {
        handleCustomBtn(data, done)
      },
    },
  ],
})
</script>
<template>
  <el-row>
    <quick-toolbar
      :table-toolbar="tableToolbarLeft"
      @on-add="handleAdd"
      @on-batch-delete="handleBatchDelete"
      @on-import="handleImport"
      @on-export="handleExport"
      @on-print="handlePrint"
      @on-refresh="handleRefresh"
    ></quick-toolbar>
  </el-row>
  <el-row>
    <quick-toolbar
      :table-toolbar="tableToolbarRight"
      @on-add="handleAdd"
      @on-batch-delete="handleBatchDelete"
      @on-import="handleImport"
      @on-export="handleExport"
      @on-print="handlePrint"
      @on-refresh="handleRefresh"
    ></quick-toolbar>
  </el-row>
</template>
