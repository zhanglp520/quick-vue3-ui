const r=`<script lang="ts" setup>\r
import { reactive } from 'vue'\r
import { FormItem } from '@ainiteam/quick-vue3-ui'\r
import { SearchUser } from '@/types/user'\r
\r
const searchForm = reactive<SearchUser>({\r
  userName: '',\r
})\r
const searchFormItems = reactive<Array<FormItem>>([\r
  {\r
    label: '\u7528\u6237\u540D',\r
    vModel: 'userName',\r
    placeholder: '\u7528\u6237\u540D',\r
  },\r
])\r
const handleSearch = () => {\r
  console.log('handleSearch', searchForm)\r
}\r
const handleClear = () => {\r
  searchForm.userName = ''\r
  console.log('handleClear', searchForm)\r
}\r
<\/script>\r
<template>\r
  <quick-search\r
    :model="searchForm"\r
    :items="searchFormItems"\r
    @on-search="handleSearch"\r
    @on-clear="handleClear"\r
  >\r
  </quick-search>\r
</template>\r
`;export{r as default};
