<script setup>
import Toolbar from "../../../src/views/toolbar/index.vue";
</script>

## 示例

<Toolbar></Toolbar>

## 属性

| 属性名                     | 描述                     | 类型            | 默认值   | 可选值                        |
| :------------------------- | :----------------------- | :-------------- | :------- | :---------------------------- |
| table-toolbar              | 是否显示工具栏           | boolean/Toolbar | false    | true/false/Toolbar 的实例对象 |
| add-button-name            | 自定义新增按钮文本值     | string          | 新增     | -                             |
| batch-delete-button-name   | 自定义批量删除按钮文本值 | string          | 批量删除 | -                             |
| import-button-name         | 自定义导入按钮文本值     | string          | 导入     | -                             |
| export-button-name         | 自定义导出按钮文本值     | string          | 导出     | -                             |
| print-button-name          | 自定义打印按钮文本值     | string          | 打印     | -                             |
| refresh-button-name        | 自定义刷新按钮文本值     | string          | 刷新     | -                             |
| hidden-add-button          | 隐藏新增按钮             | string          | true     | true/false                    |
| hidden-batch-delete-button | 隐藏批量删除按钮         | string          | true     | true/false                    |
| hidden-import-button       | 隐藏导入按钮             | string          | true     | true/false                    |
| hidden-export-button       | 隐藏导出按钮             | string          | true     | true/false                    |
| hidden-print-button        | 隐藏打印按钮             | string          | true     | true/false                    |
| hidden-refresh-button      | 隐藏刷新按钮             | string          | true     | true/false                    |

## 方法

## 事件

| 事件名          | 描述         | 参数 |
| :-------------- | :----------- | :--- |
| on-add          | 添加按钮事件 | -    |
| on-batch-delete | 批量删除事件 | -    |
| on-import       | 导入事件     | -    |
| on-export       | 导出事件     | -    |
| on-print        | 打印事件     | -    |
| on-refresh      | 刷新         | -    |

## 插槽

| 插槽名       | 描述             | 参数 |
| :----------- | :--------------- | :--- |
| leftActions  | 默认按钮左边插槽 | -    |
| rightActions | 默认按钮右边插槽 | -    |
