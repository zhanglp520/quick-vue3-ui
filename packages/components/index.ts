import pack from './package.json'
import * as components from '@/index'

export * from '@/index'

const install = (app: any) => {
  for (const comkey in components) {
    app.component(
      (components as any)[comkey].name,
      (components as unknown)[comkey]
    )
  }
}
export default {
  name: pack.name,
  version: pack.version,
  install,
}
