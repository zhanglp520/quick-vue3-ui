import { ExtractPropTypes } from 'vue'
import type QuickForm from '@/form/index'
import {
  Column,
  Actionbar,
  Toolbar,
  LeftTree,
  Page,
  FormItem,
  Tree,
} from '#/index'

export type { Toolbar, Actionbar, LeftTree, Page, Tree, QuickForm }
export const crudProps = {
  searchFormModel: {
    type: [Boolean, Object],
    default: false,
  },
  searchFormItems: {
    type: Array<FormItem>,
    default: () => {
      return []
    },
  },
  dialogTitle: {
    type: [Boolean, Object],
    default: false,
  },
  formModel: {
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

  leftTree: {
    type: [Boolean, Object],
    default: false,
  },
  leftTreeRefresh: {
    type: Boolean,
    default: false,
  },
  tableData: {
    type: Array,
    default: () => {
      return []
    },
  },
  tableColumns: {
    type: Array<Column>,
    default: () => {
      return []
    },
  },
  tableActionbar: {
    type: [Boolean, Object],
    default: false,
  },
  tableToolbar: {
    type: [Boolean, Object],
    default: false,
  },
  page: {
    type: [Boolean, Object],
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  height: {
    type: [Boolean, Number],
    default: false,
  },
}

export const crudEmits = [
  'onTreeClick',
  'onLoad',
  'onTreeLoad',
  'onAdd',
  'onEdit',
  'onDelete',
  'onDetail',
  'onBatchDelete',
  'onImport',
  'onExport',
  'onPrint',
  'onRefresh',
  'onSearchFormSubmit',
  'onSearchFormClear',
  'onFormSubmit',
  'onFormCancel',
  'onSizeChange',
  'onCurrentChange',
  'onSelectionChange',
  'onTableRef',
]
export type CrudProps = ExtractPropTypes<typeof crudProps>
export type CrudEmits = ExtractPropTypes<typeof crudEmits>
