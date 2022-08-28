## 介绍

路径位于组件库包 components/types/option.ts

## Option

```ts
export interface Options {
  label?: string
  value?: string | number
}
```

## TreeOption

```ts
export interface TreeOptions {
  id?: string
  label?: string
  children?: string
}
```

## SelectTreeOption

```ts
export interface SelectTreeOptions extends Options {
  children?: string
}
```
