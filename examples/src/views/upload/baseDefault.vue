<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogVisible = ref(false)
const action = 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15'
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
