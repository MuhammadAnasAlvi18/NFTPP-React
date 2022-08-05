import React , {useEffect} from 'react';
import SignInSection from '../Components/SignInSection';


const SignIn = () => {

  useEffect(() => {
    document.title = "NFTPP - Sign In"
 }, []);

  return (
   <SignInSection />
  )
}

export default SignIn;