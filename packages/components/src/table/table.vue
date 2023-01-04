<script lang="ts" setup name="QuickTable">
import { defineEmits, toRefs, ref, onMounted, nextTick } from 'vue'
import { ElTable } from 'element-plus'
import { tableProps, tableEmits, Actionbar } from './types'

const props = defineProps(tableProps)
const {
  data,
  columns,
  height,
  rowKey,
  loading,
  tableActionbar,
  editButtonName,
  deleteButtonName,
  detailButtonName,
  hiddenEditButton,
  hiddenDeleteButton,
  hiddenDetailButton,
} = toRefs(props)
const actionbar = tableActionbar.value as Actionbar
const tableRef = ref<InstanceType<typeof ElTable>>()
const tableHeight = height.value as number
const emits = defineEmits(tableEmits)
const getActionbarWidth = () => {
  if (actionbar.width) {
    return actionbar.width
  }
  return 150
}
const handleSelectionChange = (val: any) => {
  emits('onSelectionChange', val)
}
onMounted(() => {
  nextTick(() => {
    emits('onTableRef', tableRef)
  })
})
</script>
<template>
  <!-- :height="560" -->
  <el-table
    ref="tableRef"
    v-loading="loading"
    :data="data"
    style="width: 100%"
    :height="tableHeight"
    max-height="660"
    stripe
    border
    :row-key="rowKey"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      v-for="(item, index) in columns"
      :key="index"
      :prop="item.prop"
      :width="item.width"
      :type="item.type"
      :label="item.label"
      :align="item.align"
      :formatter="item.format"
      show-overflow-tooltip
      :fixed="item.fixed"
    ></el-table-column>
    <el-table-column
      v-if="tableActionbar"
      label="操作"
      :width="getActionbarWidth()"
    >
      <template #default="scope">
        <slot name="leftActionbar" :row="scope.row"></slot>
        <template v-for="(item, index) in actionbar.btns" :key="index">
          <el-button
            v-if="
              item.position &&
              item.position === 'left' &&
              (item.render ? item.render(scope.row) : true)
            "
            :link="!item.link ? true : false || item.link ? item.link : false"
            :type="item.type ? item.type : 'primary'"
            :size="item.size ? item.size : 'small'"
            @click.prevent="
              item.click(scope.row, () => {
                emits('onDone')
              })
            "
          >
            {{ item.name }}
          </el-button>
        </template>
        <el-button
          v-if="!hiddenEditButton"
          :link="true"
          type="primary"
          size="small"
          @click.prevent="emits('onRowEdit', scope.row)"
        >
          {{ editButtonName }}
        </el-button>
        <el-button
          v-if="!hiddenDeleteButton"
          :link="true"
          type="primary"
          size="small"
          @click.prevent="emits('onRowDelete', scope.row)"
        >
          {{ deleteButtonName }}
        </el-button>
        <el-button
          v-if="!hiddenDetailButton"
          :link="true"
          type="primary"
          size="small"
          @click.prevent="emits('onRowDetail', scope.row)"
        >
          {{ detailButtonName }}
        </el-button>
        <template v-for="(item, index) in actionbar.btns" :key="index">
          <el-button
            v-if="
              item.position !== 'left' &&
              (item.render ? item.render(scope.row) : true)
            "
            :link="!item.link ? true : false || item.link ? item.link : false"
            :type="item.type ? item.type : 'primary'"
            :size="item.size ? item.size : 'small'"
            @click.prevent="
              item.click(scope.row, () => {
                emits('onDone')
              })
            "
          >
            {{ item.name }}
          </el-button>
        </template>
        <slot name="rightActionbar" :row="scope.row"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>
<style lang="scss" scoped>
.el-table {
  margin-bottom: 15px;
}
</style>
