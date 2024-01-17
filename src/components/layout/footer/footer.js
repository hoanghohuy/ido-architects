import { settingsWebsites } from '@/Settings'
import React from 'react'

export default function Footer() {
  return (
    <footer id='footer'>
        <div className='py-[80px] px-[88px] flex flex-col gap-8 border-t-[1px] border-solid border-[#E6E5E6] xl:px-12 md:px-8 sm:py-14 xs:text-[22px]'>
            <div className='text-center text-[22px] font-[500]'>Chúng tôi luôn sẵn lòng<br/>
            trò chuyện về dự án của bạn. Hãy liên hệ ngay!</div>
            <div className='flex flex-col gap-6'>
            <div className='text-center flex flex-col'>
                <div className='text-[18px] font-[500]'>L: {settingsWebsites.address}</div>
                <a href={`mailto:${settingsWebsites.email}`} className='text-[18px] font-[500]'>E: {settingsWebsites.email}</a>
                <a href={`tel:${settingsWebsites.phoneTel}`} className='text-[18px] font-[500]'>P: {settingsWebsites.phone}</a>
            </div>
            <div className='text-center text-[18px] xs:text-[16px]'>@2024 idoarchitects. All rights reserved</div>
        </div>
        </div>
        
    </footer>
  )
}
