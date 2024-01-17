'use client';
import React, { useState } from 'react'
import { dataHeader } from './dataHeader'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header({currentLink}) {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div id='header' className='w-full fixed z-[2] bg-white'>
        <div className='flex justify-between items-center px-[88px] w-full h-24 border-b-[1px] border-solid border-[#E6E5E6] lg:px-[48px] xs:px-8 '>
            <Link href={'/'}><img src='/logo.png' alt='ido architects' loading='lazy' /></Link>
            <div id='menu' className='flex gap-14 font-[15px] uppercase font-[400] lg:gap-5 md:hidden'>
                {dataHeader.map(item => 
                    <Link href={item.link} key={item.link} className={`${currentLink == item.link && styles.active}`} >{item.title}</Link>)}
            </div>
            <div className='flex gap-8'>
                <a href='tel:0974265929' className='bg-black px-4 py-2 text-white uppercase xs:hidden'>Liên hệ tư vấn</a>
                <button onClick={() => setShowMenu(!showMenu)} className='hidden md:block'>
                  {
                    showMenu ?
                    <img src='/header/close.png' width={24} height={24} /> :
                  <img src='/header/menu.svg'/>
                  }
                  
                  </button>
            </div>
        </div>
        <div className={`w-full ${showMenu ? 'h-auto' : 'h-0'} overflow-hidden ${styles.menu__mobile__effect}`}>
          <div className='px-[90px] py-5 lg:px-[48px] xs:px-8'>
            <div id='menu' className='flex flex-col gap-14 font-[15px] uppercase font-[400] lg:gap-5'>
                {dataHeader.map(item => 
                    <Link href={item.link} key={item.link} className={`${currentLink == item.link && styles.active}`} >{item.title}</Link>)}
            </div>
            <div className='pt-4'>
            <a href='tel:0974265929' className='bg-black px-4 py-2 text-white uppercase'>Liên hệ tư vấn</a>
            </div>
          </div>
        </div>
    </div>
  )
}
