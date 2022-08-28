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
    label: '手机号',
    labelWidth: '80px',
    vModel: 'phone',
    type: 'phone',
    placeholder: '手机号',
  },
])
const handleSearch = () => {
  console.log('handleSearch', form)
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
    :inline="true"
    form-type="search"
    :form-items="formItems"
    :show-action="true"
    :action-slot="true"
  >
    <template #action>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleClear">清空</el-button>
      </el-form-item>
    </template>
  </quick-form>
</template>
