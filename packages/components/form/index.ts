import Form from './form.vue'

Form.install = (app: any, options: any) => {
  app.component(Form.name, Form)
}
export default {
  Form,
}
