
import '../home/home.css';
import Slider from '../../components/slider/Slider';
import About from '../about/About';
import CoverBanner from '../../components/coverBanner/CoverBanner';
import Services from '../../components/services/Services';
import Accordian from '../../components/Banner/accordian/Accordian';
import Testimonials from '../../components/testimonials/Testimonial';
import Count from '../../components/countingNumber/Count';

const Home = () => {
  
  return (
    <>
    <div className="home_container">
        <div className="">
           <div className='slide_component'> <Slider/></div>
           <Count/>
            <About/>
           <CoverBanner/>
           <Services/>
           <Accordian/>
           <Testimonials/>
        </div>
    </div>
        
      
    </>
  )
}

export default Home
