<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FormItem } from '@ainiteam/quick-vue3-ui'
import { User } from '@/types/user'

const formType = ref('form')
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
    :form-type="formType"
    @submit="handleSubmit"
    @clear="handleClear"
  >
  </quick-form>
</template>
