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
    label: '\u7528\u6237\u540D',\r
    labelWidth: '80px',\r
    vModel: 'userName',\r
    placeholder: '\u7528\u6237\u540D',\r
  },\r
  {\r
    label: '\u624B\u673A\u53F7',\r
    labelWidth: '80px',\r
    vModel: 'phone',\r
    type: 'phone',\r
    placeholder: '\u624B\u673A\u53F7',\r
  },\r
  {\r
    label: '\u90AE\u7BB1',\r
    labelWidth: '80px',\r
    vModel: 'email',\r
    type: 'email',\r
    placeholder: '\u90AE\u7BB1',\r
  },\r
  {\r
    label: '\u5730\u5740',\r
    labelWidth: '80px',\r
    vModel: 'address',\r
    placeholder: '\u5730\u5740',\r
  },\r
])\r
const handleSubmit = () => {\r
  console.log('handleSubmit', form)\r
}\r
const handleClear = () => {\r
  Object.keys(form).forEach((key) => {\r
    form[key] = ''\r
  })\r
  console.log('handleClear', form)\r
}\r
<\/script>\r
<template>\r
  <el-row :guster="20">\r
    <el-col :span="12">\r
      <quick-form\r
        :model="form"\r
        :form-items="formItems"\r
        :show-action="true"\r
        :action-slot="true"\r
        @submit="handleSubmit"\r
        @clear="handleClear"\r
      >\r
        <template #action>\r
          <el-button type="primary" @click="handleSubmit">\u786E\u5B9A</el-button>\r
          <el-button @click="handleClear">\u53D6\u6D88</el-button>\r
        </template>\r
      </quick-form>\r
    </el-col>\r
    <el-col :span="12">\r
      <quick-form\r
        :model="form"\r
        :form-items="formItems"\r
        :action-slot="true"\r
        @submit="handleSubmit"\r
        @clear="handleClear"\r
      >\r
        <template #action>\r
          <el-button type="primary" @click="handleSubmit">\u786E\u8BA4</el-button>\r
        </template>\r
      </quick-form>\r
    </el-col>\r
  </el-row>\r
</template>\r
`;export{r as default};
