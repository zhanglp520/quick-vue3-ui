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
<\/script>\r
<template>\r
  <quick-form :model="form" :form-items="formItems" :hidden-action="true">\r
  </quick-form>\r
</template>\r
`;export{r as default};
