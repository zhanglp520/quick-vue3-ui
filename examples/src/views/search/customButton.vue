<script lang="ts" setup>
import { reactive } from 'vue'
import { FormItem } from '@ainiteam/quick-vue3-ui'
import { SearchUser } from '@/types/user'

const searchForm = reactive<SearchUser>({
  userName: '',
})
const searchFormItems = reactive<Array<FormItem>>([
  {
    label: '用户名',
    vModel: 'userName',
    placeholder: '用户名',
  },
])
const handleSearch = () => {
  console.log('handleSearch', searchForm)
}
const handleClear = () => {
  searchForm.userName = ''
  console.log('handleClear', searchForm)
}
</script>
<template>
  <quick-search
    :model="searchForm"
    :items="searchFormItems"
    search-button-name="搜索"
    reset-button-name="重置"
    @on-search="handleSearch"
    @on-clear="handleClear"
  >
  </quick-search>
</template>
