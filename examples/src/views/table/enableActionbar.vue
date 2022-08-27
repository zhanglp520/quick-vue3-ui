<script lang="ts" setup>
import { reactive } from 'vue'
import { Column } from '@ainiteam/quick-vue3-ui'
import { User } from '@/types/user'

const tableData = reactive<Array<User>>([
  {
    id: 1,
    userId: 'YH_1',
    userName: 'liuyi',
    avatar: null,
    fullName: '刘一',
    phone: 15229380174,
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: 2,
    userId: 'YH_2',
    userName: 'chener',
    avatar: null,
    fullName: '陈二',
    phone: 15229380174,
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: 3,
    userId: 'YH_3',
    userName: 'zhangsan',
    avatar: null,
    fullName: '张三',
    phone: 15229380174,
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: 4,
    userId: 'YH_4',
    userName: 'lisi',
    avatar: null,
    fullName: '李四',
    phone: 15229380174,
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: 5,
    userId: 'YH_5',
    userName: 'wangwu',
    avatar: null,
    fullName: '王五',
    phone: 15229380174,
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: 6,
    userId: 'YH_6',
    userName: 'zhaoliu',
    avatar: null,
    fullName: '赵六',
    phone: 15229380174,
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: 7,
    userId: 'YH_7',
    userName: 'sunqi',
    avatar: null,
    fullName: '孙七',
    phone: 15229380174,
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: 8,
    userId: 'YH_8',
    userName: 'zhouba',
    avatar: null,
    fullName: '周八',
    phone: 15229380174,
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: 9,
    userId: 'YH_9',
    userName: 'wujiu',
    avatar: null,
    fullName: '吴九',
    phone: 15229380174,
    email: 'zz15229380174@163.com',
    address: 'beijin',
    createTime: '2022-07-14 05:05:57',
    remark: '测试数据',
    deleted: 0,
    enabled: 0,
  },
  {
    id: 10,
    userId: 'YH_10',
    userName: 'zhengshi',
    avatar: null,
    fullName: '政十',
    phone: 15229380174,
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
const handleEdit = (row: User) => {
  console.log('handleEdit', row)
}
const handleDelete = (row: User) => {
  console.log('handleDelete', row)
}
const handleDetail = (row: User) => {
  console.log('handleDetail', row)
}
</script>
<template>
  <div style="padding: 10px 0">
    通过设置属性:tableActionbar="true"启用操作栏,操作栏默认宽度100，
  </div>
  <el-row>
    <el-col :span="24">
      <quick-table
        :data="tableData"
        :columns="tableColumns"
        :table-actionbar="true"
        @on-row-edit="handleEdit"
        @on-row-delete="handleDelete"
        @on-row-detail="handleDetail"
      >
      </quick-table>
    </el-col>
  </el-row>
  <el-row :style="{ marginTop: '20px' }">
    <div style="padding: 10px 0">
      当需要调整操作栏宽度时可以设置:tableActionbar="{width:200}"
    </div>
    <quick-table
      :data="tableData"
      :columns="tableColumns"
      :table-actionbar="{ width: 200 }"
      @on-row-edit="handleEdit"
      @on-row-delete="handleDelete"
      @on-row-detail="handleDetail"
    >
    </quick-table>
  </el-row>
</template>
