import React from 'react'

export default function Footer() {
  return (
    <footer id='footer'>
        <div className='py-[80px] px-[88px] flex flex-col gap-8 border-t-[1px] border-solid border-[#E6E5E6] xl:px-12 md:px-8 sm:py-14 xs:text-[22px]'>
            <div className='text-center text-[22px] font-[500]'>Chúng tôi luôn sẵn lòng<br/>
            trò chuyện về dự án của bạn. Hãy liên hệ ngay!</div>
            <div className='flex flex-col gap-6'>
            <div className='text-center flex flex-col'>
                <div className='text-[18px] font-[500]'>L: Tầng 6, Toà nhà Danabook, 78 Bạch Đằng, Quận Hải Châu, TP Đà Nẵng.</div>
                <a href='mailto:hoang@ido-architects.com' className='text-[18px] font-[500]'>E: hoang@ido-architects.com</a>
                <a href='tel:0974265929' className='text-[18px] font-[500]'>P: 097 426 59 29</a>
            </div>
            <div className='text-center text-[18px] xs:text-[16px]'>@2024 idoarchitects. All rights reserved</div>
        </div>
        </div>
        
    </footer>
  )
}
