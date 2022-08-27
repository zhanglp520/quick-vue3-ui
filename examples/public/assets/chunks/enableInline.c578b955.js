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
])\r
const handleSubmit = () => {\r
  console.log('handleSubmit', form)\r
}\r
const handleClear = () => {\r
  Object.keys(form).forEach((key) => {\r
    form[key] = ''\r
  })\r
  console.log('handleSubmit', form)\r
}\r
<\/script>\r
<template>\r
  <div class="enable-inline">\r
    <quick-form\r
      :model="form"\r
      :form-items="formItems"\r
      :inline="true"\r
      @submit="handleSubmit"\r
      @clear="handleClear"\r
    >\r
    </quick-form>\r
  </div>\r
</template>\r
<style>\r
.enable-inline {\r
  /* width: 500px; */\r
}\r
</style>\r
`;export{r as default};
