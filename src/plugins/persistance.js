import VuexPersistence from 'vuex-persist'
import localforage from "localforage"

localforage.config({
  driver: localforage.INDEXEDDB,
  storeName: 'chromatic-orb',
  version: 1,
})

export default new VuexPersistence({
  storage: localforage,
  supportCircular: true,
})


