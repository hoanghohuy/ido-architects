'use client';
import { dataBlog } from '@/components/pages/Blog/dataBlog'
import DuAnThietKe from '@/components/pages/home/duAnThietKe/duAnThietKe'
import Link from 'next/link'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function BlogPage() {

  useEffect(() => {
    Aos.init({duration: 1000});
  },[])

  return (
    <div data-aos='fade-up' className='pt-[90px]'>
        <div className='py-[64px] max-w-[1400px] px-[88px] mx-auto lg:px-12 md:px-8 md:py-[40px]'>
          <div className='pb-4'>Trang chủ /  <b>Blog</b></div>
          <div className='flex flex-wrap gap-x-8 gap-y-[80px] lg:gap-y-[40px] xs:flex-col'>
            {dataBlog.map(item => (
              <Link key={item.id} href={`/blog/${item.link}`} className='flex flex-col gap-4 basis-[31%] lg:basis-[48%] md:basis-[47%] sm:basis-[46%] xs:basis-1'>
                <div className='relative'>
                  <img className='w-full h-auto aspect-[5/3] object-cover' src={`/Gallery/${item.id}.png`} />
                  <div className='flex flex-col justify-center items-center w-[92px] p-4 bg-black absolute top-0 left-0 sm:p-2'>
                    <div className='text-[40px] font-[500] text-white leading-[40px] xs:text-[28px]'>24</div>
                    <div className='text-white sm:leading-[12px]'>---</div>
                    <div className='text-[16px] font-[500] text-white sm:text-[12px]'>Tháng 1</div>
                  </div>
                </div>
                <div className='text-[22px] font-[500] sm:text-[20px] xs:text-[18px]'>{item.title}</div>
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}
