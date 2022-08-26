<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import baseDefault from "./baseDefault.vue";
import updateButtonName from "./updateButtonName.vue";
import hiddenButton from "./hiddenButton.vue";
import customButton from "./customButton.vue";
import actionSlot from "./actionSlot.vue";
import QuickCode from "../../components/QuickCode/index.vue";

const form = reactive({
  defaultCode: "",
  updateButtonNameCode: "",
  customButtonCode: "",
  hiddenButtonCode: "",
  actionSlotCode: "",
});
const getSourceCode = async () => {
  const baseDefault = await import(/* @vite-ignore */ `./baseDefault.vue?raw`);
  form.defaultCode = baseDefault.default;

  const updateButtonName = await import(
    /* @vite-ignore */ `./updateButtonName.vue?raw`
  );
  form.updateButtonNameCode = updateButtonName.default;

  const hiddenButton = await import(
    /* @vite-ignore */ `./hiddenButton.vue?raw`
  );
  form.hiddenButtonCode = hiddenButton.default;

  const customButton = await import(
    /* @vite-ignore */ `./customButton.vue?raw`
  );
  form.customButtonCode = customButton.default;

  const actionSlot = await import(/* @vite-ignore */ `./actionSlot.vue?raw`);
  form.actionSlotCode = actionSlot.default;
};
onMounted(() => {
  getSourceCode();
});
</script>
<template>
  <div class="component-demo">
    <el-card>
      <template #header>
        <div class="card-header card-name">
          <h2>默认</h2>
        </div>
        <div class="card-description">
          <p>常规工具栏</p>
        </div>
      </template>
      <base-default></base-default>
      <quick-code :autodetect="true" :code="form.defaultCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>修改默认按钮文本内容</h2>
        </div>
        <div class="card-description">
          <p>
            通过设置属性:add-button-name="创建"；batch-delete-button-name="批量多个";import-button-name="快速导入"
            export-button-name="快速导出";printt-button-name="报表打印";refresh-button-name="重载数据"来自定义默认按钮名称。
          </p>
        </div>
      </template>
      <update-button-name></update-button-name>
      <quick-code
        :autodetect="true"
        :code="form.updateButtonNameCode"
      ></quick-code>
    </el-card>

    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>隐藏默认按钮</h2>
        </div>
        <div class="card-description">
          <p>
            通过设置属性：:hidden-add-button="true"；:hidden-batch-delete-button="true";:hidden-import-button="true"
            :hidden-export-button="true";:hidden-print-button="true";:hidden-refresh-button="true"来隐藏默认按钮。
          </p>
        </div>
      </template>
      <hidden-button></hidden-button>
      <quick-code :autodetect="true" :code="form.hiddenButtonCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>自定义按钮</h2>
        </div>
        <div class="card-description">
          <p>
            通过配置:table-toolbar="tableToolbar"自定义按钮，可以增加按钮。按钮显示在默认按钮的左边还是右边也可以配置，及按钮的自定义事件（增加自定义按钮及按钮的位置有要求的建议使用此方式）
          </p>
        </div>
      </template>
      <custom-button></custom-button>
      <quick-code :autodetect="true" :code="form.customButtonCode"></quick-code>
    </el-card>
    <el-card class="item" shadow="always">
      <template #header>
        <div class="card-header card-name">
          <h2>工具栏插槽</h2>
        </div>
        <div class="card-description">
          <p>
            通过使用工具栏插槽，来自定义按钮,leftToolbar插槽按钮可以放在默认按钮的左侧；rightToolbar插槽按钮可以放在默认按钮的右侧；并可以使用按钮的任何属性自定义按钮（以上方式都不能满足需求的，使用此方案）
          </p>
        </div>
      </template>
      <action-slot></action-slot>
      <quick-code :autodetect="true" :code="form.actionSlotCode"></quick-code>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.component-demo {
  .card-name {
  }
  .card-description {
    margin-top: 10px;
  }
  .item {
    margin-top: 10px;
  }
}
</style>
