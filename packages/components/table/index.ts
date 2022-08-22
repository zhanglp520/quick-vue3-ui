import Table from './table.vue'

Table.install = (app: any, options: any) => {
  app.component(Table.name, Table)
}
export default {
  Table,
}
