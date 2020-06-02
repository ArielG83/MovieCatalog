export const isEmpty = param => {
    if (!param) {
      return true
    }
    if (param instanceof Date || typeof param === 'function') {
      return false
    }
    if (Array.isArray(param)) {
      return !param.length
    }
    if (typeof param === 'object') {
      return !Object.keys(param).length
    }
}