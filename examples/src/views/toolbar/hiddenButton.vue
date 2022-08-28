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
    :hidden-batch-delete-button="true"
    @on-add="handleAdd"
    @on-batch-delete="handleBatchDelete"
    @on-import="handleImport"
    @on-export="handleExport"
    @on-print="handlePrint"
    @on-refresh="handleRefresh"
  ></quick-toolbar>
</template>
