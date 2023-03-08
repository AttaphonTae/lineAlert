import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        {children}
    </div>
  )
}
