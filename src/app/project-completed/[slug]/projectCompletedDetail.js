'use client';
import { dataProjectCompleted } from '@/components/pages/home/projectCompleted/dataProjectCompleted';
import useWindowDimensions from '@/customHooks/useWindowDimensions';
import { ImageList, ImageListItem } from '@mui/material'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const data = [
    {id: 2, link: '/slider/slider_example.png'},
    {id: 5, link: '/Home/B/b2.png'},
    {id: 1, link: '/project-completed/hoanthien.png'},
    {id: 4, link: '/Home/B/b1.png'},
    {id: 6, link: '/project-completed/hoanthien.png'},
    {id: 7, link: '/slider/slider_example.png'},
    {id: 8, link: '/Home/A/tab_example.png'},
    {id: 3, link: '/Home/A/tab_example.png'},
    {id: 9, link: '/Home/B/b1.png'},
    {id: 10, link: '/Home/B/b2.png'},
]

export default function ProjectCompletedDetail() {
    const pathName = usePathname();
    const [,,slug] = pathName.split('/');
    const [dataList ,setDataList] = useState(dataProjectCompleted.find(item => item.link == slug))

    const { height, width } = useWindowDimensions();
    const [col, setCol] = useState(3);
    
    useEffect(() => {
    if(width < 1000) {
        setCol(2);
    }
    if(width < 540) {
        setCol(1);
    }
    }, [])
    
  return (
    <div className='pt-[90px]'>
        <div className='py-[80px] max-w-[1152px] mx-auto flex flex-col gap-10 px-12 sm:px-8 sm:py-10'>
            <div id='info' className='flex flex-col gap-4'>
                <h1 className='text-[48px] font-[500]'>{dataList?.name}</h1>
                <div>
                    <div>Đi qua ngày mưa đông là ngày nắng đẹp!</div>
                    <div> &apos;Nắng + hình khối - cây xanh tạo chiều sâu bóng đổ làm tăng sự tương phản của công trình với môi trường xung quanh&apos;.</div>
                </div>
                <div>—</div>
                <div>
                    <div>Dự án: {dataList?.name}</div>
                    <div>Khách hàng: Công ty TNHH MTV Aem Design</div>
                    <div>Thiết kế bởi: ido-architects</div>
                    <div>Địa điểm: {dataList?.place}</div>
                </div>
            </div>
            <div id='image-detail'>
                <ImageList variant="masonry" cols={col} gap={8}>
                {data.map((item) => (
                    <ImageListItem key={item.id}>
                    <img
                        srcSet={`${item.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.link}`}
                        alt={item.link}
                        loading="lazy"
                        className='object-cover'
                    />
                    </ImageListItem>
                ))}
                </ImageList>
            </div>
        </div>
    </div>
  )
}
