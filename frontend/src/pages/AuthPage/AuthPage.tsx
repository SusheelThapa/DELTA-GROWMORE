import { useState } from 'react'
import LoginForm from '../../components/AuthPage/LoginForm';
import SignUpForm from '../../components/AuthPage/SignUpForm';
// import login_background from '../../images/login-background.jpeg'
import NavBar from '../../components/NavBar';

const AuthPage = () => {
  const [Showlogin, setShowlogin] = useState(true);
  return (
    <>
      <NavBar />
      <div className="login-container w-full h-full flex flex-row">
        {/* <div
          className="login-background w-1/2 bg-cover bg-center h-screen"

          style={{
            backgroundImage:
              `url(${login_background})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-5xl text-green-50 px-28 pt-32 font-bold">
            Your gateway to smarter farming starts here.
          </h1>
          <h2 className="text-3xl text-black px-28 pt-10">
            Cultivate connections, sow solutions. Empowering farmers on our platform for a resilient harvest.
          </h2>
        </div> */}
        <div className="login w-full px-10 bg-[#fafafa] h-screen">
          <div className=" flex flex-row gap-20 p-10 justify-center">
            <div
              className={`Login text-4xl font-bold hover:cursor-pointer ${!Showlogin ? "underline-offset-2 underline" : ""
                }`}
              onClick={() => {
                setShowlogin(false);
              }}
            >
              Sign up
            </div>
            <div
              className={`Login text-4xl font-bold hover:cursor-pointer ${Showlogin ? "underline-offset-2 underline" : ""
                }`}
              onClick={() => {
                setShowlogin(true);
              }}
            >
              Log in
            </div>
          </div>
          {Showlogin ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </>
  )
}

export default AuthPage