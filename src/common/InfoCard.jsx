import React from 'react'
import { InfoApp } from '../utils/Index'

const InfoCard = () => {

  return (
    <div className="p-4 bg-teal-100 dark:bg-teal-200 dark:text-teal-700 border border-teal-600 dark:border-teal-600 rounded-lg shadow-md">
    <h4 className="text-lg font-semibold text-teal-800">Energy App Overview:</h4>
    <ul>
      {InfoApp.map((item) => (<li className="mt-3">
        <div className="flex items-center text-teal-700 ">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="inline-flex pl-2">{item.title}</span>
        </div>
      </li>))}
    </ul>
  </div>
  )
}

export default InfoCard
