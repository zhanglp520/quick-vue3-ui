import Search from './search.vue'

Search.install = (app: any, options: any) => {
  app.component(Search.name, Search)
}
export default {
  Search,
}
