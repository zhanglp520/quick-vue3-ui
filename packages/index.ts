import Button from "./button/button.vue";
const components = [Button];
const install = (Vue: any) => {
  components.forEach((component) => {
    Vue.components(component.name, component);
  });
};

export default {
  install,
  ...[components],
};
