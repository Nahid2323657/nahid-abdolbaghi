import React from 'react'
import { ImageContainer } from '../../../../../assets/img/IMG'
import { speedInformation } from '../../../../../constants/NavItemsConstants'

export default function index() {

  return (
    <div className=' px-5'>
        <p className='text-title text-sm py-4 text-right'>معیار های سرعت صفحه</p>
        <div className=' grid grid-cols-2 gap-x-20 px-3'>
            {speedInformation.map(item => (
            <div className='flex justify-between items-center py-7 border-y border-border'>
                <div className='flex justify-center items-center'>
                    <img src={item.img} alt="square"/>
                    <span className='pr-5'>{item.title}</span>
                </div>
                <div className='text-red text-sm'>
                {item.time}
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
