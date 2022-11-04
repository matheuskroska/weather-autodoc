import { useDispatch } from 'react-redux'
import { setLoader } from '../features/loader/loaderSlice'

/**
 * It takes a function, a timeout, and a name, and returns a new function that will call the original
 * function after the timeout, and will also dispatch a loading action to the redux store.
 * @param func - The function you want to debounce
 * @param [timeout=1000] - The time in milliseconds to wait before calling the function.
 * @param [name] - This is the name of the loader.
 * @returns A function that takes in a function and a timeout.
 */
export const useDebounce = (func, timeout = 1000, name = '') => {
  const dispatch = useDispatch()

  let timer
  return (...args) => {
    clearTimeout(timer)
    dispatch(
      setLoader({ loading: true, error: false, message: '', name: name }),
    )
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}
