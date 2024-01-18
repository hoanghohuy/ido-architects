'use client';
import { Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { TabContext, TabPanel } from '@mui/lab';
import Link from 'next/link';
import { dataDanhMuc, dataDuAn } from './dataDuAn';
import styles from './DuAnThietKe.module.css';

export default function DuAnThietKe() {

  const [value, setValue] = useState('1');

  const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div data-aos="fade-up" className='pt-[88px] pb-8 sm:pt-[40px] xl:px-[88px] lg:px-12 sm:px-8'>
        <div className='max-w-[1152px] mx-auto xs:py-0'>
            <div className='text-center flex flex-col gap-2 xs:text-left'>
                <div className='text-[48px] font-[400] xs:leading-none sm:text-[40px]'>Các dự án đã thiết kế</div>
                <div className='flex justify-center items-center gap-3 xs:justify-start'>
                  <div className='w-[72px] h-[1px] bg-black'></div>
                  <div className='text-[18px] font-[400]'>2018 - Present</div>
                  </div>
                <div>
                  <TabContext value={value} centered>
                    <Tabs
                        value={value}
                        onChange={handleChangeTab}
                        indicatorColor="red"
                        textColor="inherit"
                        variant="scrollable"
                        scrollButtons="auto"
                        
                        // aria-label="scrollable auto tabs example"
                        allowScrollButtonsMobile
                        className='inline-flex sm:flex'
                        sx={{'& .Mui-selected': {color: 'var(--primary-color)'}}}
                    >
                        <Tab sx={{ textTransform: 'none', fontFamily: 'unset'}} label="Tất cả" value="1" />
                        {
                          dataDanhMuc.map(item => (
                              <Tab key={item.id} sx={{ textTransform: 'none', fontFamily: 'unset'}} label={item.name} value={item.id}/>
                          ))
                        }
                    </Tabs>
                      <TabPanel sx={{padding: ' 12px 0'}} value="1" className='px-0'>
                          <div className='flex flex-wrap gap-2 xs:flex-col xs:gap-6'>
                            {
                              dataDuAn.map(item => (
                            <Link key={item.id} href={`/project/${item.link}`} className={`${styles.duan__item} basis-[32.1%] xs:basis-1`}>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item.image}.png`}/>
                              <div className={`${styles.duan__watermask} h-full absolute top-0`}>
                                <div className='text-[14px] font-[500] text-white'>{item.type}</div>
                                <div className='text-[16px] font-[500] text-white'>{item.name}</div>
                                <div className='text-[14px] font-[500] text-white'>{item.customer}</div>
                              </div>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="2">
                          <div className='flex flex-wrap gap-2 xs:flex-col xs:gap-6'>
                            {
                              dataDuAn.filter(item => item.type == 'Nhà phố').map(item => (
                            <Link key={item.id} href={`/project/${item.link}`} className={`${styles.duan__item} basis-[32.1%] xs:basis-1`}>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item.image}.png`}/>
                              <div className={`${styles.duan__watermask} h-full absolute top-0`}>
                                <div className='text-[14px] font-[500] text-white'>{item.type}</div>
                                <div className='text-[16px] font-[500] text-white'>{item.name}</div>
                                <div className='text-[14px] font-[500] text-white'>{item.customer}</div>
                              </div>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="3">
                          <div className='flex flex-wrap gap-2 xs:flex-col xs:gap-6'>
                            {
                              dataDuAn.filter(item => item.type == 'Villa').map(item => (
                            <Link key={item.id} href={`/project/${item.link}`} className={`${styles.duan__item} basis-[32.1%] xs:basis-1`}>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item.image}.png`}/>
                              <div className={`${styles.duan__watermask} h-full absolute top-0`}>
                                <div className='text-[14px] font-[500] text-white'>{item.type}</div>
                                <div className='text-[16px] font-[500] text-white'>{item.name}</div>
                                <div className='text-[14px] font-[500] text-white'>{item.customer}</div>
                              </div>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="4">
                          <div className='flex flex-wrap gap-2 xs:flex-col xs:gap-6'>
                            {
                              dataDuAn.filter(item => item.type == 'Biệt thự').map(item => (
                            <Link key={item.id} href={`/project/${item.link}`} className={`${styles.duan__item} basis-[32.1%] xs:basis-1`}>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item.image}.png`}/>
                              <div className={`${styles.duan__watermask} h-full absolute top-0`}>
                                <div className='text-[14px] font-[500] text-white'>{item.type}</div>
                                <div className='text-[16px] font-[500] text-white'>{item.name}</div>
                                <div className='text-[14px] font-[500] text-white'>{item.customer}</div>
                              </div>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="5">
                          <div className='flex flex-wrap gap-2 xs:flex-col xs:gap-6'>
                            {
                              dataDuAn.filter(item => item.type == 'Apartment').map(item => (
                            <Link key={item.id} href={`/project/${item.link}`} className={`${styles.duan__item} basis-[32.1%] xs:basis-1`}>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item.image}.png`}/>
                              <div className={`${styles.duan__watermask} h-full absolute top-0`}>
                                <div className='text-[14px] font-[500] text-white'>{item.type}</div>
                                <div className='text-[16px] font-[500] text-white'>{item.name}</div>
                                <div className='text-[14px] font-[500] text-white'>{item.customer}</div>
                              </div>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="6">
                          <div className='flex flex-wrap gap-2 xs:flex-col xs:gap-6'>
                            {
                              dataDuAn.filter(item => item.type == 'Coffee').map(item => (
                            <Link key={item.id} href={`/project/${item.link}`} className={`${styles.duan__item} basis-[32.1%] xs:basis-1`}>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item.image}.png`}/>
                              <div className={`${styles.duan__watermask} h-full absolute top-0`}>
                                <div className='text-[14px] font-[500] text-white'>{item.type}</div>
                                <div className='text-[16px] font-[500] text-white'>{item.name}</div>
                                <div className='text-[14px] font-[500] text-white'>{item.customer}</div>
                              </div>
                            </Link>
                              ))
                            }
                          </div>
                      </TabPanel>
                      <TabPanel sx={{padding: ' 12px 0'}} value="7">
                          <div className='flex flex-wrap gap-2 xs:flex-col xs:gap-6'>
                            {
                              dataDuAn.filter(item => item.type == 'Hotel').map(item => (
                            <Link key={item.id} href={`/project/${item.link}`} className={`${styles.duan__item} basis-[32.1%] xs:basis-1`}>
                              <img loading='lazy' className='object-cover w-full h-full' src={`Gallery/${item.image}.png`}/>
                              <div className={`${styles.duan__watermask} h-full absolute top-0`}>
                                <div className='text-[14px] font-[500] text-white'>{item.type}</div>
                                <div className='text-[16px] font-[500] text-white'>{item.name}</div>
                                <div className='text-[14px] font-[500] text-white'>{item.customer}</div>
                              </div>
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
