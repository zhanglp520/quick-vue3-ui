import { ExtractPropTypes } from 'vue'
import {Headers} from '#/headers'

export const uploadProps = {
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  action: {
    type: String,
  },
  headers: {
    type: [Boolean, Headers],
    default: false,
  },
}

export const uploadEmits = ['onClose','onSuccess','onBeforeUpload','onError']
export type UploadProps = ExtractPropTypes<typeof uploadProps>
export type UploadEmits = ExtractPropTypes<typeof uploadEmits>
