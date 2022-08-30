<script lang="ts" setup name="quickSvgIcon">
import { computed } from 'vue'
import { svgIconProps } from './types'

const props = defineProps(svgIconProps)
const classList = computed(() => {
  return ['icon', props.className || '']
})
const iconName = computed(() => {
  return `#${props.iconClass}`
})
</script>
<template>
  <svg :class="classList" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>
<style lang="scss" scoped>
.icon {
  width: v-bind('props.size');
  height: v-bind('props.size');
  position: relative;
  vertical-align: -2px;
  fill: currentColor;
}
</style>
