<script lang="ts" setup>
import { computed, onMounted, ref, toRefs } from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: '',
    require: true,
  },
})

const { code: sourceCode } = toRefs(props)

const showCode = ref(false)
const iconClass = computed(() => {
  return [
    'iconfont',
    showCode.value ? 'icon-arrow-up-filling' : 'icon-arrow-down-filling',
  ]
})

const showOrhideCode = () => {
  showCode.value = !showCode.value
}
</script>
<template>
  <div class="pre-code-box">
    <transition name="slide-fade">
      <pre v-if="showCode" v-highlight class="language-html">
        <code class="language-html">{{ sourceCode }}</code>
      </pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <i :class="iconClass"></i>
      <span class="zhankai item">{{ showCode ? '隐藏代码' : '显示代码' }}</span>
    </div>
  </div>
</template>
