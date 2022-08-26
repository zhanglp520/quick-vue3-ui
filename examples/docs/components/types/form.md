## 介绍

路径位于 src/types/form.ts

## FormTitle

| 属性名称 | 类型   | 是否可空 | 参数 |
| :------- | :----- | :------- | :--- |
| add      | string | -        | -    |
| edit     | string | -        | -    |
| detail   | string | -        | -    |

## FormItem

| 属性名称       | 类型      | 是否可空 | 参数                    |
| :------------- | :-------- | :------- | :---------------------- |
| label          | string    | ?        | -                       |
| value          | string    | ?        | -                       |
| vModel         | string    | -        | -                       |
| placeholder    | string    | ?        | -                       |
| labelWidth     | string    | ?        | -                       |
| type           | string    | ?        | -                       |
| autocomplete   | boolean   | ?        | -                       |
| options        | Options[] | ?        | -                       |
| treeOptions    | Tree[]    | ?        | -                       |
| addHidden      | boolean   | ?        | -                       |
| editHidden     | boolean   | ?        | -                       |
| detailHidden   | boolean   | ?        | -                       |
| addReadonly    | boolean   | ?        | -                       |
| editReadonly   | boolean   | ?        | -                       |
| detailReadonly | boolean   | ?        | -                       |
| addDisabled    | boolean   | ?        | -                       |
| editDisabled   | boolean   | ?        | -                       |
| detailDisabled | boolean   | ?        | -                       |
| actionUrl      | string    | ?        | -                       |
| imgUrl         | string    | ?        | -                       |
| prop           | string    | ?        | -                       |
| rules          | object    | ?        | -                       |
| width          | string    | ?        | -                       |
| maxLength      | string    | ?        | -                       |
| placeholders   | string[]  | ?        | -                       |
| format         | callback  | ?        | (value: string) => any  |
| change         | callback  | ?        | (value: string) => void |
| select         | callback  | ?        | (value: string) => void |
| success        | callback  | ?        | () => void              |
| beforeUpload   | callback  | ?        | () => void              |
