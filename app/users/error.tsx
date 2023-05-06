'use client'

import {useEffect} from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex justify-center items-center h-96'>
      <div className='text-center flex flex-col gap-2 justify-center items-center'>
        <h1 className='text-4xl font-bold'>Error</h1>
        <p className='text-xl'>Oops! Something went wrong 🤭</p>
        <button className='error-button' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}
