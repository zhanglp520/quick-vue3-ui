## 介绍

路径位于 src/types/tree.ts

## Tree

| 属性名称 | 类型   | 是否可空 | 参数 |
| :------- | :----- | :------- | :--- |
| id       | string | -        | -    |
| label    | string | -        | -    |
| children | Tree[] | -        | -    |

## SelectTree

| 属性名称 | 类型         | 是否可空 | 参数 |
| :------- | :----------- | :------- | :--- |
| value    | string       | -        | -    |
| label    | string       | -        | -    |
| children | SelectTree[] | -        | -    |

## LeftTree

| 属性名称         | 类型     | 是否可空 | 参数 |
| :--------------- | :------- | :------- | :--- |
| treeSpan         | string   | ?        | -    |
| treeData         | Tree[]   | -        | -    |
| defaultTreeProps | object[] | ?        | -    |
