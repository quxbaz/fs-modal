import { useEffect } from 'react'

const useEscapeKey = (fn) => {

  const handleEscape = (event) => {
    if (event.key === 'Escape')
      fn()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  })

}

export default useEscapeKey
