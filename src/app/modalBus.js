import Vue from 'vue'
import uuid from 'uuid/v4'

class ModalBus {
  constructor() {
    this.windows = []
  }
  open(config) {
    if (!config.id) {
      config.id = uuid()
    }
    this.windows.push(config)
  }
  close({id}) {
    let index = this.windows.findIndex(window => window.id === id)
    Vue.delete(this.windows, index)
  }

  install(Vue) {
    Vue.prototype.$modal = this
  }
}

export default Vue.observable(new ModalBus())