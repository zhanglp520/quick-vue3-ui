<script lang="ts" setup>
import { toRefs, Ref } from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: 'vue',
  },
  autodetect: {
    type: Boolean,
    default: true,
  },
})
const { code, language, autodetect } = toRefs(props) as {
  code: Ref<any>
  language: Ref<string>
  autodetect: Ref<boolean>
}
</script>
<template>
  <!-- :language="language" -->
  <el-collapse style="margin-top: 20px">
    <el-collapse-item title="查看源码">
      <highlightjs :autodetect="autodetect" :code="code" language="xml" />
    </el-collapse-item>
  </el-collapse>
</template>
