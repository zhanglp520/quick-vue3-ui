const r=`<script lang="ts" setup>\r
import { reactive, ref } from 'vue'\r
import { FormItem } from '@ainiteam/quick-vue3-ui'\r
import { User } from '@/types/user'\r
\r
const quickFormRef = ref<InstanceType<typeof QuickForm>>()\r
const validateFullName = (rule: any, value: string, callback: any) => {\r
  const reg = /^[\\u4e00-\\u9fa5]{2,4}$/\r
  if (!value) {\r
    callback()\r
  } else if (!reg.test(value)) {\r
    callback(new Error('\u975E\u6CD5\u59D3\u540D'))\r
  } else {\r
    callback()\r
  }\r
}\r
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
    prop: 'fullName',\r
    rules: [\r
      {\r
        required: true,\r
        message: '\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A',\r
        trigger: 'blur',\r
      },\r
      {\r
        validator: validateFullName,\r
        trigger: 'blur',\r
      },\r
    ],\r
  },\r
])\r
const handleSubmit = (formRef: any) => {\r
  if (!formRef) return\r
  formRef.validate((valid) => {\r
    if (!valid) {\r
      console.log('error submit!')\r
      return false\r
    }\r
    console.log('submit!')\r
    return true\r
  })\r
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
  <quick-form\r
    ref="quickFormRef"\r
    :model="form"\r
    :form-items="formItems"\r
    @submit="handleSubmit"\r
    @clear="handleClear"\r
  >\r
  </quick-form>\r
</template>\r
`;export{r as default};
