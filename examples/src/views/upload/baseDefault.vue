<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogVisible = ref(false)
const action = 'http://localhost:3000/api/v2/system/users/upload'
const headers = reactive({
  // authorization: `Bearer ${this.$store.getters.token}`,
})
const upload = () => {
  dialogVisible.value = true
}
const handleClose = () => {
  dialogVisible.value = false
}
</script>
<template>
  <el-button type="primary" @click="upload">上传</el-button>
  <quick-upload
    :dialog-visible="dialogVisible"
    :action="action"
    :headers="headers"
    @on-close="handleClose"
  ></quick-upload>
</template>
