import React from 'react'

export default function HomeB() {
  return (
    <div data-aos="fade-up" className='pt-[40px]'>
        <div className='w-full px-[88px] flex justify-between lg:px-12 md:flex-col md:gap-20 xs:px-8 xs:gap-8'>
            <div data-aos='fade-up-right' className='max-w-[50%] flex flex-col gap-12 md:max-w-full xs:gap-4'>
                <div className='flex justify-between gap-20 lg:gap-10 xs:flex-col xs:gap-4'>
                    <div className='text-[64px] text-primary font-[500] min-w-[40%]  leading-[64px] xl:text-[48px] lg:text-[40px] lg:leading-10'>
                        IDO<br/>
                        Architects 
                    </div>
                    <div className='min-w-[50%] xl:min-w-[40%]'>
                        Với bề dầy kinh nghiệm và năng lực chuyên môn, đã từng bước khẳng định được triết lý thiết kế riêng trong những công trình.
                    </div>
                </div>
                <img src='/Home/B/b1.png' loading='lazy' className='w-full' />
            </div>
            <div data-aos='fade-up-left' className='max-w-[30%] flex flex-col gap-12 md:max-w-full xs:gap-4'>
                <div>
                    IDO Architects xác định mỗi công trình luôn là sự gắn kết hài hòa giữa lợi ích của Chủ đầu tư, giá trị nhân văn, thẩm mỹ, tính bền vững và hơn hết là sự thăng hoa giữa nghệ thuật và công nghệ tiên tiến.
                </div>
                <img src='/Home/B/b2.png' loading='lazy' className='w-full' />
            </div>
        </div>
        <div className='pt-12'>
            <div className='px-[192px] flex justify-between items-center xl:px-20 lg:px-12 md:flex-col md:gap-10 xs:px-8'>
                <div className='flex items-center max-w-[50%] gap-[68px] md:max-w-full md:flex-col md:gap-0'>
                    <div className='text-[300px] leading-[344px] text-primary font-[400] xl:text-[260px] lg:text-[200px] md:leading-none'>
                        06
                    </div>
                    <div className='min-w-[290px] xs:min-w-full'>
                        <div className='text-[30px] font-[500] xs:text-[22px]'>
                            Năm kinh nghiệm trong lĩnh vực kiến trúc và nội thất.
                        </div>
                        <div>
                            <div className='text-[24px] font-[400]'>Tư vấn.</div>
                            <div className='text-[24px] font-[400]'>Thiết kế.</div>
                            <div className='text-[24px] font-[400]'>Thi công.</div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[25%] md:max-w-full'>
                    IDO Architects tập trung vào việc tạo ra không gian gần gũi và độc đáo, thấu hiểu tâm hồn và cá nhân của mỗi dự án. Với sự đam mê kiến trúc kết hợp tinh tế với thiên nhiên, chúng tôi cam kết mang đến những không gian sống độc đáo, cá nhân và vẫn đáp ứng đúng chuẩn mực thời đại.
                </div>
            </div>
        </div>
    </div>
  )
}
