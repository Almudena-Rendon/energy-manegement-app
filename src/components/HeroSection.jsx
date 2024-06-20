import { useGSAP } from '@gsap/react'
import Login from './Login'
import { animateWithGsap } from '../utils/Index'

const HeroSection = ({ setIsLogged }) => {
  useGSAP(() => {
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 0.3,
    })
  }, [])

  return (
    <>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x">
        <p className="pl-1 text-xl font-montserrat text-white opacity-0 g_text">
          Welcome to Energy App
        </p>
        <div className="mt-6 font-palanquin text-[80px] leading-[100px] max-sm:text-[45px] max-sm:leading-[45px] font-bold">
          <h1 className="text-white xl:whitespace-nowrap relative z-10 xl:pr-10 max-sm:p-0 opacity-0 g_text">
            New Energy
          </h1>
          <h1 className="text-blue-500 inline-block mt-3 opacity-0 g_text">
            Management{" "}
          </h1>
        </div>
        <p className="text-white font-montserrat text-lg leading-8 mt-6 mb-14 lg:max-w-md sm:max-w-sm opacity-0 g_text">
          Discover the future of energy management with Energy App, the
          ultimate tool to help you monitor, control, and optimize your energy
          consumption.
        </p>
      </div>
      <div className="relative flex-1 flex justify-center items-center pb-10 xl:pb-0">
        <Login setIsLogged={setIsLogged} />
      </div>
    </>
  )
}

export default HeroSection
