const n=`<script lang="ts" setup>\r
import { reactive } from 'vue'\r
import { Toolbar } from '@ainiteam/quick-vue3-ui'\r
\r
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
const handleCustomBtn = (data: any, done: any) => {\r
  console.log('handleCustomBtn')\r
}\r
const tableToolbarLeft = reactive<Toolbar>({\r
  btns: [\r
    {\r
      name: '\u5DE6\u8FB9-\u81EA\u5B9A\u4E49\u6309\u94AE',\r
      position: 'left',\r
      type: 'default',\r
      click(data: any, done: any) {\r
        handleCustomBtn(data, done)\r
      },\r
    },\r
  ],\r
})\r
\r
const tableToolbarRight = reactive<Toolbar>({\r
  btns: [\r
    {\r
      name: '\u53F3\u8FB9-\u81EA\u5B9A\u4E49\u6309\u94AE',\r
      type: 'default',\r
      click(data: any, done: any) {\r
        handleCustomBtn(data, done)\r
      },\r
    },\r
  ],\r
})\r
<\/script>\r
<template>\r
  <el-row>\r
    <quick-toolbar\r
      :table-toolbar="tableToolbarLeft"\r
      @on-add="handleAdd"\r
      @on-batch-delete="handleBatchDelete"\r
      @on-import="handleImport"\r
      @on-export="handleExport"\r
      @on-print="handlePrint"\r
      @on-refresh="handleRefresh"\r
    ></quick-toolbar>\r
  </el-row>\r
  <el-row>\r
    <quick-toolbar\r
      :table-toolbar="tableToolbarRight"\r
      @on-add="handleAdd"\r
      @on-batch-delete="handleBatchDelete"\r
      @on-import="handleImport"\r
      @on-export="handleExport"\r
      @on-print="handlePrint"\r
      @on-refresh="handleRefresh"\r
    ></quick-toolbar>\r
  </el-row>\r
</template>\r
`;export{n as default};
