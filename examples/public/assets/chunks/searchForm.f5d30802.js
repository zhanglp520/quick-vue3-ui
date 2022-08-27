const r=`<script lang="ts" setup>\r
import { reactive } from 'vue'\r
import { FormItem } from '@ainiteam/quick-vue3-ui'\r
import { User } from '@/types/user'\r
\r
const form = reactive<User>({\r
  id: '',\r
  userId: '',\r
  userName: '',\r
})\r
const formItems = reactive<Array<FormItem>>([\r
  {\r
    label: '\u59D3\u540D',\r
    labelWidth: '80px',\r
    vModel: 'fullName',\r
    placeholder: '\u59D3\u540D',\r
  },\r
  {\r
    label: '\u624B\u673A\u53F7',\r
    labelWidth: '80px',\r
    vModel: 'phone',\r
    type: 'phone',\r
    placeholder: '\u624B\u673A\u53F7',\r
  },\r
])\r
const handleSearch = () => {\r
  console.log('handleSearch', form)\r
}\r
const handleClear = () => {\r
  Object.keys(form).forEach((key) => {\r
    form[key] = ''\r
  })\r
  console.log('handleClear', form)\r
}\r
<\/script>\r
<template>\r
  <quick-form\r
    :model="form"\r
    :inline="true"\r
    form-type="search"\r
    :form-items="formItems"\r
    :show-action="true"\r
    :action-slot="true"\r
  >\r
    <template #action>\r
      <el-form-item>\r
        <el-button type="primary" @click="handleSearch">\u67E5\u8BE2</el-button>\r
      </el-form-item>\r
      <el-form-item>\r
        <el-button @click="handleClear">\u6E05\u7A7A</el-button>\r
      </el-form-item>\r
    </template>\r
  </quick-form>\r
</template>\r
`;export{r as default};
