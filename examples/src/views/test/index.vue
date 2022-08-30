<script lang="ts" setup>
import { reactive } from 'vue'
import { FormItem } from '@ainiteam/quick-vue3-ui'
import { User } from '@/types/user'
import custormIcons from './custormIcons.json'

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
  // {
  //   label: '用户名',
  //   labelWidth: '80px',
  //   vModel: 'userName',
  //   placeholder: '用户名',
  // },
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
  {
    label: '菜单图标',
    labelWidth: '80px',
    vModel: 'icon',
    placeholder: '菜单图标',
    prop: 'icon',
    type: 'icon',
    options: custormIcons,
    width: '400px',
    select: (val) => {
      debugger
      form.userName = val
    },
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
  <quick-form
    :model="form"
    :form-items="formItems"
    @submit="handleSubmit"
    @clear="handleClear"
  >
  </quick-form>
</template>
