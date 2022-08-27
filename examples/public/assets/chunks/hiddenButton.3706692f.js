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
<\/script>\r
<template>\r
  <quick-toolbar\r
    :table-toolbar="true"\r
    :hidden-batch-delete-button="true"\r
    @on-add="handleAdd"\r
    @on-batch-delete="handleBatchDelete"\r
    @on-import="handleImport"\r
    @on-export="handleExport"\r
    @on-print="handlePrint"\r
    @on-refresh="handleRefresh"\r
  ></quick-toolbar>\r
</template>\r
`;export{n as default};
