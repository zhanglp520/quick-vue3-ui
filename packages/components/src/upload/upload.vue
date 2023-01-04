<script lang="ts" setup name="QuickUpload">
import {
  UploadFile,
  UploadFiles,
  UploadInstance,
  UploadProps,
  UploadRawFile,
  UploadUserFile,
} from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import { defineProps, defineEmits, toRefs, ref } from 'vue'
import { uploadProps, uploadEmits } from './types'

const props = defineProps(uploadProps)
const { dialogVisible, action, headers } = toRefs(props)
const emits = defineEmits(uploadEmits)
const uploadRef = ref<UploadInstance>()
const upload = ref(null)
const tip = ref('')
const fileList = ref<UploadUserFile[]>([
  // {
  //   name: 'food.jpeg',
  //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  // },
  // {
  //   name: 'food2.jpeg',
  //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  // },
])
const selectFile = () => {
  uploadRef.value!.handleStart()
}
const startUpload = () => {
  tip.value = ''
  if (fileList.value.length <= 0) {
    tip.value = '无待上传文件'
    return
  }
  uploadRef.value!.submit()
}
const cancelUpload = () => {
  fileList.value.forEach((element) => {
    uploadRef.value!.abort(element)
  })
  emits('onClose')
}
const clearFiles = () => {}
const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  console.log('handleChange')
}

const handleBeforeUpload: UploadProps['beforeUpload'] = (
  rawFile: UploadRawFile
) => {
  emits('onBeforeUpload',{
    rawFile
  })
}
const handleSuccess: UploadProps['onSuccess'] = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  emits('onSuccess',{
    response,
    uploadFile,
    uploadFiles
  })
}
const handleError: UploadProps['onError'] = (
  error: Error,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  emits('onError',{
    error,
    uploadFile,
    uploadFiles
  })
}

const handleClose = () => {
  emits('onClose')
}
</script>
<template>
  <el-dialog
    v-model="dialogVisible"
    title="上传"
    width="30%"
    :before-close="handleClose"
  >
    <el-upload
      ref="uploadRef"
      v-model:file-list="fileList"
      class="upload-demo"
      :action="action"
      :headers="headers"
      drag
      multiple
      :auto-upload="false"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :before-upload="handleBeforeUpload"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">将文件拖到此处或点击上传</div>
      <template #tip>
        <div class="el-upload__tip">
          {{ tip }}
        </div>
      </template>
    </el-upload>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelUpload">取消上传</el-button>
        <el-button type="primary" @click="startUpload"> 开始上传 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style lang="scss" scoped>
.upload {
  margin-bottom: 10px;
}
</style>
