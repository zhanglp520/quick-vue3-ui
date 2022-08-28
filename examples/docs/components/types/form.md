## 介绍

路径位于组件库包 components/types/form.ts

## FormTitle

```ts
export interface FormTitle {
  add: string
  edit: string
  detail: string
}
```

## FormItem

```ts
export interface FormItem {
  label?: string
  value?: string
  vModel: string
  placeholder?: string
  labelWidth?: string
  type?: string
  autocomplete?: string
  options?: Options[]
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
  imgUrl?: string
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
```
