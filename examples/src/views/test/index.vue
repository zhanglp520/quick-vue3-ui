<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FormItem } from '@ainiteam/quick-vue3-ui'
import { User } from '@/types/user'
import '@/assets/iconfont/quickIconFont.js'
import quickIconFont from '@/config/quickIconFont.json'
import { ElMessage } from 'element-plus'

const imageUrl = ref('')
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  debugger
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  form.avatar=imageUrl.value
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  }
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

const form = reactive<User>({
  id: '',
  userId: '',
  userName: '',
})
const formItems = reactive<Array<FormItem>>([
  {
    label: '头像',
    labelWidth: '80px',
    vModel: 'avatar',
    placeholder: '头像',
    type: 'avatar',
    actionUrl: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
    // headers:{
    //   // authorization: `Bearer ${this.$store.getters.token}`,
    // },
    success: handleAvatarSuccess,
    beforeUpload: beforeAvatarUpload,
  },
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
    iconOptions: [
      {
        label: 'quick官网',
        data: quickIconFont,
      },
    ],
    width: '400px',
    select: (val) => {
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
