'use client';
import React from 'react'
import Swal from 'sweetalert2';

export default function ProjectDetail() {

    const handleShowImage = (url) => {
        Swal.fire({
        imageUrl: `${url}`,
        showConfirmButton: false
        });
    }

  return (
    <div className='pt-[90px]'>
        <div className='max-w-[1200px] px-12 py-[64px] mx-auto pt-[64px] flex flex-col gap-6 sm:px-8'>
            <div className='breadcrumb'>
                Trang chủ / Dự án thiết kế / Villa / Bop Villa 2019
            </div>
            <div className='flex justify-between items-center md:flex-col md:gap-12'>
                <div className='flex flex-wrap max-w-[60%] md:max-w-full sm:flex-col sm:w-full sm:gap-4'>
                    {[0,1,2,3,4,5].map(item => (
                    <div key={item} onClick={() => handleShowImage('/detailProjectDetail.png')} className='w-full basis-[33.333%] p-1 aspect-[4/3] sm:basis-1'>
                        <img className='w-full h-full object-cover aspect-[4/3]' src='/detailProjectDetail.png' />
                    </div>
                    ))}
                </div>
                <div className='max-w-[30%] flex flex-col gap-4 md:max-w-full'>
                    <div className='text-[45px] font-[500] lg:text-[36px] md:text-[26px] sm:text-[32px]'>BOP VILLA 2019</div>
                    <div>Với mong muốn của gia chủ là một ngôi nhà có không gian mở, kết nối thiên nhiên, cây xanh, hồ bơi tạo không gian sống riêng tư, gần gũi, thư giãn, nghĩ dưỡng trên khu đất đô thị điển hình có vị trí trung tâm TP. Đà Nẵng.</div>
                    <div>-------------</div>
                    <div>Dự án: BOP Villa</div>
                    <div>Khách hàng: Mr. Hoang Minh</div>
                    <div>Thiết kế bởi: ido-architects</div>
                    <div>Địa điểm: Thành phố Đà Nẵng, Việt Nam</div>
                </div>
            </div>
        </div>
    </div>
    
  )
}