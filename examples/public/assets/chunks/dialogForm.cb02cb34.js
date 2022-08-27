const r=`<script lang="ts" setup>\r
import { reactive, ref } from 'vue'\r
import { FormInstance } from 'element-plus'\r
import { FormItem } from '@ainiteam/quick-vue3-ui'\r
import { User } from '@/types/user'\r
\r
const quickFormRef = ref<InstanceType<typeof QuickForm>>()\r
const dialogFormVisible = ref(false)\r
const dialogFormType = ref('')\r
const dialogTitle = ref('')\r
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
\r
  {\r
    label: '\u624B\u673A\u53F7',\r
    labelWidth: '80px',\r
    vModel: 'phone',\r
    type: 'phone',\r
    placeholder: '\u624B\u673A\u53F7',\r
  },\r
])\r
const handleAdd = () => {\r
  console.log('handleAdd', form)\r
  dialogFormType.value = 'add'\r
  dialogTitle.value = '\u65B0\u589E\u7528\u6237'\r
  dialogFormVisible.value = true\r
}\r
const handleEdit = () => {\r
  console.log('handleEdit', form)\r
  dialogFormType.value = 'edit'\r
  dialogTitle.value = '\u7F16\u8F91\u7528\u6237'\r
  form.fullName = '\u5F20\u4E09'\r
  form.phone = '15229380174'\r
  dialogFormVisible.value = true\r
}\r
const handleDetail = () => {\r
  console.log('handleDetail', form)\r
  dialogFormType.value = 'detail'\r
  dialogTitle.value = '\u7528\u6237\u8BE6\u60C5'\r
  form.fullName = '\u5F20\u4E09'\r
  form.phone = '15229380174'\r
  dialogFormVisible.value = true\r
}\r
const handleOk = () => {\r
  console.log('handleOk', form)\r
  quickFormRef.value?.handleSubmit()\r
}\r
const handleCancel = () => {\r
  quickFormRef.value?.handleClear()\r
  console.log('handleCancel', form)\r
  dialogFormVisible.value = false\r
}\r
const handleSubmit = () => {\r
  dialogFormVisible.value = false\r
}\r
<\/script>\r
<template>\r
  <div>\r
    <el-button type="primary" @click="handleAdd">\u65B0\u589E</el-button>\r
    <el-button type="primary" @click="handleEdit">\u7F16\u8F91</el-button>\r
    <el-button @click="handleDetail">\u8BE6\u60C5</el-button>\r
  </div>\r
  <el-dialog\r
    v-model="dialogFormVisible"\r
    :title="dialogTitle"\r
    width="35%"\r
    @close="handleCancel()"\r
  >\r
    <quick-form\r
      ref="quickFormRef"\r
      :model="form"\r
      :form-items="formItems"\r
      :form-type="dialogFormType"\r
      :hidden-action="true"\r
      @on-submit="handleSubmit"\r
      @on-cancel="handleCancel"\r
    >\r
    </quick-form>\r
    <template #footer>\r
      <span class="dialog-footer">\r
        <template v-if="dialogFormType === 'detail'">\r
          <el-button type="primary" @click="handleCancel()">\u5173\u95ED</el-button>\r
        </template>\r
        <template v-else>\r
          <el-button @click="handleCancel()">\u53D6\u6D88</el-button>\r
          <el-button type="primary" @click="handleOk()">\u786E\u5B9A</el-button>\r
        </template>\r
      </span>\r
    </template>\r
  </el-dialog>\r
</template>\r
`;export{r as default};
