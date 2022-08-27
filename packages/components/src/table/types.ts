import { ExtractPropTypes } from 'vue'
import { Column, Actionbar } from '#/index'

export type { Actionbar }
export const tableProps = {
  data: {
    type: Array,
    default: () => {
      return {}
    },
  },
  columns: {
    type: Array<Column>,
    default: () => {
      return []
    },
  },
  height: {
    type: [Boolean, Number],
    default: false,
  },
  rowKey: {
    type: String,
    default: 'id',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  tableActionbar: {
    type: [Boolean, Object],
    default: false,
  },
  editButtonName: {
    type: String,
    default: '编辑',
  },
  deleteButtonName: {
    type: String,
    default: '删除',
  },
  detailButtonName: {
    type: String,
    default: '详情',
  },
  hiddenEditButton: {
    type: Boolean,
    default: false,
  },
  hiddenDeleteButton: {
    type: Boolean,
    default: false,
  },
  hiddenDetailButton: {
    type: Boolean,
    default: false,
  },
}

export const tableEmits = [
  'onSelectionChange',
  'onRowEdit',
  'onRowDelete',
  'onRowDetail',
  'onDone',
  'onTableRef',
]
export type TableProps = ExtractPropTypes<typeof tableProps>
export type TableEmits = ExtractPropTypes<typeof tableEmits>
