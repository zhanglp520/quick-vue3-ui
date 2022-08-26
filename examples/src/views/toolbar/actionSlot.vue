<script lang="ts" setup>
const handleAdd = () => {
  console.log("handleAdd");
};
const handleBatchDelete = () => {
  console.log("handleBatchDelete");
};
const handleImport = () => {
  console.log("handleImport");
};
const handleExport = () => {
  console.log("handleExport");
};
const handlePrint = () => {
  console.log("handlePrint");
};
const handleRefresh = () => {
  console.log("handleRefresh");
};
const handleCustomBtn = () => {
  console.log("handleCustomBtn");
};
</script>
<template>
  <el-row :guster="20">
    <quick-toolbar
      :table-toolbar="true"
      @on-add="handleAdd"
      @on-batch-delete="handleBatchDelete"
      @on-import="handleImport"
      @on-export="handleExport"
      @on-print="handlePrint"
      @on-refresh="handleRefresh"
    >
      <template #leftToolbar>
        <el-button type="success" @click="handleCustomBtn"
          >自定义按钮</el-button
        >
      </template>
    </quick-toolbar>
  </el-row>
  <el-row :guster="20">
    <quick-toolbar
      :table-toolbar="true"
      @on-add="handleAdd"
      @on-batch-delete="handleBatchDelete"
      @on-import="handleImport"
      @on-export="handleExport"
      @on-print="handlePrint"
      @on-refresh="handleRefresh"
    >
      <template #rightToolbar>
        <el-button type="danger" plain @click="handleCustomBtn"
          >自定义按钮</el-button
        >
      </template>
    </quick-toolbar>
  </el-row>
</template>
<style>
.el-row{
  margin-bottom: 20px;
}
</style>