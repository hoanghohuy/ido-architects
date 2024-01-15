import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { TabContext, TabPanel } from '@mui/lab';

export default function DuAnThietKe() {

  const [value, setValue] = useState('1');

  const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div>
        <div className='max-w-[1152px] mx-auto py-[80px] xs:py-0 xs:px-8'>
            <div className='text-center flex flex-col gap-2'>
                <div className='text-[48px] font-[400] xs:'>Các dự án đã thiết kế</div>
                <div className='text-[18px] font-[400]'>2018 - Present</div>
                <div>
                  <TabContext value={value}>
                    <Tabs
                        value={value}
                        onChange={handleChangeTab}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        centered
                        sx={{minHeight: '34px'}}
                    >
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Tất cả" value="1" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Nhà phố" value="2" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Villa" value="3" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Biệt thự" value="4" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Apartment" value="5" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Coffee" value="6" />
                        <Tab sx={{width: 'unset', flexGrow: 0, padding: '0', textTransform: 'none', fontFamily: 'unset'}} label="Hotel" value="7" />
                    </Tabs>
                      <TabPanel value="1">
                          <div className='flex flex-wrap'>
                            <div className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img src='/Home/A/tab_example.png'/>
                            </div>
                            <div className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img src='/Home/A/tab_example.png'/>
                            </div>
                            <div className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img src='/Home/A/tab_example.png'/>
                            </div>
                            <div className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img src='/Home/A/tab_example.png'/>
                            </div>
                            <div className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img src='/Home/A/tab_example.png'/>
                            </div>
                            <div className='basis-[33.333333%] px-1 py-1 xs:basis-1'>
                              <img src='/Home/A/tab_example.png'/>
                            </div>
                          </div>
                      </TabPanel>
                      <TabPanel value="2">
                          zzzzz
                      </TabPanel>
                    </TabContext>
                </div>
            </div>
        </div>
    </div>
  )
}
