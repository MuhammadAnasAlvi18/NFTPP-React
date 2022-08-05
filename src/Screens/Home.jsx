import React , {useEffect} from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/SectionOne'
import SectionTwo from '../Components/SectionTwo'
import SectionThree from '../Components/SectionThree'
import Footer from '../Components/Footer'

const Home = () => {

  useEffect(() => {
    document.title = "NFTPP - Home";
 }, []);

  return (
    <>
    <div className="backgroundImage">
    <Navbar/>
    <SectionOne/>
    </div>
    <SectionTwo/>
    <SectionThree/>
    <Footer/>
    </>
  )
}

export default Home;