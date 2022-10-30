export const debounce = (func, timeout = 1000) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    console.log('loading...')
    timer = setTimeout(() => {
      func.apply(this, args)
      console.log('complete...')
    }, timeout)
  }
}
