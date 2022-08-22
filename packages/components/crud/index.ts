import Crud from './crud.vue'

Crud.install = (app: any, options: any) => {
  app.component(Crud.name, Crud)
}
export default {
  Crud,
}
