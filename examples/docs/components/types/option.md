## 介绍

路径位于 src/types/option.ts

## Option

| 属性名称 | 类型          | 是否可空 | 参数 |
| :------- | :------------ | :------- | :--- |
| label    | string        | ?        | -    |
| value    | string/number | ?        | -    |

## TreeOption

| 属性名称 | 类型         | 是否可空 | 参数 |
| :------- | :----------- | :------- | :--- |
| id       | string       | ?        | -    |
| label    | string       | ?        | -    |
| children | TreeOption[] | ?        | -    |

## SelectTreeOption

| 属性名称 | 类型               | 是否可空 | 参数 |
| :------- | :----------------- | :------- | :--- |
| children | SelectTreeOption[] | ?        | -    |
