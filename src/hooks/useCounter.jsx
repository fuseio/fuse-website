import { useCountUp } from 'react-countup'
import { formatNumber } from '@/utils/format'
import { useEffect } from 'react'

const useCounter = (value, decimals) => {
  const { start, update, countUp } = useCountUp({
    formattingFn: formatNumber,
    end: 0,
    ...(decimals ? { decimals } : {})
  })

  useEffect(() => {
    start()
  }, [])

  useEffect(() => {
    update(value)
  }, [value])

  return countUp
}

export default useCounter
