import React, { useState } from 'react'

const Filter = ({ data, setFilteredData }) => {

  const [subcategory, setSubcategory] = useState(data?.included[0]?.type)
  
  const onSubmit = (event) => {
    event.preventDefault()
    const temp = data?.included.filter((elem) => elem.type === subcategory)
    
    setFilteredData({
      title: subcategory,
      data :temp[0]?.attributes.values,
    })
  }

  return (
    <div className=" mt-4">
      <div className="flex flex-col">
          <label
            htmlFor="timeTrunc"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a subcategory
          </label>
          <select
            id="timeTrunc"
            value={subcategory}
            onChange={(e)=> setSubcategory(e.target.value)}
            className="w-100 mt-1 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
          >
            <option selected>Choose a subcategory</option>
              {data?.included?.map((elem) => (
                  <option key={elem.id} value={elem.type}>
                    {elem.type}
                  </option>
              ))}
            </select>
        </div>
        <button
            onClick={onSubmit}
            className={`mt-5 md:w-40 bg-blue-600 text-white dark:text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80`}
          >
            Filter data
          </button>
      </div>
  )
}

export default Filter
