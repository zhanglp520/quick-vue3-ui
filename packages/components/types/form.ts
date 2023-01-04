import { Options, Tree, IconOptions,UploadHeaders } from '#/index'

export interface FormTitle {
  add: string
  edit: string
  detail: string
}
export interface FormItem {
  label?: string
  value?: string
  vModel: string
  placeholder?: string
  labelWidth?: string
  type?: string
  autocomplete?: string
  options?: Options[]
  iconOptions?: IconOptions[]
  treeOptions?: Tree[]
  addHidden?: boolean
  editHidden?: boolean
  detailHidden?: boolean
  addReadonly?: boolean
  editReadonly?: boolean
  detailReadonly?: boolean
  addDisabled?: boolean
  editDisabled?: boolean
  detailDisabled?: boolean
  actionUrl?: string
  headers?: UploadHeaders
  prop?: string
  rules?: any
  width?: string
  maxLength?: string
  placeholders?: Array<string>
  format?: (value: string) => any
  change?: (value: string) => void
  select?: (value: string) => void
  success?: () => void
  beforeUpload?: () => void
}
