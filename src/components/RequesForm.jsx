import { useState } from "react"
import toast from "react-hot-toast"
import Calendar from "../common/Calendar"
import FilterEnergyBalance from "./FilterEnergyBalance"
import Filter from "./Filter"
import { requestData, switchCategory, switchWidget } from "../utils/data"
import { Spinner } from "../utils/Index"
import moment from "moment"

const URL_base = "https://apidatos.ree.es/en/datos"

const RequestForm = ({ setFilteredData }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [widgets, setWidgets] = useState(requestData[0].widgets)
  const [request, setRequest] = useState({
    category: requestData[0].category,
    widget: requestData[0].widgets,
    startDate: moment().subtract(1, 'months').startOf("day").format("YYYY-MM-DD[T]HH:mm"),
    endDate: moment().endOf("day").format("YYYY-MM-DD[T]HH:mm"),
    timeTrunc: "day",
  })

  const handleRequest = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch(
        `${URL_base}/${request.category}/${request.widget}?start_date=${request.startDate}&end_date=${request.endDate}&time_trunc=${request.timeTrunc}`,
        {
          method: "GET",
        }
      )
      if (response.ok) {
        const data = await response.json()
        setData(data)
        toast.success(`Request successfully made!`)
      } else {
        const errorData = await response.json()
        toast.error(`${errorData.errors[0].detail}`)
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.error("There was a problem with the request:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChangeCategory = (e) => {
    const arrayTemp = requestData.filter(
      (elem) => elem.category === e.target.value
    )[0].widgets
    setWidgets(arrayTemp)
    setRequest({ ...request, category: e.target.value, widget: arrayTemp[0] })
    setData()
    setFilteredData()
  }

  const handleChangeWidget = (e) => {
    setRequest({ ...request, widget: e.target.value })
    setData()
    setFilteredData()
  }

  const handleTimeTrunc = (e) => {
    setRequest({ ...request, timeTrunc: e.target.value })
    setData()
    setFilteredData()
  }

  return (
    <form className="flex flex-col justify-center">
      <div className="flex flex-col">
        <label
          htmlFor="categories"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a category
        </label>
        <select
          id="categories"
          value={request.category}
          onChange={handleChangeCategory}
          className="w-100 mt-1 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
        >
          <option disabled selected>Choose a category</option>
          {requestData.map((elem, index) => (
            <option key={index} value={elem.category}>
              {switchCategory(elem.category)}
            </option>
          ))}
        </select>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="flex flex-col mt-4">
          <label
            htmlFor="widgets"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a widget
          </label>
          <select
            id="widgets"
            value={request.widget}
            onChange={handleChangeWidget}
            className="w-auto mt-1 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
          >
            <option disabled selected>Choose a widget</option>
            {widgets.map((elem, index) => (
              <option key={index} value={elem}>
                {switchWidget(elem)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mt-4">
          <label
            htmlFor="timeTrunc"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a time trunc
          </label>
          <select
            id="timeTrunc"
            value={request.timeTrunc}
            onChange={handleTimeTrunc}
            className="w-100 mt-1 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
          >
            <option disabled selected>Choose a time trunc</option>
            <option value="day">Day</option>
            <option value="month">Month</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <label
          htmlFor="range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a range
        </label>
        <div className="flex flex-col sm:flex-row sm:items-center mt-1">
          <div className="flex-1">
            <Calendar setRequest={setRequest} request={request} dateType="startDate" />
          </div>
          <span className="mx-4 text-gray-500 my-2">to</span>
          <div className="flex-1">
            <Calendar setRequest={setRequest} request={request} dateType="endDate" />
          </div>
        </div>
      </div>

      <button
        type="submit"
        onClick={handleRequest}
        disabled={loading}
        className={`${loading ? "cursor-not-allowed" : ""} md:w-40 text-gray-900 bg-white border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 mt-10 md:mt-6 dark:bg-gray-800 dark:text-white  dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 border-gray-400 dark:border-gray-700`}
      >
        {loading ? <Spinner /> : null}
        {loading ? "Loading..." : "Submit"}
      </button>

      {data && request.category === "balance" && <FilterEnergyBalance data={data} setFilteredData={setFilteredData} />}
      {data && request.category !== "balance" && <Filter data={data} setFilteredData={setFilteredData} />}

    </form>
  )
}

export default RequestForm
