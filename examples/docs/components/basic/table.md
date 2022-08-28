<script setup>
import Table from "../../../src/views/table/index.vue";
</script>

## 示例

<Table></Table>

## 属性

| 属性名             | 描述                 | 类型              | 默认值 | 可选值 |
| :----------------- | :------------------- | :---------------- | :----- | :----- |
| data               | 表格数据             | Array             | -      | -      |
| columns            | 表格列集合           | Column[]          | -      | -      |
| height             | 表格自定义高度       | Boolean/Number    | false  | -      |
| rowKey             | 行 key               | String            | form   | -      |
| loading            | 显示加载图标         | Boolean           | false  | -      |
| tableActionbar     | 隐藏详情按钮         | Boolean/Actionbar | false  | -      |
| editButtonName     | 自定义编辑按钮文本值 | String            | 编辑   | -      |
| deleteButtonName   | 自定义删除按钮文本值 | String            | 删除   | -      |
| detailButtonName   | 自定义详情按钮文本值 | String            | 详情   | -      |
| hiddenEditButton   | 隐藏编辑按钮         | Boolean           | false  | -      |
| hiddenDeleteButton | 隐藏删除按钮         | Boolean           | false  | -      |
| hiddenDetailButton | 隐藏详情按钮         | Boolean           | false  | -      |

## 方法

## 事件

| 事件名            | 描述           | 参数 |
| :---------------- | :------------- | :--- |
| onSelectionChange | 复选框选择事件 | -    |
| onRowEdit         | 行编辑按钮事件 | -    |
| onRowDelete       | 行删除按钮事件 | -    |
| onRowDetail       | 行详情按钮事件 | -    |
| onDone            | 完成事件       | -    |
| onTableRef        | 表格 ref       | -    |

## 插槽

| 插槽名         | 描述                       | 参数 |
| :------------- | :------------------------- | :--- |
| leftActionbar  | 表格操作栏默认按钮左侧插槽 | -    |
| rightActionbar | 表格操作栏默认按钮右侧插槽 | -    |
