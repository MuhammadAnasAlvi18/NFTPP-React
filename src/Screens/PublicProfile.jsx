import React , {useEffect} from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import PublicProfileSection from '../Components/PublicProfileSection';

const PublicProfile = () => {

  useEffect(() => {
    document.title = "NFTPP - Public Profile"
 }, []);

  return (
    <>
    <Navbar />
    <PublicProfileSection />
    <Footer />
    </>
  )
}

export default PublicProfile;