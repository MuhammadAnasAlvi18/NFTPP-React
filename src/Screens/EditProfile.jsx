import React , {useEffect} from 'react'
import Navbar from '../Components/Navbar'
import EditProfileSection from '../Components/EditProfileSection'

const EditProfile = () => {

  useEffect(() => {
    document.title = "NFTPP - Edit Profile"
 }, []);

  return (
    <>
    <Navbar />
    <EditProfileSection />
    </>
  )
}

export default EditProfile