'use client';
import { Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { TabContext, TabPanel } from '@mui/lab';
import Link from 'next/link';

export default function DuAnThietKe() {

  const [value, setValue] = useState('1');

  const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div data-aos="fade-up" className='pt-[88px] sm:pt-[40px] xl:px-[88px] lg:px-12 sm:px-8'>
        <div className='max-w-[1152px] mx-auto xs:py-0'>
            <div className='text-center flex flex-col gap-2 xs:text-left'>
                <div className='text-[48px] font-[400] xs:leading-none sm:text-[40px]'>Các dự án đã thiết kế</div>
                <div className='text-[18px] font-[400]'>2018 - Present</div>
                <div>
                  <TabContext value={value}>
                    <Tabs
                        value={value}
                        onChange={handleChangeTab}
                        indicatorColor="red"
                        textColor="inherit"
                        centered
                        sx={{minHeight: '34px', '& .MuiTabs-flexContainer': {justifyContent: 'center'}}}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Tất cả" value="1" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Nhà phố" value="2" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Villa" value="3" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Biệt thự" value="4" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Apartment" value="5" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Coffee" value="6" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Hotel" value="7" />
                    </Tabs>
                      <TabPanel sx={{padding: ' 12px 0'}} value="1" className='px-0'>
                          <div className='flex flex-wrap xs:flex-col xs:gap-6'>
                            {
                              [1,2,3,4,5,6,7,8,9].map(item => (
                            <Link key={item} href={'/project/test'} className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item}.png`}/>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="2">
                          <div className='flex flex-wrap xs:flex-col xs:gap-6'>
                            {
                              [1,2,3,4,5,6].map(item => (
                            <Link key={item} href={'/project/test'} className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item}.png`}/>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="3">
                          <div className='flex flex-wrap xs:flex-col xs:gap-6'>
                            {
                              [1,2,3,4,5,6,7,8,9].map(item => (
                            <Link key={item} href={'/project/test'} className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item}.png`}/>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="4">
                          <div className='flex flex-wrap xs:flex-col xs:gap-6'>
                            {
                              [1,2,3,4,5,6].map(item => (
                            <Link key={item} href={'/project/test'} className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item}.png`}/>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="5">
                          <div className='flex flex-wrap xs:flex-col xs:gap-6'>
                            {
                              [1,2,3,4,5,6,7,8,9].map(item => (
                            <Link key={item} href={'/project/test'} className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item}.png`}/>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="6">
                          <div className='flex flex-wrap xs:flex-col xs:gap-6'>
                            {
                              [1,2,3,4,5,6].map(item => (
                            <Link key={item} href={'/project/test'} className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item}.png`}/>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="7">
                          <div className='flex flex-wrap xs:flex-col xs:gap-6'>
                            {
                              [1,2,3,4,5,6,7,8,9].map(item => (
                            <Link key={item} href={'/project/test'} className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item}.png`}/>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                    </TabContext>
                </div>
            </div>
        </div>
    </div>
  )
}
