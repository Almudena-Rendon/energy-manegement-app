import PriceSection from '../components/PriceSection'
import HeroSection from '../components/HeroSection'
import ManageData from '../components/ManageData'
import Banner from '../components/Banner'
import Footer from '../common/Footer'
import "../index.css"

const Hero = ({ setIsLogged }) => {

  return (
    <>
      <section
        id="home"
        className="bg-gray-900 pt-[69px] backgroundLogin w-full flex xl:flex-row flex-col justify-center lg:h-[80vh] gap-10 max-container xl:px-20 px-3"
      >
        <HeroSection setIsLogged={setIsLogged} />
      </section>
      <Banner />
      <section 
        id="about" 
        className="h-full common-padding relative overflow-hidden bg-zinc"
      >
        <ManageData />
      </section>
      <section 
        id="services" 
        className="box-border py-8 leading-7 text-gray-900 border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24 bg-black"
      >
        <PriceSection />
      </section>
      <section 
        className="bg-zinc"
      >
        <Footer /> 
      </section>
    </>
  )
}

export default Hero
