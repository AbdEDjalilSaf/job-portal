/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vuex' {
  import type { Store, StoreOptions } from 'vuex/types/index'
  export function createStore<S>(options: StoreOptions<S>): Store<S>
  export { Store, StoreOptions }
}
