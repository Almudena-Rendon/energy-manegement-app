import Login from './Login'
import "../index.css"


const Hero = () => {

  return (
    <section
      id="home"
      className=' bg-white dark:bg-gray-900 pt-[69px] backgroundLogin w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container xl:px-20 px-3'
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-36">
        <p className="text-xl font-montserrat text-white">
          Welcome to Energy App
        </p>
        <h1 className="mt-10 font-palanquin text-[80px] leading-[100px] max-sm:text-[28px] max-sm:leading-[45px] font-bold">
          <span className="text-white xl:whitespace-nowrap relative z-10 xl:pr-10 max-sm::p-0">
              New Energy 
          </span>
          <br />
          <span className="text-blue-500 inline-block mt-3">
            Management{" "}
          </span>{" "}
        </h1>
        <p className="text-white font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover the future of energy management with Energy App, the ultimate tool to help you monitor, control, and optimize your energy consumption.
        </p>
      </div>

      <div className="relative flex-1 flex justify-center items-center pb-10 xl:pb-0 ">
        <Login />
      </div>
    </section>
  )
}

export default Hero