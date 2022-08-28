<script lang="ts" setup>
import { reactive, ref } from 'vue'
import {
  Column,
  Actionbar,
  Toolbar,
  LeftTree,
  Tree,
  FormItem,
  Options,
} from '@ainiteam/quick-vue3-ui'
import { Dictionary } from '@/types/dictionary'
// import { dicFormat, treeFormat } from '@/utils'
import { dicFormat, treeFormat } from '../../utils'

const dicTypeList = reactive<Array<Options>>([])
const treeDataList = reactive<Array<Tree>>([])
const dictionaryTypeList = [
  {
    id: 1,
    dicTypeId: 'gender',
    name: '性别',
  },
  {
    id: 2,
    dicTypeId: 'keyword',
    name: '关键字',
  },
]

const formModel = reactive<Dictionary>({
  id: '',
  dicTypeId: '',
  dicId: '',
  name: '',
})
const formItems = reactive<Array<FormItem>>([
  {
    label: '字典编号',
    labelWidth: '80px',
    vModel: 'dicId',
    placeholder: '字典编号',
    editReadonly: true,
    prop: 'dicId',
    rules: [
      {
        required: true,
        message: '字典编号不能为空',
        trigger: 'blur',
      },
    ],
  },
  {
    label: '字典名称',
    labelWidth: '80px',
    vModel: 'name',
    placeholder: '字典名称',
    prop: 'name',
    rules: [
      {
        required: true,
        message: '字典名称不能为空',
        trigger: 'blur',
      },
    ],
  },
  {
    label: '字典类型',
    labelWidth: '80px',
    vModel: 'dicTypeId',
    placeholder: '字典类型',
    type: 'select',
    addDisabled: true,
    editDisabled: true,
    detailDisabled: true,
    options: dicTypeList,
    change: (val: string) => {
      console.log('change', val)
    },
  },
])
const tableDataTemp = reactive<Array<Dictionary>>([
  {
    id: '1',
    dicTypeId: 'gender',
    dicId: '1',
    name: '男',
  },
  {
    id: '2',
    dicTypeId: 'gender',
    dicId: '2',
    name: '女',
  },
  {
    id: '12',
    dicTypeId: 'keyword',
    dicId: '11',
    name: '求助',
  },
  {
    id: '13',
    dicTypeId: 'keyword',
    dicId: '12',
    name: '帮助',
  },
  {
    id: '14',
    dicTypeId: 'keyword',
    dicId: '13',
    name: '帮忙',
  },
  {
    id: '15',
    dicTypeId: 'keyword',
    dicId: '14',
    name: '联系我',
  },
  {
    id: '17',
    dicTypeId: 'keyword',
    dicId: '15',
    name: '有可以做的技术',
  },
])
const tableData = reactive<Array<Dictionary>>([])
const tableColumns = reactive<Array<Column>>([
  {
    width: '50',
    type: 'selection',
  },
  {
    label: '字典编号',
    prop: 'dicId',
    width: '200',
  },
  {
    label: '字典名称',
    prop: 'name',
  },
])
const tableActionbar = reactive<Actionbar>({
  width: 200,
})
const tableToolbar = reactive<Toolbar>({
  addButtonName: '创建',
  hiddenBatchDeleteButton: true,
  hiddenImportButton: true,
  hiddenExportButton: true,
  hiddenPrintButton: true,
})
const currentTreeData = ref<Tree>({
  id: '',
  label: '',
  children: [],
})
const leftTree = reactive<LeftTree>({
  treeData: [],
})

const treeLoad = (done: any) => {
  const data = treeFormat(dictionaryTypeList, {
    id: 'dicTypeId',
    label: 'name',
    children: 'children',
  })
  treeDataList.length = 0
  treeDataList.push(...data)
  leftTree.treeData.length = 0
  leftTree.treeData.push(...treeDataList)
  const data1 = dicFormat(dictionaryTypeList, {
    value: 'dicTypeId',
    label: 'name',
  })
  dicTypeList.length = 0
  dicTypeList.push(...data1)

  currentTreeData.value.id = treeDataList[0].id
  done(currentTreeData.value.id)
}
const handleTreeClick = (data: Tree, done: any) => {
  currentTreeData.value = data
  const arr = tableDataTemp.filter(
    (x) => x.dicTypeId === currentTreeData.value.id
  )
  tableData.length = 0
  tableData.push(...arr)
  done()
}
</script>
<template>
  <quick-crud
    :form-model="formModel"
    :form-items="formItems"
    :table-data="tableData"
    :table-columns="tableColumns"
    :table-actionbar="tableActionbar"
    :table-toolbar="tableToolbar"
    :left-tree="leftTree"
    @on-tree-load="treeLoad"
    @on-tree-click="handleTreeClick"
    @on-form-submit="handleFormSubmit"
  ></quick-crud>
</template>
