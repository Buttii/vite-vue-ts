import {App} from "vue"

import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput
} from "element-plus"

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput
]


export const assignComponents = (app: App<Element>) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}