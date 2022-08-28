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
])
const handleSubmit = () => {
  console.log('handleSubmit', form)
}
const handleClear = () => {
  Object.keys(form).forEach((key) => {
    form[key] = ''
  })
  console.log('handleSubmit', form)
}
</script>
<template>
  <div class="enable-inline">
    <quick-form
      :model="form"
      :form-items="formItems"
      :inline="true"
      @submit="handleSubmit"
      @clear="handleClear"
    >
    </quick-form>
  </div>
</template>
<style>
.enable-inline {
  /* width: 500px; */
}
</style>
