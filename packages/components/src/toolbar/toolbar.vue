<script lang="ts" setup name="QuickToolbar">
import { defineProps, defineEmits, toRefs } from 'vue'
import { toolbarProps, toolbarEmits, Toolbar } from './types'

const props = defineProps(toolbarProps)
const {
  addButtonName,
  batchDeleteButtonName,
  importButtonName,
  exportButtonName,
  printtButtonName,
  refreshButtonName,
  hiddenAddButton,
  hiddenBatchDeleteButton,
  hiddenImportButton,
  hiddenExportButton,
  hiddenPrintButton,
  hiddenRefreshButton,
  tableToolbar,
} = toRefs(props)
const emits = defineEmits(toolbarEmits)
const toolbar = tableToolbar.value as Toolbar
const handleCustomClick = (item: any) => {
  emits('onCustomToolbarClick', item.click)
}
</script>
<template>
  <div v-if="tableToolbar" class="ml-4 toobar">
    <slot name="leftToolbar"></slot>
    <el-button
      v-if="!hiddenImportButton"
      type="primary"
      @click="emits('onImport')"
      >{{ importButtonName }}</el-button
    >
    <el-button
      v-if="!hiddenExportButton"
      type="primary"
      @click="emits('onExport')"
      >{{ exportButtonName }}</el-button
    >
    <template v-for="(item, index) in toolbar.btns" :key="index">
      <el-button
        v-if="item.position === 'left'"
        :type="item.type ? item.type : 'primary'"
        @click.prevent="item.click()"
      >
        {{ item.name }}
      </el-button>
    </template>
    <el-button v-if="!hiddenAddButton" type="primary" @click="emits('onAdd')">{{
      addButtonName
    }}</el-button>
    <el-button
      v-if="!hiddenBatchDeleteButton"
      type="primary"
      @click="emits('onBatchDelete')"
      >{{ batchDeleteButtonName }}</el-button
    >
    <template v-for="(item, index) in toolbar.btns" :key="index">
      <el-button
        v-if="item.position !== 'left'"
        :type="item.type ? item.type : 'primary'"
        @click.prevent="handleCustomClick(item)"
      >
        {{ item.name }}
      </el-button>
    </template>
    <el-button
      v-if="!hiddenPrintButton"
      type="primary"
      @click="emits('onPrint')"
      >{{ printtButtonName }}</el-button
    >
    <el-button
      v-if="!hiddenRefreshButton"
      type="primary"
      @click="emits('onRefresh')"
      >{{ refreshButtonName }}</el-button
    >
    <slot name="rightToolbar"></slot>
  </div>
</template>
<style lang="scss" scoped>
.toobar {
  margin-bottom: 10px;
}
</style>
