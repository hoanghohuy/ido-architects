'use client';
import { Grid } from '@mui/material'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ContactPage() {

  useEffect(() => {
    Aos.init({duration: 1000});
  },[])

  return (
    <div data-aos='fade-up' id='contact' className='pt-[90px]'>
        <div className='w-full h-[500px] flex items-center justify-center bg-[#284752] text-white text-[160px] font-[500] lg:text-[120px] lg:px-12 md:text-[80px] sm:text-[60px] sm:h-[200px]'>
          Liên hệ
        </div>
        <div>
          <div className='py-20 px-[88px] flex justify-between items-center gap-12 lg:flex-col lg:px-12 lg:items-start sm:px-8 sm:py-10 xs:gap-4'>
            <div className='min-w-[40%]'>
              <div className='text-[32px] font-[500] xl:text-[30px] xs:text-[20px]'>Đừng ngần ngại liên hệ với</div>
              <div className='text-[68px] font-[500] text-primary xl:text-[52px] xs:text-[35px]'>IDO Architects.</div>
            </div>
            <div className='min-w-[50%] flex items-center gap-14 lg:flex-col lg:min-w-full lg:items-start lg:gap-10'>
              <div className='max-w-[377px] lg:max-w-full flex flex-col'>
                <div>L: Tầng 6, Toà nhà Danabook, 78 Bạch Đằng, Quận Hải Châu, TP Đà Nẵng.</div>
                <a href='mailto:hoang@ido-architects.com'>E: hoang@ido-architects.com</a>
                <a href='tel:0974265929'>P: 097 426 59 29</a>
              </div>
              <div className='w-[560px] h-[328px] lg:max-w-full lg:w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.920524841811!2d108.22215637579224!3d16.069613439426263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421831f429277d%3A0x126f9c6431fd0271!2zNzggQuG6oWNoIMSQ4bqxbmcsIEjhuqNpIENow6J1IDEsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1705368644075!5m2!1sen!2s" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#F3F2F2]'>
          <div className='py-20 px-[88px] flex justify-between items-center lg:flex-col lg:gap-12 lg:px-12 sm:px-8 sm:py-10'>
            <div className='max-w-[40%] text-[38px] font-[500] lg:max-w-full md:text-[32px] sm:text-[30px]'>
              Cung cấp các dịch vụ đa dạng trong lĩnh vực kiến trúc và thiết kế nội thất.
            </div>
            <div className='max-w-[50%] lg:max-w-full'>
              <Grid container spacing={5}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <input placeholder='Họ và tên' className='w-full bg-[#F3F2F2] outline-none pb-3 border-b-[1px] border-solid border-[#696366]' label="Họ và tên" />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <input placeholder='Email' className='w-full bg-[#F3F2F2] outline-none pb-3 border-b-[1px] border-solid border-[#696366]' label="Email" />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <input placeholder='Lời nhắn' className='w-full bg-[#F3F2F2] outline-none pb-3 border-b-[1px] border-solid border-[#696366]' label="Lời nhắn" />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <button className='bg-black h-12 px-4 py-3 border-none float-right text-white sm:w-full' variant="contained">Gửi cho chúng tôi</button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
    </div>
  )
}
