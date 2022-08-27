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
    add-button-name="\u521B\u5EFA"\r
    batch-delete-button-name="\u6279\u91CF\u5220\u9664\u591A\u6761"\r
    import-button-name="\u5FEB\u901F\u5BFC\u5165"\r
    export-button-name="\u5FEB\u901F\u5BFC\u51FA"\r
    printt-button-name="\u62A5\u8868\u6253\u5370"\r
    refresh-button-name="\u91CD\u8F7D\u6570\u636E"\r
    @on-add="handleAdd"\r
    @on-batch-delete="handleBatchDelete"\r
    @on-import="handleImport"\r
    @on-export="handleExport"\r
    @on-print="handlePrint"\r
    @on-refresh="handleRefresh"\r
  ></quick-toolbar>\r
</template>\r
`;export{n as default};
