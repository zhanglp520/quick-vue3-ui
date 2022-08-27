const r=`<script lang="ts" setup>\r
import { reactive, ref } from 'vue'\r
import {\r
  Column,\r
  Actionbar,\r
  Toolbar,\r
  LeftTree,\r
  Tree,\r
  FormItem,\r
  Options,\r
} from '@ainiteam/quick-vue3-ui'\r
import { Dictionary } from '@/types/dictionary'\r
// import { dicFormat, treeFormat } from '@/utils'\r
import { dicFormat, treeFormat } from '../../utils'\r
\r
const dicTypeList = reactive<Array<Options>>([])\r
const treeDataList = reactive<Array<Tree>>([])\r
const dictionaryTypeList = [\r
  {\r
    id: 1,\r
    dicTypeId: 'gender',\r
    name: '\u6027\u522B',\r
  },\r
  {\r
    id: 2,\r
    dicTypeId: 'keyword',\r
    name: '\u5173\u952E\u5B57',\r
  },\r
]\r
\r
const formModel = reactive<Dictionary>({\r
  id: '',\r
  dicTypeId: '',\r
  dicId: '',\r
  name: '',\r
})\r
const formItems = reactive<Array<FormItem>>([\r
  {\r
    label: '\u5B57\u5178\u7F16\u53F7',\r
    labelWidth: '80px',\r
    vModel: 'dicId',\r
    placeholder: '\u5B57\u5178\u7F16\u53F7',\r
    editReadonly: true,\r
    prop: 'dicId',\r
    rules: [\r
      {\r
        required: true,\r
        message: '\u5B57\u5178\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A',\r
        trigger: 'blur',\r
      },\r
    ],\r
  },\r
  {\r
    label: '\u5B57\u5178\u540D\u79F0',\r
    labelWidth: '80px',\r
    vModel: 'name',\r
    placeholder: '\u5B57\u5178\u540D\u79F0',\r
    prop: 'name',\r
    rules: [\r
      {\r
        required: true,\r
        message: '\u5B57\u5178\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A',\r
        trigger: 'blur',\r
      },\r
    ],\r
  },\r
  {\r
    label: '\u5B57\u5178\u7C7B\u578B',\r
    labelWidth: '80px',\r
    vModel: 'dicTypeId',\r
    placeholder: '\u5B57\u5178\u7C7B\u578B',\r
    type: 'select',\r
    addDisabled: true,\r
    editDisabled: true,\r
    detailDisabled: true,\r
    options: dicTypeList,\r
    change: (val: string) => {\r
      console.log('change', val)\r
    },\r
  },\r
])\r
const tableDataTemp = reactive<Array<Dictionary>>([\r
  {\r
    id: '1',\r
    dicTypeId: 'gender',\r
    dicId: '1',\r
    name: '\u7537',\r
  },\r
  {\r
    id: '2',\r
    dicTypeId: 'gender',\r
    dicId: '2',\r
    name: '\u5973',\r
  },\r
  {\r
    id: '12',\r
    dicTypeId: 'keyword',\r
    dicId: '11',\r
    name: '\u6C42\u52A9',\r
  },\r
  {\r
    id: '13',\r
    dicTypeId: 'keyword',\r
    dicId: '12',\r
    name: '\u5E2E\u52A9',\r
  },\r
  {\r
    id: '14',\r
    dicTypeId: 'keyword',\r
    dicId: '13',\r
    name: '\u5E2E\u5FD9',\r
  },\r
  {\r
    id: '15',\r
    dicTypeId: 'keyword',\r
    dicId: '14',\r
    name: '\u8054\u7CFB\u6211',\r
  },\r
  {\r
    id: '17',\r
    dicTypeId: 'keyword',\r
    dicId: '15',\r
    name: '\u6709\u53EF\u4EE5\u505A\u7684\u6280\u672F',\r
  },\r
])\r
const tableData = reactive<Array<Dictionary>>([])\r
const tableColumns = reactive<Array<Column>>([\r
  {\r
    width: '50',\r
    type: 'selection',\r
  },\r
  {\r
    label: '\u5B57\u5178\u7F16\u53F7',\r
    prop: 'dicId',\r
    width: '200',\r
  },\r
  {\r
    label: '\u5B57\u5178\u540D\u79F0',\r
    prop: 'name',\r
  },\r
])\r
const tableActionbar = reactive<Actionbar>({\r
  width: 200,\r
})\r
const tableToolbar = reactive<Toolbar>({\r
  addButtonName: '\u521B\u5EFA',\r
  hiddenBatchDeleteButton: true,\r
  hiddenImportButton: true,\r
  hiddenExportButton: true,\r
  hiddenPrintButton: true,\r
})\r
const currentTreeData = ref<Tree>({\r
  id: '',\r
  label: '',\r
  children: [],\r
})\r
const leftTree = reactive<LeftTree>({\r
  treeData: [],\r
})\r
\r
const treeLoad = (done: any) => {\r
  const data = treeFormat(dictionaryTypeList, {\r
    id: 'dicTypeId',\r
    label: 'name',\r
    children: 'children',\r
  })\r
  treeDataList.length = 0\r
  treeDataList.push(...data)\r
  leftTree.treeData.length = 0\r
  leftTree.treeData.push(...treeDataList)\r
  const data1 = dicFormat(dictionaryTypeList, {\r
    value: 'dicTypeId',\r
    label: 'name',\r
  })\r
  dicTypeList.length = 0\r
  dicTypeList.push(...data1)\r
\r
  currentTreeData.value.id = treeDataList[0].id\r
  done(currentTreeData.value.id)\r
}\r
const handleTreeClick = (data: Tree, done: any) => {\r
  currentTreeData.value = data\r
  const arr = tableDataTemp.filter(\r
    (x) => x.dicTypeId === currentTreeData.value.id\r
  )\r
  tableData.length = 0\r
  tableData.push(...arr)\r
  done()\r
}\r
<\/script>\r
<template>\r
  <quick-crud\r
    :form-model="formModel"\r
    :form-items="formItems"\r
    :table-data="tableData"\r
    :table-columns="tableColumns"\r
    :table-actionbar="tableActionbar"\r
    :table-toolbar="tableToolbar"\r
    :left-tree="leftTree"\r
    @on-tree-load="treeLoad"\r
    @on-tree-click="handleTreeClick"\r
    @on-form-submit="handleFormSubmit"\r
  ></quick-crud>\r
</template>\r
`;export{r as default};
