import React , {useEffect} from 'react';
import SignUpSection from '../Components/SignUpSection';

const SignUp = () => {

  useEffect(() => {
    document.title = "NFTPP - Sign Up"
 }, []);

  return (
  <SignUpSection />
  )
}

export default SignUp;