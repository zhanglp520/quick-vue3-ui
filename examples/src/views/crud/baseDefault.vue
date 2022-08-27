<script lang="ts" setup>
import { reactive } from 'vue'
import { Actionbar, Toolbar, Column, FormItem } from '@ainiteam/quick-vue3-ui'
import { User } from '@/types/user'

const validateFullName = (rule: any, value: string, callback: any) => {
  const reg = /^[\u4e00-\u9fa5]{2,4}$/
  if (!value) {
    callback()
  } else if (!reg.test(value)) {
    callback(new Error('非法姓名'))
  } else {
    callback()
  }
}
const formModel = reactive<User>({
  fullName: '',
  phone: '',
})
const formItems = reactive<Array<FormItem>>([
  {
    label: '姓名',
    labelWidth: '80px',
    vModel: 'fullName',
    placeholder: '姓名',
    prop: 'fullName',
    rules: [
      {
        required: true,
        message: '姓名不能为空',
        trigger: 'blur',
      },
      {
        validator: validateFullName,
        trigger: 'blur',
      },
    ],
  },

  {
    label: '手机号',
    labelWidth: '80px',
    vModel: 'phone',
    type: 'phone',
    placeholder: '手机号',
  },
])
const tableData = reactive<Array<User>>([
  {
    id: '1',
    userId: 'YH_1',
    userName: 'liuyi',
    fullName: '刘一',
    phone: '15229380174',
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: '2',
    userId: 'YH_2',
    userName: 'chener',
    fullName: '陈二',
    phone: '15229380174',
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: '3',
    userId: 'YH_3',
    userName: 'zhangsan',
    fullName: '张三',
    phone: '15229380174',
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: '4',
    userId: 'YH_4',
    userName: 'lisi',
    fullName: '李四',
    phone: '15229380174',
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: '5',
    userId: 'YH_5',
    userName: 'wangwu',
    fullName: '王五',
    phone: '15229380174',
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: '6',
    userId: 'YH_6',
    userName: 'zhaoliu',
    fullName: '赵六',
    phone: '15229380174',
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: '7',
    userId: 'YH_7',
    userName: 'sunqi',
    fullName: '孙七',
    phone: '15229380174',
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: '8',
    userId: 'YH_8',
    userName: 'zhouba',
    fullName: '周八',
    phone: '15229380174',
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: '9',
    userId: 'YH_9',
    userName: 'wujiu',
    fullName: '吴九',
    phone: '15229380174',
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: '10',
    userId: 'YH_10',
    userName: 'zhengshi',
    fullName: '政十',
    phone: '15229380174',
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
])
const tableColumns = reactive<Array<Column>>([
  {
    width: '100',
    type: 'selection',
    align: 'center',
  },
  {
    label: '用户编号',
    prop: 'userId',
    width: '100',
  },
  {
    label: '用户名',
    prop: 'userName',
    width: '100',
  },
  {
    label: '姓名',
    prop: 'fullName',
    width: '100',
  },
  {
    label: '手机号',
    prop: 'phone',
    width: '180',
  },
  {
    label: '邮箱',
    prop: 'email',
    width: '200',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    width: '200',
  },
  {
    label: '地址',
    prop: 'address',
    width: '200',
  },
  {
    label: '备注',
    prop: 'remark',
  },
])
const handleFormSubmit = (form: User, done: any) => {
  console.log('handleFormSubmit', form)
  done()
}
const tableActionbar = reactive<Actionbar>({
  width: 200,
  // editButtonName: '修改',
  // deleteButtonName: '移除',
  detailButtonName: '查看',
  // hiddenEditButton: true,
  hiddenDeleteButton: true,
  // hiddenDetailButton: true,
})
const tableToolbar = reactive<Toolbar>({
  addButtonName: '创建',
  hiddenBatchDeleteButton: true,
})
</script>
<template>
  <quick-crud
    :form-model="formModel"
    :form-items="formItems"
    :table-data="tableData"
    :table-columns="tableColumns"
    :table-actionbar="tableActionbar"
    :table-toolbar="tableToolbar"
    @on-form-submit="handleFormSubmit"
  ></quick-crud>
</template>
