## 示例

[请在这里查看](https://template.ainiteam.com/#/components/crud)

## 属性

| 属性名          | 描述           | 类型              | 默认值 | 可选值 |
| :-------------- | :------------- | :---------------- | :----- | :----- |
| searchFormModel | 搜索表单 model | Boolean/Object    | -      | -      |
| searchFormItems | 搜索表单项集合 | Array<FormItem>   | -      | -      |
| leftTree        | 启用左树       | Boolean/Object    | false  | -      |
| leftTreeRefresh | 是否刷新左树   | Boolean           | false  | -      |
| tableData       | 表格数据       | Array             | -      | -      |
| tableColumns    | 表格列集合     | Array<Column>     | -      | -      |
| tableActionbar  | 表格操作栏     | Boolean/Actionbar | false  | -      |
| tableToolbar    | 工具栏         | Boolean/Toolbar   | false  | -      |
| page            | 分页           | Boolean/Page      | false  | -      |
| dialogTitle     | 弹窗标题       | Boolean/Object    | false  | -      |
| formModel       | 表单 model     | Object            | false  | -      |
| formItems       | 表单项集合     | Array<FormItem>   | false  | -      |
| formInline      | 行内表单       | Boolean           | false  | -      |
| loading         | 显示加载       | Boolean           | false  | -      |
| height          | 自定义表格高度 | Boolean/Number    | false  | -      |

## 方法

## 事件

| 事件名             | 描述               | 参数 |
| :----------------- | :----------------- | :--- |
| onTreeClick        | 树点击事件         | -    |
| onLoad             | 加载数据事件       | -    |
| onTreeLoad         | 加载树数据事件     | -    |
| onAdd              | 添加按钮事件       | -    |
| onEdit             | 编辑按钮事件       | -    |
| onDelete           | 删除按钮事件       | -    |
| onDetail           | 详情按钮事件       | -    |
| onBatchDelete      | 批量删除按钮事件   | -    |
| onImport           | 导入按钮事件       | -    |
| onExport           | 导出按钮事件       | -    |
| onPrint            | 打印按钮事件       | -    |
| onRefresh          | 刷新按钮事件       | -    |
| onSearchFormSubmit | 搜索表单提交事件   | -    |
| onSearchFormClear  | 搜索表单清空事件   | -    |
| onFormSubmit       | 表单提交事件       | -    |
| onFormCancel       | 表单取消事件       | -    |
| onSizeChange       | 分页条数改变事件   | -    |
| onCurrentChange    | 分页当前页改变事件 | -    |
| onSelectionChange  | 复选框选择事件     | -    |
| onTableRef         | 表格 ref 事件      | -    |

## 插槽
