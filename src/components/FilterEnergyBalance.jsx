import React, { useState } from 'react'
import { Spinner } from '../utils/Index'

const FilterEnergyBalance = ({ data, setFilteredData }) => {

  const [powerType, setPowerType] = useState(data?.included[0]?.type)
  const [powerSource, setPowerSource] = useState(data?.included[0]?.attributes.content[0].type)
  const [powerSourceOptions, setPowerSourceOptions] = useState(data?.included[0]?.attributes.content)
  const [loading, setLoading] = useState(false)

  const handlePowerType = (e) => {
    setPowerType(e.target.value)
    let temp = data?.included.filter((elem) => elem.type === e.target.value)
    setPowerSource(temp[0].attributes.content[0].type)
    setPowerSourceOptions(temp[0].attributes.content)
  }

  const handlePowerSource = (e) => {
    setPowerSource(e.target.value)
  }

  const onSubmit = (event) => {
    setLoading(true)
    event.preventDefault()
    const temp = data?.included.filter((elem) => elem.type === powerType)
    const tempFinal = temp[0].attributes.content.filter((elem) => elem.type === powerSource)
    setFilteredData({
      title: tempFinal[0]?.attributes.title,
      data: tempFinal[0]?.attributes.values,
    })
    setLoading(false)
  }

  return (
    <div className="grid md:grid-cols-2 md:gap-6 my-4">
    <div className="flex flex-col mt-4">
      <label
        htmlFor="widgets"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a energy type
      </label>
      <select
        id="widgets"
        value={powerType}
        onChange={handlePowerType}
        className="w-100 mt-1 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
      >
        <option disabled selected>Choose a energy type</option>
          {data?.included.map((type) => (
              <option key={type.id} value={type.type}>
                {type.type}
              </option>
          ))}
      </select>
    </div>

    <div className="flex flex-col mt-4">
      <label
        htmlFor="timeTrunc"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a power source
      </label>
      <select
        id="timeTrunc"
        value={powerSource}
        onChange={handlePowerSource}
        className="w-100 mt-1 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
      >
         <option disabled selected>Choose a power source</option>
          {powerSourceOptions?.map((elem) => (
              <option key={elem.id} value={elem.type}>
                {elem.type}
              </option>
          ))}
      </select>
    </div>
    <button
        onClick={onSubmit}
        className={`${loading ? "cursor-not-allowed" : ""} md:w-40 text-gray-900 bg-white border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 mt-10 md:mt-2 lg:mt-1 dark:bg-gray-800 dark:text-white  dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 border-gray-400 dark:border-gray-700`}
      >
         {loading ? <Spinner /> : null}
         {loading ? "Loading..." : "Filter data"}
      </button>
  </div>
  )
}

export default FilterEnergyBalance
