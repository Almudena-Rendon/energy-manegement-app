import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { PrincingInfo } from '../utils/Index'

const PriceSection = () => {

  useGSAP(() => {
    gsap.fromTo(
      '#hero',
      { y: 70 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        ease: 'power2.inOut',
      }
    )
  }, [])

  return (
    <div className="box-border max-w-6xl px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
      <div className="flex flex-col items-center leading-7 text-center text-gray-900">
        <h2
          id="hero"
          className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-white border-solid sm:text-4xl md:text-5xl opacity-0"
        >
          Pricing Options
        </h2>
        <p
          id="hero"
          className="box-border mt-4 text-2xl leading-normal text-blue-500 border-solid opacity-0"
        >
          We've got a plan for companies of any size
        </p>
      </div>
      <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-800 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
          {PrincingInfo.map((plan) => ( 
            <div key={plan.name} className="box-border px-4 py-8 text-center bg-darkGray border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-white border-0 border-solid sm:text-3xl md:text-4xl">
            {plan.name}
          </h3>
          <p className="mt-3 leading-7 text-white border-0 border-solid">
            {plan.info}
          </p>
          <div className="flex items-center justify-center mt-6 leading-7 text-white border-0 border-solid sm:mt-8">
            <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
              {plan.price}
            </p>
            <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
              per user <span className="block">per month</span>
            </p>
          </div>
          <button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center bg-blue-500 text-white no-underline bg-transparent border border-b-2 border-blue-500 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
            Select Plan
          </button>
        </div>))}
      </div>
    </div>
  )
}

export default PriceSection
