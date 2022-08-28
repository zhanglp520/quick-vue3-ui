<script lang="ts" setup>
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
</script>
<template>
  <quick-toolbar
    :table-toolbar="true"
    add-button-name="创建"
    batch-delete-button-name="批量删除多条"
    import-button-name="快速导入"
    export-button-name="快速导出"
    printt-button-name="报表打印"
    refresh-button-name="重载数据"
    @on-add="handleAdd"
    @on-batch-delete="handleBatchDelete"
    @on-import="handleImport"
    @on-export="handleExport"
    @on-print="handlePrint"
    @on-refresh="handleRefresh"
  ></quick-toolbar>
</template>
