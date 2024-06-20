import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/Index'
import gsap from 'gsap'

const ManageData = () => {
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

  useGSAP(() => {
    animateWithGsap(".g_grow", { scale: 1, opacity: 1, ease: "power1" }, { scrub: 5.5 })
  }, [])

  return (
    <div className="screen-max-width">
      <div className="flex-center flex-col sm:px-10">
        <div className="mt-25 mb-24 px-10">
          <h2 className="text-5xl lg:text-7xl font-semibold text-white leading-[55px]">Control and</h2>
          <h2 className="text-5xl lg:text-7xl font-semibold text-white leading-[55px]">Manage your <span className='text-blue-500'>Data.</span></h2>
        </div>
        <div className="relative pb-8 h-[40vh] w-full flex items-center lg:px-[150px] px-6">
          <div className="flex-1 overflow-hidden h-[40vh]">
            <img 
              src="https://t3.ftcdn.net/jpg/08/29/74/90/360_F_829749003_hwPIwATn5gQd3EojjluxJlxOpciKyulP.jpg" 
              alt="titanium" 
              className="feature-video g_grow" 
            />
          </div>
        </div>
        <div className="flex flex-col w-full relative">
          <div className="feature-video-container justify-center lg:px-[150px] px-6">
            <div className="flex-1 overflow-hidden h-[40vh]">
              <img 
                src="https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="titanium" 
                className="feature-video g_grow" 
              />
            </div>
            <div className="flex-1 overflow-hidden h-[40vh]">
              <img 
                src="https://images.unsplash.com/photo-1495976797530-f33e6580e44b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVuZXJneXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="titanium 2" 
                className="feature-video g_grow" 
              />
            </div>
          </div>
          <div className="feature-text-container justify-center px-6 lg:px-[150px]">
            <div className="flex-1 flex-center">
              <p id="hero" className="feature-text text-gray-50">
                Energy App is <span className="text-gray-400">your ultimate solution for managing energy data</span>, utilizing cutting-edge technology. Experience the future of energy management today.
              </p>
            </div>
            <div className="flex-1 flex-center">
              <p id="hero" className="feature-text text-gray-400">
              Our advanced algorithms offer unparalleled efficiency, making it the <span className="text-gray-50">smartest and most reliable app on the market.</span> You'll notice the difference the moment you use it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageData
