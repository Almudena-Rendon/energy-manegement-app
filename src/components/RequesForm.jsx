import { useState } from "react";

const RequesForm = () => {

  const URL_base = "https://apidatos.ree.es/es/datos/"

  const [widgets, setWidgets] = useState()


  return (
    <form className="flex flex-col justify-center">
      <div className="flex flex-col">
        <label htmlFor="name" className="hidden">Category</label>
        <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="email" className="hidden">Widget</label>
        <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="tel" className="hidden">Time trunc</label>
        <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
      </div>

      <button type="submit" className="md:w-32 bg-blue-600  text-white dark:text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80">Submit</button>
    </form>
  )
}

export default RequesForm;
