import React from 'react'
import { CircleArrowRight, InfoApp } from '../utils/Index'

const InfoCard = () => {

  return (
    <div className="p-4 lg:p-8 bg-teal-100 dark:bg-teal-200 dark:text-teal-700 border border-teal-600 dark:border-teal-600 rounded-lg shadow-md">
    <h4 className="text-lg font-semibold text-teal-800">Energy App Overview:</h4>
  
      {InfoApp.map((item, index) => ( 
        <ul key={index}>
          <li className="mt-3">
            <div className="flex items-center text-teal-700 ">
              <CircleArrowRight />
              <span className="inline-flex pl-2 text-[9px] sm:text-[12px] lg:text-[15px]">{item.title}</span>
            </div>
          </li> 
      </ul>))}
      
  </div>
  )
}

export default InfoCard
