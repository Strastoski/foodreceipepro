import React from 'react'
// import MySVGIcon from './logo.svg';



const Login = () => {
    
  return (

    <div className="loginflex">


      <div className="left-container">
        <img
        alt=''
        height='100%'
        width='100%'
        src={`../../assets/image15.png`}
        />

        <div className=" Yellowlayer "></div>
      </div>
      {/* kiri */}  



      <div className="right-container">
        <h1 className='Head'>Welcome</h1>
        <h6 className='title'>Log in into your existing account</h6>
        <div className="line"></div>

       <div className="Mail">E-mail</div> 
        <input type="text" className='border' />

       <div className="Mail">Password</div>
        <input type="Password" className='border' />
       
       <div className="checkbox">
        <input type="checkbox" name="terms" id="" />
        <p> I agree to terms & conditions </p>
       </div>
      </div>


    </div> 

  )
}

export default Login