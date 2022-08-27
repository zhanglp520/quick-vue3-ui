<script lang="ts" setup>
import { reactive } from 'vue'
import { FormItem } from '@ainiteam/quick-vue3-ui'
import { User } from '@/types/user'

const form = reactive<User>({
  id: '',
  userId: '',
  userName: '',
})
const formItems = reactive<Array<FormItem>>([
  {
    label: '姓名',
    labelWidth: '80px',
    vModel: 'fullName',
    placeholder: '姓名',
  },
  {
    label: '用户名',
    labelWidth: '80px',
    vModel: 'userName',
    placeholder: '用户名',
  },
  {
    label: '手机号',
    labelWidth: '80px',
    vModel: 'phone',
    type: 'phone',
    placeholder: '手机号',
  },
  {
    label: '邮箱',
    labelWidth: '80px',
    vModel: 'email',
    type: 'email',
    placeholder: '邮箱',
  },
  {
    label: '地址',
    labelWidth: '80px',
    vModel: 'address',
    placeholder: '地址',
  },
])
const handleSubmit = () => {
  console.log('handleSubmit', form)
}
const handleClear = () => {
  Object.keys(form).forEach((key) => {
    form[key] = ''
  })
  console.log('handleClear', form)
}
</script>
<template>
  <el-row :guster="20">
    <el-col :span="12">
      <quick-form
        :model="form"
        :form-items="formItems"
        :show-action="true"
        :action-slot="true"
        @submit="handleSubmit"
        @clear="handleClear"
      >
        <template #action>
          <el-button type="primary" @click="handleSubmit">确定</el-button>
          <el-button @click="handleClear">取消</el-button>
        </template>
      </quick-form>
    </el-col>
    <el-col :span="12">
      <quick-form
        :model="form"
        :form-items="formItems"
        :action-slot="true"
        @submit="handleSubmit"
        @clear="handleClear"
      >
        <template #action>
          <el-button type="primary" @click="handleSubmit">确认</el-button>
        </template>
      </quick-form>
    </el-col>
  </el-row>
</template>
