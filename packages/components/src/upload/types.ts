import { ExtractPropTypes } from 'vue'

export const uploadProps = {
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  action: {
    type: String,
  },
  headers: {
    type: [Boolean, Object],
    default: false,
  },
}

export const uploadEmits = ['onClose', 'onSuccess', 'onBeforeUpload', 'onError']
export type UploadProps = ExtractPropTypes<typeof uploadProps>
export type UploadEmits = ExtractPropTypes<typeof uploadEmits>
