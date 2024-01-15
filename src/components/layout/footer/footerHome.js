import React from 'react'

export default function FooterHome() {
  return (
    <footer>
        <div className='px-[88px] py-10 flex justify-between lg:px-12 lg:flex-col lg:gap-12 xs:px-8'>
            <div className='max-w-[560px] flex flex-col gap-6 lg:max-w-full'>
                <div className='text-[38px] text-primary font-[500] leading-[40px] xs:text-[27px]'>
                    Chúng tôi luôn sẵn lòng
                    trò chuyện về dự án của bạn. Hãy liên hệ ngay
                </div>
                <div>
                    @2024 idoarchitects. All rights reserved
                </div>
            </div>
            <div className='max-w-[50%] flex flex-col gap-10 lg:max-w-full'>
                <div className='flex flex-wrap gap-20 text-[24px] font-[500] underline sm:gap-10 xs:gap-2'>
                    <a href='/'>Facebook</a>
                    <a href='/'>Instagram</a>
                    <a href='/'>Behance</a>
                </div>
                <div className='flex gap-10 text-[18px] xs:flex-col'>
                    <div className='max-w-[50%] xs:max-w-full'>L: Tầng 6, Toà nhà Danabook, 78 Bạch Đằng, Quận Hải Châu, TP Đà Nẵng.</div>
                    <div className='flex flex-col'>
                        <a href='mailto:hoang@ido-architects.com'>E: hoang@ido-architects.com</a>
                        <a href='tel:0974265929'>P: 097 426 59 29</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
