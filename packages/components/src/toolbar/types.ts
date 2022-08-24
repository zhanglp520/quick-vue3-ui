import { ExtractPropTypes } from "vue";

export const toolbarProps = {
  addButtonName: {
    type: String,
    default: "新增",
  },
  batchDeleteButtonName: {
    type: String,
    default: "批量删除",
  },
  importButtonName: {
    type: String,
    default: "导入",
  },
  exportButtonName: {
    type: String,
    default: "导出",
  },
  printtButtonName: {
    type: String,
    default: "打印",
  },
  refreshButtonName: {
    type: String,
    default: "刷新",
  },
  hiddenAddButton: {
    type: Boolean,
    default: false,
  },
  hiddenBatchDeleteButton: {
    type: Boolean,
    default: false,
  },
  hiddenImportButton: {
    type: Boolean,
    default: false,
  },
  hiddenExportButton: {
    type: Boolean,
    default: false,
  },
  hiddenPrintButton: {
    type: Boolean,
    default: false,
  },
  hiddenRefreshButton: {
    type: Boolean,
    default: false,
  },
  tableToolbar: {
    type: [Boolean, Object],
    default: false,
  },
};

export const toolbarEmits = [
  "onAdd",
  "onBatchDelete",
  "onImport",
  "onExport",
  "onPrint",
  "onRefresh",
  "onCustomToolbarClick",
];
export interface Btns {
  name: string
  link?: boolean
  type?: string
  size?: string
  hidden?: boolean
  position?: string
  click(item?: any, done?: any): void
  render?(row: any): boolean
}
export interface Toolbar {
  importButtonName?: string
  exportButtonName?: string
  addButtonName?: string
  batchDeleteButtonName?: string
  printButtonName?: string
  refreshButtonName?: string
  hiddenImportButton?: boolean
  hiddenExportButton?: boolean
  hiddenAddButton?: boolean
  hiddenBatchDeleteButton?: boolean
  hiddenPrintButton?: boolean
  hiddenRefreshButton?: boolean
  btns?: Array<Btns>
}
export type ToolbarProps = ExtractPropTypes<typeof toolbarProps>;
export type ToolbarEmits = ExtractPropTypes<typeof toolbarEmits>;
