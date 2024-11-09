import React from 'react'
import Signup from './Signup'
import { Button } from '@/components/ui/button'
import { useLocation, useNavigate } from 'react-router-dom';
import ForgotPasswordForm from './ForgotPasswordForm';
import Signin from './Signin';

export const Auth = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <div>Auth</div>
//     <div className='h-screen relative authContainer'>
//         <div className='absolute top-0 right-0 left bottom-0 bg-[#030712]'>
// <div className='dgBlure absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 flex flex-col justify-center
// items-center h-[35rem] w-[30rem] rounded-md z-5- bg-black bg-opacity-5- shadow-2xl shadow-white'>
// <h1 className='text-6x1 font-bold pb-9'> demo Trading </h1>
// {location.pathname =="/signup"?<section>
//     <Signup/>
//     <div className='flex items-center justify-center'>
//         <span>
//             Have already account ?
//         </span>
//         <Button  onClick={ ()=> navigate("/signin")}variant="ghost">
//             signin
//         </Button>

//     </div>
// </section>: location.pathname=="/forgot-password"?<section>
// <ForgotPasswordForm/>
// <div className='flex items-center justify-center'>
//         <span>
//              back to log in
//         </span>
//         <Button  onClick={ ()=> navigate("/signin ")}variant="ghost">
//             signin
//         </Button>

//     </div>
// </section> :<section>
//     <Signin/>
//     <div className='flex items-center justify-center'>
//         <span>
//             dont have account
//         </span>
//         <Button  onClick={ ()=> navigate("/signup ")}variant="ghost">
//             signin
//         </Button>

//     </div>
//     </section>}


//  </div>
//         </div>    </div>
  )
}

export default Auth

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(Auth)