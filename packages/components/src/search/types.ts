import { ExtractPropTypes } from 'vue'
import { FormItem } from '#/index'

export const searchProps = {
  model: {
    type: Object,
    default: () => {
      return {}
    },
  },
  items: {
    type: Array<FormItem>,
    default: () => {
      return []
    },
  },
  searchButtonName: {
    type: String,
    default: '查询',
  },
  resetButtonName: {
    type: String,
    default: '清空',
  },
  hiddenResetButton: {
    type: Boolean,
    default: false,
  },
}

export const searchEmits = ['onSearch', 'onClear']
export type SearchProps = ExtractPropTypes<typeof searchProps>
export type SearchEmits = ExtractPropTypes<typeof searchEmits>
