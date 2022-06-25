import Button from "./components/button/button.vue";
const components = [Button];
const install = (Vue: any) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  version: "1.0.2",
  install,
  ...[components],
};
