import { ExtractPropTypes } from 'vue'
import { FormItem } from '#/index'

export const formProps = {
  model: {
    type: Object,
    default: () => {
      return {}
    },
  },
  formItems: {
    type: Array<FormItem>,
    default: () => {
      return []
    },
  },
  formInline: {
    type: Boolean,
    default: false,
  },
  formType: {
    type: String,
    default: 'form',
  },
  actionSlot: {
    type: Boolean,
    default: false,
  },
  hiddenAction: {
    type: Boolean,
    default: false,
  },
}

export const formEmits = ['onSubmit']
export type FormProps = ExtractPropTypes<typeof formProps>
export type FormEmits = ExtractPropTypes<typeof formEmits>
