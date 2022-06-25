import Button from "./button.vue";
Button.install = (Vue: any) => {
  Vue.component(Button.name, Button);
};
export default {
  Button,
};
