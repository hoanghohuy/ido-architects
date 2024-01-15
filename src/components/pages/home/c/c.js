import React, { useState } from 'react'
import { dataC } from './dataC'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

export default function HomeC() {
    const [expanded, setExpanded] = useState([]);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? [...expanded, panel] : expanded.filter((item) => item !== panel));
    };
  return (
    <div>
        <div className='px-[88px] pt-16 flex justify-between lg:px-12 md:flex-col md:max-w-full md:gap-12 xs:px-8'>
            <div className='max-w-[40%] text-[38px] text-primary font-[500] leading-[38px] md:max-w-full'>
                IDO Architects cung cấp đầy đủ dịch vụ trong lĩnh vực kiến trúc và thiết kế nội thất.
            </div>
            <div className='max-w-[50%] md:max-w-full'>
                {dataC &&
                    dataC.map((item, index) => (
                        <div key={item.id}>
                            <Accordion
                                key={item.id}
                                sx={{
                                    borderRadius: '12px',
                                    border: `none`,
                                    boxShadow: 'none',
                                    '&:not(:last-child)': {
                                        borderBottom: 0,
                                    },
                                    '&:before': {
                                        display: 'none',
                                    },
                                }}
                                expanded={expanded.includes(item.id) ? true : false}
                                onChange={handleChange(item.id)}
                            >
                                <AccordionSummary
                                    sx={{borderBottom: '1px solid #111'}}
                                    key={item.id}
                                    expandIcon={
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 19.0858V3.5H13.0001L13.0001 19.0858L19.293 12.7929L20.7072 14.2071L12.0001 22.9142L3.29297 14.2071L4.70718 12.7929L11.0001 19.0858Z" fill="#1A191A"/>
                                            </svg>
                                        </>
                                    }
                                    aria-controls="panel1d-content"
                                    id="panel1d-header"
                                >
                                    <div className='pr-4 text-primary font-[600]'>
                                        {item.id}
                                    </div>
                                    <div className='text-[30px] font-[500] xs:text-[20px]'>
                                        {item.text}
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    ></div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}
