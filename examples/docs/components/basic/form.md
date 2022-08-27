<script setup>
import Form from "../../../src/views/form/index.vue";
</script>

## 示例

<Form></Form>

## 属性

| 属性名       | 描述           | 类型       | 默认值 | 可选值 |
| :----------- | :------------- | :--------- | :----- | :----- |
| model        | 表单 model     | Object     | -      | -      |
| formItems    | 表单项集合     | FormItem[] | -      | -      |
| formInline   | 行内表单       | Boolean    | false  | -      |
| formType     | 表单类型       | String     | form   | -      |
| hiddenAction | 隐藏表单操作栏 | Boolean    | false  | -      |
| actionSlot   | 操作栏插槽     | Boolean    | false  | -      |

## 方法

## 事件

| 事件名   | 描述         | 参数 |
| :------- | :----------- | :--- |
| onSubmit | 表单提交事件 | -    |

## 插槽

| 插槽名 | 描述           | 参数 |
| :----- | :------------- | :--- |
| action | 表单操作栏插槽 | -    |
