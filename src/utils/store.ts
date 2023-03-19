export const set = (key: string, value: any) => {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, value)
  }
}
export const get = (key: string) => {
  return localStorage.getItem(key)
}

export const remove = (key: string) => {
  localStorage.removeItem(key)
}
export const clearAll = (key: string) => {
  localStorage.clear()
}
