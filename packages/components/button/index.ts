import Button from "./button.vue";
Button.install = (app: any,options:any) => {
  app.component(Button.name, Button);
};
export default {
  Button,
};
