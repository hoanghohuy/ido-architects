'use client'
import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header'
import { usePathname } from 'next/navigation'
import HomeSlider from '@/components/pages/Slider/homeSlider'
import Aos from 'aos';
import 'aos/dist/aos.css';
import '@/components/custom/css/customSlider.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Divider from '@/components/pages/divider/divider';
import DuAnThietKe from '@/components/pages/home/duAnThietKe/duAnThietKe';
import HomeB from '@/components/pages/home/b/b';
import HomeC from '@/components/pages/home/c/c';
import FooterHome from '@/components/layout/footer/footerHome';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const pathName = usePathname();

  useEffect(() => {
    Aos.init({duration: 1000});
  },[])
  return (
    <main>
      <Header currentLink={pathName}/>
      <div className='main pt-[88px]'>
        <div id='info'>
          <div className='px-[88px] py-[56px] flex items-center justify-between lg:px-[48px] md:flex-col xs:px-8 xs:py-8'>
            <div className='max-w-[60%] md:max-w-full'>
              <div data-aos='fade-right' className='text-[54px] font-[400] xl:text-[35px] lg:text-[30px] xs:text-[14px]'>CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG</div>
              <div data-aos="zoom-in" className='text-[#F6831F] text-[78px] font-[500] xl:text-[60px] xs:text-[36px]'>IDO Architects</div> 
            </div>
            <div className='min-w-[333px] xl:min-w-[280px] xl:max-w-[280px] lg:min-w-220px md:max-w-full'>
              <div>— Since 2018 </div>
              <div className='text-[40px] font-[400] xl:text-[36px] flex flex-col md:flex-row xs:text-[24px] xs:gap-2'>
                <div data-aos="fade-left">Tư vấn.</div>
                <div data-aos="fade-left">Thiết kế.</div>
                <div data-aos="fade-left">Thi công.</div>
              </div>
            </div>
          </div>
        </div>
        <HomeSlider />
        <Divider char={'A'} />
        <DuAnThietKe />
        <div className='w-[100px] mx-auto mb-[60px]'>
            <Link href={'project'} className='text-center w-[100px] block'>Xem thêm</Link>
            <div className='mx-auto w-[40px] h-[2px] bg-black'></div>
        </div>
        <Divider char={'B'} />
        <HomeB />
        <Divider char={'C'} />
        <HomeC />
        <Divider char={'D'} />
      </div>
      <FooterHome />
    </main>
  )
}
