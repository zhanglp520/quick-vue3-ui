const n=`<script lang="ts" setup>\r
const handleAdd = () => {\r
  console.log('handleAdd')\r
}\r
const handleBatchDelete = () => {\r
  console.log('handleBatchDelete')\r
}\r
const handleImport = () => {\r
  console.log('handleImport')\r
}\r
const handleExport = () => {\r
  console.log('handleExport')\r
}\r
const handlePrint = () => {\r
  console.log('handlePrint')\r
}\r
const handleRefresh = () => {\r
  console.log('handleRefresh')\r
}\r
const handleCustomBtn = () => {\r
  console.log('handleCustomBtn')\r
}\r
<\/script>\r
<template>\r
  <el-row :guster="20">\r
    <quick-toolbar\r
      :table-toolbar="true"\r
      @on-add="handleAdd"\r
      @on-batch-delete="handleBatchDelete"\r
      @on-import="handleImport"\r
      @on-export="handleExport"\r
      @on-print="handlePrint"\r
      @on-refresh="handleRefresh"\r
    >\r
      <template #leftToolbar>\r
        <el-button type="success" @click="handleCustomBtn"\r
          >\u81EA\u5B9A\u4E49\u6309\u94AE</el-button\r
        >\r
      </template>\r
    </quick-toolbar>\r
  </el-row>\r
  <el-row :guster="20">\r
    <quick-toolbar\r
      :table-toolbar="true"\r
      @on-add="handleAdd"\r
      @on-batch-delete="handleBatchDelete"\r
      @on-import="handleImport"\r
      @on-export="handleExport"\r
      @on-print="handlePrint"\r
      @on-refresh="handleRefresh"\r
    >\r
      <template #rightToolbar>\r
        <el-button type="danger" plain @click="handleCustomBtn"\r
          >\u81EA\u5B9A\u4E49\u6309\u94AE</el-button\r
        >\r
      </template>\r
    </quick-toolbar>\r
  </el-row>\r
</template>\r
<style>\r
.el-row {\r
  margin-bottom: 20px;\r
}\r
</style>\r
`;export{n as default};
