import Button from "./components/button/button.vue";
import pack from "../package.json";
const components = [Button];
const install = (app: any,options:any) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  name: pack.name,
  version: pack.version,
  install
};
