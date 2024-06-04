import React, { useState } from 'react'

const FilterEnergyBalance = ({ data, setFilteredData }) => {

  const [powerType, setPowerType] = useState(data?.included[0].type)
  const [powerSource, setPowerSource] = useState(data?.included[0].attributes.content[0].type)
  const [powerSourceOptions, setPowerSourceOptions] = useState(data?.included[0].attributes.content)

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
    event.preventDefault()
    const temp = data?.included.filter((elem) => elem.type === powerType)
    const tempFinal = temp[0].attributes.content.filter((elem) => elem.type === powerSource)
    setFilteredData({
      title: tempFinal[0]?.attributes.title,
      data: tempFinal[0]?.attributes.values,
    })
  }

  return (
    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
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
        <option selected>Choose a energy type</option>
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
         <option selected>Choose a power source</option>
          {powerSourceOptions?.map((elem) => (
              <option key={elem.id} value={elem.type}>
                {elem.type}
              </option>
          ))}
      </select>
    </div>

    <button
        onClick={onSubmit}
        className={` md:w-40 bg-blue-600 text-white dark:text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80`}
      >
        Filter data
      </button>


  </div>
  )
}

export default FilterEnergyBalance
