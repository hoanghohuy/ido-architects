import React from 'react'

const data = [
  {id: 1, name:'BOP’S Villa 2019', place: 'Thành phố Đà Nẵng', completedDate: '8/2019', link: '/test'},
  {id: 2, name:'BOP’S Villa 2019', place: 'Thành phố Đà Nẵng', completedDate: '8/2019', link: '/test'},
  {id: 3, name:'BOP’S Villa 2019', place: 'Thành phố Đà Nẵng', completedDate: '8/2019', link: '/test'},
  {id: 4, name:'BOP’S Villa 2019', place: 'Thành phố Đà Nẵng', completedDate: '8/2019', link: '/test'},
  {id: 5, name:'BOP’S Villa 2019', place: 'Thành phố Đà Nẵng', completedDate: '8/2019', link: '/test'},
  {id: 6, name:'BOP’S Villa 2019', place: 'Thành phố Đà Nẵng', completedDate: '8/2019', link: '/test'},
  {id: 7, name:'BOP’S Villa 2019', place: 'Thành phố Đà Nẵng', completedDate: '8/2019', link: '/test'},
  {id: 8, name:'BOP’S Villa 2019', place: 'Thành phố Đà Nẵng', completedDate: '8/2019', link: '/test'},
  {id: 9, name:'BOP’S Villa 2019', place: 'Thành phố Đà Nẵng', completedDate: '8/2019', link: '/test'},
]

export default function ProjectCompleted() {
  return (
    <div id='hinhanhhoanthien'>
      <div className='max-w-[1152px] mx-auto py-16 flex flex-col gap-14 lg:px-[48px] md:px-8 xs:gap-8'>
        <div className='text-[48px] text-center font-[400] xs:text-[40px] xs:text-left'>Hình ảnh hoàn thiện</div>
        <div className='flex flex-wrap xs:flex-col xs:gap-8'>
          {data.map(item => 
            <a href={`/project-completed/${item.link}`} className='basis-[33.33%] flex flex-col gap-4 pb-14 px-4 md:basis-[50%] xs:basis-0 xs:pb-0 xs:px-0 '>
                <img src='/project-completed/hoanthien.png' />
                <div className='flex flex-col gap-2'>
                  <div className='text-[20px] font-[500]'>{item.name}</div>
                  <div className='text-[16px] font-[500]'>Địa điểm: {item.place}</div>
                  <div className='text-[16px] font-[500]'>Hoàn thành: {item.completedDate}</div>
                </div>
            </a>
            )}
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
