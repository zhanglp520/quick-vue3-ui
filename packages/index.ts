import Button from './components/button/button.vue'
import Toolbar from './components/toolbar/toolbar.vue'
import Search from './components/search/search.vue'
import Form from './components/form/form.vue'
import Table from './components/table/table.vue'
import Crud from './components/crud/crud.vue'
import Detail from './components/detail/detail.vue'
import Upload from './components/upload/upload.vue'
import pack from '../package.json'

const components = [Button, Toolbar, Search, Form, Table, Crud, Detail, Upload]
const install = (app: any, options: any) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  name: pack.name,
  version: pack.version,
  install,
}
