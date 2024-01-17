'use client';
import Link from 'next/link'
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { dataProjectCompleted } from '@/components/pages/home/projectCompleted/dataProjectCompleted';

export default function ProjectCompleted() {

  useEffect(() => {
    Aos.init({duration: 1000});
  },[])

  return (
    <div data-aos='fade-up' id='hinhanhhoanthien' className='pt-[88px]'>
      <div className='max-w-[1152px] mx-auto py-16 flex flex-col gap-14 lg:px-[48px] md:px-8 xs:gap-8'>
        <div className='text-[48px] text-center font-[400] xs:text-[40px] xs:text-left'>Hình ảnh hoàn thiện</div>
        <div className='flex flex-wrap xs:flex-col xs:gap-8'>
          {dataProjectCompleted && dataProjectCompleted.map(item => 
            <Link key={item.id} href={`/project-completed/${item.link}`} className='basis-[33.33%] flex flex-col gap-4 pb-14 px-4 md:basis-[50%] xs:basis-0 xs:pb-0 xs:px-0 '>
                <img src={`/Gallery/${item.id}.png`} loading='lazy' />
                <div className='flex flex-col gap-2'>
                  <div className='text-[20px] font-[500]'>{item.name}</div>
                  <div className='text-[16px] font-[500]'>Địa điểm: {item.place}</div>
                  <div className='text-[16px] font-[500]'>Hoàn thành: {item.completedDate}</div>
                </div>
            </Link>
            )}
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
