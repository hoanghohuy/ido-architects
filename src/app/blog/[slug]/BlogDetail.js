'use client';
import { dataBlog } from '@/components/pages/Blog/dataBlog';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react'

export default function BlogDetail() {

    const pathName = usePathname();
    const [,,slug] = pathName.split('/');
    const [dataList ,setDataList] = useState    (dataBlog.find(item => item.link == slug))
  return (
    <div className='pt-[90px]'>
        <div className='py-[64px] max-w-[1400px] px-[88px] mx-auto lg:px-12 xs:px-8'>
            <div className='w-full flex flex-col gap-6'>
                <div><Link href={'/'}>Trang chủ</Link> / <Link href={'/blog'}>Blog</Link> / <b>{dataList.title}</b></div>
                <img src='/Gallery/1.png' className='w-full' />
            </div>
            <div className='pt-[64px] max-w-[1152px] mx-auto'>
                <h2 className='text-[32px] font-[500] sm:text-[28px] xs:text-[24px]'>{dataList.title}</h2>
                <p>
                    Kiến trúc bền vững đang trở thành một xu hướng không chỉ trong ngành xây dựng mà còn là một phần quan trọng của cuộc sống hiện đại. Ngày càng nhiều dự án xây dựng đặt ra mục tiêu không chỉ là tạo ra những công trình đẹp mắt mà còn làm những điều tích cực cho môi trường. Bài viết này sẽ đưa bạn đi sâu vào thế giới của kiến trúc bền vững và cách nó đang thay đổi diện mạo của các dự án xây dựng trên khắp thế giới.
                </p>
            </div>
            
        </div>
    </div>
  )
}
