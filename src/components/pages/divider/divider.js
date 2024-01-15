import React from 'react'

export default function Divider({char}) {
  return (
    <div className='px-[88px] h-[50px] flex items-center gap-4 lg:px-12 xs:px-8'>
        <div className='px-2 border-[1px] rounded-full'>{char}</div>
        <div className='w-full h-[1px] bg-black'></div>
        </div>
  )
}
