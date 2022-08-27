## 介绍

路径位于 组件库包 components/types/tree.ts

## Tree

```ts
export interface Tree {
  id: string
  label: string
  children: Tree[]
}
```

## SelectTree

```ts
export interface SelectTree {
  value: string
  label: string
  children: SelectTree[]
}
```

## LeftTree

```ts
export interface LeftTree {
  treeSpan?: number
  treeData: Tree[]
  defaultTreeProps?: object
}
```
