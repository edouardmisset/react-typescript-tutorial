import { useEffect } from 'react'

export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('Done!')
    }, timerMs)

    return () => {
      clearTimeout(timerId)
    }
  }, [timerMs])
}
