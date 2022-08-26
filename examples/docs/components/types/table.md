
## 介绍

 路径位于src/types/table.ts

## Column

| 属性名称 | 类型          | 是否可空 | 参数                                                            |
| :------- | :------------ | :------- | :-------------------------------------------------------------- |
| label    | string        | ?        | -                                                               |
| prop     | string        | ?        | -                                                               |
| width    | string/number | ?        | -                                                               |
| type     | string        | ?        | -                                                               |
| align    | string        | ?        | -                                                               |
| slot     | string        | ?        | -                                                               |
| fixed    | string        | ?        | -                                                               |
| format   | callback      | ?        | (row: any, column?: any, cellValue?: any, index?: number): void |

## Btns

| 属性名称 | 类型     | 是否可空 | 参数                           |
| :------- | :------- | :------- | :----------------------------- |
| name     | string   | -        | -                              |
| link     | boolean  | ?        | -                              |
| type     | string   | ?        | -                              |
| size     | string   | ?        | -                              |
| hidden   | boolean  | ?        | -                              |
| position | string   | ?        | -                              |
| click    | callback | ?        | (item?: any, done?: any): void |
| render   | callback | ?        | (row: any): boolean            |

## Actionbar

| 属性名称           | 类型    | 是否可空 | 参数 |
| :----------------- | :------ | :------- | :--- |
| width              | number  | -        | -    |
| editButtonName     | boolean | ?        | -    |
| deleteButtonName   | string  | ?        | -    |
| detailButtonName   | string  | ?        | -    |
| hiddenEditButton   | boolean | ?        | -    |
| hiddenDeleteButton | boolean | ?        | -    |
| hiddenDetailButton | boolean | ?        | -    |
| btns               | Btns[]  | ?        | -    |

## Toolbar

| 属性名称                | 类型    | 是否可空 | 参数 |
| :---------------------- | :------ | :------- | :--- |
| importButtonName        | string  | ?        | -    |
| exportButtonName        | string  | ?        | -    |
| addButtonName           | string  | ?        | -    |
| batchDeleteButtonName   | string  | ?        | -    |
| printButtonName         | string  | ?        | -    |
| refreshButtonName       | string  | ?        | -    |
| hiddenImportButton      | boolean | ?        | -    |
| hiddenExportButton      | boolean | ?        | -    |
| hiddenAddButton         | string  | ?        | -    |
| hiddenBatchDeleteButton | string  | ?        | -    |
| hiddenPrintButton       | string  | ?        | -    |
| hiddenRefreshButton     | string  | ?        | -    |
| btns                    | Btns[]  | ?        | -    |
