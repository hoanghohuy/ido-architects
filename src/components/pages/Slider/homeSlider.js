import React from 'react'
import Slider from 'react-slick'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} className='relative cursor-pointer'>
      <div className='w-[76px] h-[76px] rounded-full bg-black flex items-center justify-center absolute top-10 left-10 z-[1] xs:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.41421 12.9999L21 12.9999L21 10.9999L5.41421 10.9999L11.7071 4.70703L10.2929 3.29282L1.58579 11.9999L10.2929 20.707L11.7071 19.2928L5.41421 12.9999Z" fill="#E3E2DF"/>
        </svg>
      </div>
    </div>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} className='absolute top-0 left-12 cursor-pointer'>
      <div className='w-[76px] h-[76px] rounded-full bg-black flex items-center justify-center absolute top-10 left-20 z-[1] xs:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M18.5858 12.9999L3 12.9999L3 10.9999L18.5858 10.9999L12.2929 4.70703L13.7071 3.29282L22.4142 11.9999L13.7071 20.707L12.2929 19.2928L18.5858 12.9999Z" fill="#E3E2DF"/>
        </svg>
      </div>
        
    </div>
);

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
        {
            breakpoint: 1392,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default function HomeSlider() {
  return (
    <div id='slider' data-aos="fade-right">
      <div className='px-[88px] pb-20 w-full lg:px-12 xs:px-0 xs:pb-0 '>
        <Slider {...settings} className='relative'>
          <img loading='lazy' src='/slider/slider_example.png' />
          <img loading='lazy' src='/slider/slider_example.png' />
          <img loading='lazy' src='/slider/slider_example.png' />
          <img loading='lazy' src='/slider/slider_example.png' />
        </Slider>
      </div>
    </div>
  )
}
