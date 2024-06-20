import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Banner = () => {
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
    <div className="p-5 sm:px-10 md:px-20 bg-black py-28">
      <div className="max-w-screen-xl mx-auto">
        <h2
          id="hero"
          className="opacity-0 mb-3 text-3xl font-extrabold tracking-tight text-white"
        >
          Powering innovation & trust at 200,000+ companies worldwide
        </h2>
        <p
          id="hero"
          className="mb-3 text-gray-400 opacity-0"
        >
          Empower Developers, IT Ops, and business teams to collaborate at high
          velocity. Respond to changes and deliver great customer and employee
          service experiences fast.
        </p>
      </div>
    </div>
  )
}

export default Banner

