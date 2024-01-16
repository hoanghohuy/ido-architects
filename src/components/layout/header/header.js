import React from 'react'
import { dataHeader } from './dataHeader'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header({currentLink}) {
  return (
    <div id='header' className='border-b-[1px] border-solid border-[#E6E5E6] w-full fixed z-[2] bg-white'>
        <div className='flex justify-between items-center px-[88px] w-full h-24 lg:px-[48px] xs:px-8'>
            <img src='/logo.png' alt='ido architects' loading='lazy' />
            <div id='menu' className='flex gap-14 font-[15px] uppercase font-[400] lg:gap-5 md:hidden'>
                {dataHeader.map(item => 
                    <Link href={item.link} key={item.link} className={`${currentLink == item.link && styles.active}`} >{item.title}</Link>)}
            </div>
            <div className='flex gap-8'>
                <a href='tel:0974265929' className='bg-black px-4 py-2 text-white uppercase xs:hidden'>Liên hệ tư vấn</a>
                <button className='hidden md:block'><img src='/header/menu.svg'/></button>
            </div>
        </div>
    </div>
  )
}
