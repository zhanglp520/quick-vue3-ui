import Button from "./components/button/button.vue";
import pack from "../package.json";
const components = [Button];
const install = (Vue: any) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  version: pack.version,
  install,
  Button,
};
