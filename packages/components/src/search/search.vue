<script lang="ts" setup name="QuickSearch">
import { defineProps, defineEmits, toRefs } from 'vue'
import { searchProps, searchEmits } from './types'

const props = defineProps(searchProps)
const { model, items, searchButtonName, resetButtonName, hiddenResetButton } =
  toRefs(props)
const emits = defineEmits(searchEmits)
</script>
<template>
  <quick-form
    :inline="true"
    :model="model"
    class="demo-form-inline"
    :form-items="items"
    form-type="search"
    :show-action="true"
    :action-slot="true"
  >
    <template #action>
      <el-form-item>
        <el-button type="primary" @click="emits('onSearch')">{{
          searchButtonName
        }}</el-button>
      </el-form-item>
      <el-form-item v-if="!hiddenResetButton">
        <el-button @click="emits('onClear')">{{ resetButtonName }}</el-button>
      </el-form-item>
    </template>
  </quick-form>
</template>
