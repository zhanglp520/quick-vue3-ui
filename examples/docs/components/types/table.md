## 介绍

路径位于组件库包 components/types/table.ts

## Column

```ts
export interface Column {
  label?: string
  prop?: string
  width?: string | number
  type?: string
  align?: string
  slot?: boolean
  fixed?: boolean
  format?(row: any, column?: any, cellValue?: any, index?: number): void
}
```

## Btns

```ts
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
```

## Actionbar

```ts
export interface Actionbar {
  width: number
  editButtonName?: string
  deleteButtonName?: string
  detailButtonName?: string
  hiddenEditButton?: boolean
  hiddenDeleteButton?: boolean
  hiddenDetailButton?: boolean
  btns?: Array<Btns>
}
```

## Toolbar

```ts
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
```
