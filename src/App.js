import './App.css';
import Navbar from './components/Navbar/Navbar'
import Navbelow from './components/Navbelow/Navbelow';
import OurServices from './components/OurServices/OurServices';
import Services from './components/Services/Services';
import {BsSearch} from 'react-icons/bs'
import {GiMedicinePills} from 'react-icons/gi'
import {CiMemoPad} from 'react-icons/ci'
import {FcViewDetails} from 'react-icons/fc'
import {BsBagPlusFill} from 'react-icons/bs'
import {RiPagesLine} from 'react-icons/ri'
import Button from './components/Button/Button'
import Sect1 from './components/Sect1/Sect1';
import Sect2 from './components/Sect2/Sect2';
import Slider from './components/Slider/Slider'
import Testimonals from './components/Testimonals/Testimonals';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import Testtop from './components/Testtop/Testtop';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
    <div className='max-w-[100rem] font-serif'>

     <Navbar />
     <Navbelow />
     <div>

     <OurServices/>
<div className='p-[2rem]  sm:mx-[-1rem] sm:grid sm:grid-cols-2 sm:gap-8 lg:grid lg:grid-cols-3 lg:grid-rows-2  lg:gap-y-2 lg:gap-x-0  lg:mx-[12rem] '>

     <Services icon={()=><BsSearch className='text-blue-600' size="3rem"/>} name="Seach Doctor"/>
     <Services icon={()=><GiMedicinePills className='text-blue-600' size="3rem"/>} name="Online Pharmacy"/>
    <Services icon={()=><CiMemoPad className='text-blue-600' size="3rem"/>} name="Consultation"/>
     <Services icon={()=><FcViewDetails className='text-blue-600' size="3rem"/>} name="Details Info"/>
      <Services icon= {()=><BsBagPlusFill className='text-blue-600' size="3rem"/>} name="Emergency" />
     <Services icon={()=><RiPagesLine className='text-blue-600' size="3rem"/> } name="Tracking" />
     </div> 
      <Button />
     </div>
     <Sect1/>
     <Sect2/>
     <div className=' py-[2rem] lg:mx-[5rem]'>
     <Slider/>
     </div>
     <Testtop/>
     <div className='sm:mx-[8.8rem] md:flex md:mx-[0.1rem] md:h-[23rem] lg:mx-[7rem] my-[2rem] lg:h-[26rem] '>
     

     <Testimonals Img={img2} name="Disease detection, check up in the laboratory"/>

    <Testimonals Img={img2} name="Herbal medicines that are safe for consumption"/>
    <Testimonals Img={img3} name="Natural care for healthy facial skin"/>

     </div>
     <div className=' '>

     <Footer/>
     </div>
     </div>

    </>

     
      
    
  );
}

export default App;
