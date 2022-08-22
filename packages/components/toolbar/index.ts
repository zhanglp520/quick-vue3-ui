import Toolbar from './toolbar.vue'

Toolbar.install = (app: any, options: any) => {
  app.component(Toolbar.name, Toolbar)
}
export default {
  Toolbar,
}
