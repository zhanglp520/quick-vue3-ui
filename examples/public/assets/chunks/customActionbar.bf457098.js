const r=`<script lang="ts" setup>\r
import { reactive } from 'vue'\r
import { Column, Actionbar } from '@ainiteam/quick-vue3-ui'\r
import { User } from '@/types/user'\r
\r
const tableData = reactive<Array<User>>([\r
  {\r
    id: '1',\r
    userId: 'YH_1',\r
    userName: 'liuyi',\r
    fullName: '\u5218\u4E00',\r
    phone: '15229380174',\r
    email: 'zz15229380174@163.com',\r
    address: 'beijin',\r
    createTime: '2022-07-14 05:05:57',\r
    remark: '\u6D4B\u8BD5\u6570\u636E',\r
    deleted: 0,\r
    enabled: 0,\r
  },\r
  {\r
    id: '2',\r
    userId: 'YH_2',\r
    userName: 'chener',\r
    fullName: '\u9648\u4E8C',\r
    phone: '15229380174',\r
    email: 'zz15229380174@163.com',\r
    address: 'beijin',\r
    createTime: '2022-07-14 05:05:57',\r
    remark: '\u6D4B\u8BD5\u6570\u636E',\r
    deleted: 0,\r
    enabled: 0,\r
  },\r
  {\r
    id: '3',\r
    userId: 'YH_3',\r
    userName: 'zhangsan',\r
    fullName: '\u5F20\u4E09',\r
    phone: '15229380174',\r
    email: 'zz15229380174@163.com',\r
    address: 'beijin',\r
    createTime: '2022-07-14 05:05:57',\r
    remark: '\u6D4B\u8BD5\u6570\u636E',\r
    deleted: 0,\r
    enabled: 0,\r
  },\r
  {\r
    id: '4',\r
    userId: 'YH_4',\r
    userName: 'lisi',\r
    fullName: '\u674E\u56DB',\r
    phone: '15229380174',\r
    email: 'zz15229380174@163.com',\r
    address: 'beijin',\r
    createTime: '2022-07-14 05:05:57',\r
    remark: '\u6D4B\u8BD5\u6570\u636E',\r
    deleted: 0,\r
    enabled: 0,\r
  },\r
  {\r
    id: '5',\r
    userId: 'YH_5',\r
    userName: 'wangwu',\r
    fullName: '\u738B\u4E94',\r
    phone: '15229380174',\r
    email: 'zz15229380174@163.com',\r
    address: 'beijin',\r
    createTime: '2022-07-14 05:05:57',\r
    remark: '\u6D4B\u8BD5\u6570\u636E',\r
    deleted: 0,\r
    enabled: 0,\r
  },\r
  {\r
    id: '6',\r
    userId: 'YH_6',\r
    userName: 'zhaoliu',\r
    fullName: '\u8D75\u516D',\r
    phone: '15229380174',\r
    email: 'zz15229380174@163.com',\r
    address: 'beijin',\r
    createTime: '2022-07-14 05:05:57',\r
    remark: '\u6D4B\u8BD5\u6570\u636E',\r
    deleted: 0,\r
    enabled: 0,\r
  },\r
  {\r
    id: '7',\r
    userId: 'YH_7',\r
    userName: 'sunqi',\r
    fullName: '\u5B59\u4E03',\r
    phone: '15229380174',\r
    email: 'zz15229380174@163.com',\r
    address: 'beijin',\r
    createTime: '2022-07-14 05:05:57',\r
    remark: '\u6D4B\u8BD5\u6570\u636E',\r
    deleted: 0,\r
    enabled: 0,\r
  },\r
  {\r
    id: '8',\r
    userId: 'YH_8',\r
    userName: 'zhouba',\r
    fullName: '\u5468\u516B',\r
    phone: '15229380174',\r
    email: 'zz15229380174@163.com',\r
    address: 'beijin',\r
    createTime: '2022-07-14 05:05:57',\r
    remark: '\u6D4B\u8BD5\u6570\u636E',\r
    deleted: 0,\r
    enabled: 0,\r
  },\r
  {\r
    id: '9',\r
    userId: 'YH_9',\r
    userName: 'wujiu',\r
    fullName: '\u5434\u4E5D',\r
    phone: '15229380174',\r
    email: 'zz15229380174@163.com',\r
    address: 'beijin',\r
    createTime: '2022-07-14 05:05:57',\r
    remark: '\u6D4B\u8BD5\u6570\u636E',\r
    deleted: 0,\r
    enabled: 0,\r
  },\r
  {\r
    id: '10',\r
    userId: 'YH_10',\r
    userName: 'zhengshi',\r
    fullName: '\u653F\u5341',\r
    phone: '15229380174',\r
    email: 'zz15229380174@163.com',\r
    address: 'beijin',\r
    createTime: '2022-07-14 05:05:57',\r
    remark: '\u6D4B\u8BD5\u6570\u636E',\r
    deleted: 0,\r
    enabled: 0,\r
  },\r
])\r
const tableColumns = reactive<Array<Column>>([\r
  {\r
    label: '\u7528\u6237\u7F16\u53F7',\r
    prop: 'userId',\r
    width: '100',\r
  },\r
  {\r
    label: '\u7528\u6237\u540D',\r
    prop: 'userName',\r
    width: '100',\r
  },\r
  {\r
    label: '\u59D3\u540D',\r
    prop: 'fullName',\r
    width: '100',\r
  },\r
  {\r
    label: '\u624B\u673A\u53F7',\r
    prop: 'phone',\r
    width: '180',\r
  },\r
  {\r
    label: '\u90AE\u7BB1',\r
    prop: 'email',\r
    width: '200',\r
  },\r
  {\r
    label: '\u521B\u5EFA\u65F6\u95F4',\r
    prop: 'createTime',\r
    width: '200',\r
  },\r
  {\r
    label: '\u5730\u5740',\r
    prop: 'address',\r
    width: '200',\r
  },\r
  {\r
    label: '\u5907\u6CE8',\r
    prop: 'remark',\r
  },\r
])\r
const tableActionbar = reactive<Actionbar>({\r
  width: 500,\r
  btns: [\r
    {\r
      name: '\u81EA\u5B9A\u4E49\u6309\u94AE',\r
      type: 'success',\r
      size: 'small',\r
      // position: 'right', // \u9ED8\u8BA4\u53F3\u8FB9\uFF0C\u53EF\u4EE5\u7701\u7565\u6B64\u5C5E\u6027\r
      click: (item: any, done: any) => {\r
        console.log('\u5DE6\u8FB9\u81EA\u5B9A\u4E49\u6309\u94AEclick', item)\r
        done()\r
      },\r
    },\r
    {\r
      name: '\u81EA\u5B9A\u4E49\u6309\u94AE',\r
      type: 'danger',\r
      size: 'small',\r
      position: 'left',\r
      click: (item: any, done: any) => {\r
        console.log('\u53F3\u8FB9\u81EA\u5B9A\u4E49\u6309\u94AEclick', item)\r
        done()\r
      },\r
    },\r
  ],\r
})\r
const handleEdit = (row: User) => {\r
  console.log('handleEdit', row)\r
}\r
const handleDelete = (row: User) => {\r
  console.log('handleDelete', row)\r
}\r
const handleDetail = (row: User) => {\r
  console.log('handleDetail', row)\r
}\r
const handleDone = () => {\r
  // \u5B8C\u6210\u56DE\u8C03\uFF0C\u4E00\u822C\u53EF\u4EE5\u7528\u6765\u5237\u65B0\u9875\u9762\u53CA\u5176\u4ED6\r
  console.log('handleDone')\r
}\r
<\/script>\r
<template>\r
  <quick-table\r
    :data="tableData"\r
    :columns="tableColumns"\r
    :table-actionbar="tableActionbar"\r
    @on-done="handleDone"\r
    @on-row-edit="handleEdit"\r
    @on-row-delete="handleDelete"\r
    @on-row-detail="handleDetail"\r
  >\r
  </quick-table>\r
</template>\r
`;export{r as default};
