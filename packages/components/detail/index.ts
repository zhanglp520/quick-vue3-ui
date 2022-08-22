import Detail from './detail.vue'

Detail.install = (app: any, options: any) => {
  app.component(Detail.name, Detail)
}
export default {
  Detail,
}
