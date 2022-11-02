import { useDispatch } from 'react-redux'
import { setLoader } from '../features/loader/loaderSlice'

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
