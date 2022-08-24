import pack from './package.json'
import * as components from "./src/index";

export * from "./src/index";

const install = (app: any) => {
  for (const comkey in components) {
    app.component(
      (components as any)[comkey].name,
      (components as any)[comkey]
    );
  }
};
export default {
  name: pack.name,
  version: pack.version,
  install,
};
