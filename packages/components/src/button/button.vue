<script lang="ts" setup name="QuickButton">
import { defineProps, defineEmits, toRefs } from "vue";
import { ButtonProps, buttonProps } from "./types";

const props = defineProps(buttonProps);
const { tip, type, size } = toRefs(props);
const emits = defineEmits(["click"]);
const btnClick = (e: any) => {
  console.log("type", type?.value);
  console.log("size", size?.value);

  emits("click", e);
};
</script>
<template>
  <el-button :size="size" :type="type" @click="btnClick" :title="tip">
    <slot />
  </el-button>
</template>
