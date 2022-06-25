import Button from "./button.vue";
Button.install = (Vue: any) => {
  Vue.components(Button.name, Button);
};
export default {
  Button,
};
