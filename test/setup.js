// Minimal localStorage polyfill so store.js runs under the Node test environment.
class LocalStorageMock {
  constructor() { this.store = {} }
  getItem(k) { return Object.prototype.hasOwnProperty.call(this.store, k) ? this.store[k] : null }
  setItem(k, v) { this.store[k] = String(v) }
  removeItem(k) { delete this.store[k] }
  clear() { this.store = {} }
}

globalThis.localStorage = new LocalStorageMock()
