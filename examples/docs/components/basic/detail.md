## 示例

[请在这里查看](https://template.ainiteam.com/#/components/detail)

## 属性

| 属性名     | 描述       | 类型          | 默认值 | 可选值                |
| :--------- | :--------- | :------------ | :----- | :-------------------- |
| activeName | 当前激活项 | String        | -      | -                     |
| data       | 数据       | Array<Detail> | -      | -                     |
| tabs       | tabs 配置  | Array<Tab>    | -      | -                     |
| position   | 位置       | String        | top    | top/bottom/left/right |
| enableSlot | 启用插槽   | Boolean       | false  | false/true            |

## 方法

## 事件

| 事件名   | 描述           | 参数            |
| :------- | :------------- | :-------------- |
| onChange | 选项卡切换事件 | name:选项卡名称 |

## 插槽

| 插槽名   | 描述                              | 参数 |
| :------- | :-------------------------------- | :--- |
| default  | 默认插槽，完全自定义化            | -    |
| action   | 描述列表的操作插槽                | -    |
| tablebar | 表格的操作栏插槽，type:table 生效 | -    |
