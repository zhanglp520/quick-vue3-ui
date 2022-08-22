import Upload from './upload.vue'

Upload.install = (app: any, options: any) => {
  app.component(Upload.name, Upload)
}
export default {
  Upload,
}
