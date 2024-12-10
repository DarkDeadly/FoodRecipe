import React from 'react'
import Inputs from '../components/Inputs'
import Buttons from '../components/Button'
import {useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from "axios"
const Register = () => {
    const navigate = useNavigate() 
   
    
    const formValidation = yup.object({
        username : yup.string().required("please enter your username"),
        email : yup.string().required("please enter your email").email("Please enter a valid email address"),
        password : yup.string().min(8).required("password is a requirement").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/,"password must at least contains an uppercase , number and a special character"),
        confirmPassword : yup.string().required("please confirm your password").oneOf([yup.ref("password"), null], "Passwords must match")
    })
    const formik = useFormik({
        initialValues : {
            username : "",
            email : "" , 
            password :"",
            confirmPassword : ""
        },
        validationSchema : formValidation,
        onSubmit :async(values , { setSubmitting, setErrors }) => {
            const {username , email , password }  = values
            try {
                const response = await axios.post("/users/register" , {
                    username : username ,
                    password : password,
                    email : email ,
                }, { headers: { 'Content-Type': 'application/json' }}
            
            )
                if (response.data) {
                    console.log(response.data.token)
                    navigate("/")
                    values = {
                        username : "",
                        email : "" , 
                        password :"",
                        confirmPassword : ""
                    }
                    localStorage.setItem("token" , response.data.token)
                }
              formik.resetForm()
            } catch (error) {
                setSubmitting(false);
                if (error.response && error.response.data && error.response.data.message) {
                    setErrors({ server: error.response.data.message });
                }else {
                    console.error('An error occurred:', error);
                }
            }
            
        }


    })
  return (
    <div>
    <div className="FullScreenBg h-screen w-full ">
        <div className='h-full w-full bg-black/50 flex justify-center items-center'>
            <div className="h-[75%] w-[75%] bg-transparent border-4 border-white rounded-xl flex">
                <div className="leftContent h-full w-[55%] bg-black/50 rounded-tl-xl rounded-bl-xl max-md:w-full ">
                    {/* Login Form*/}
                    <div className='formLogin w-full h-full flex flex-col justify-center items-center'>
                    <p className='text-4xl pb-5  bg-gradient-to-r from-red-500 to-orange-500  bg-clip-text text-transparent text-center'>Welcome to Food Recipes</p>
                    <div className='w-[80%]'>
                    <form  onSubmit={formik.handleSubmit}>
                        <Inputs 
                        textType='text' 
                        placeText='please enter your username'
                        inputName='username'
                        handleonchange={formik.handleChange}
                        inputValue={formik.values.username}
                        />
                        {formik.errors && <div className="text-red-500 font-bold">{formik.errors.username}</div>}
                        <Inputs
                        handleonchange={formik.handleChange}
                        inputValue={formik.values.email}
                        />
                        {formik.errors && <div className="text-red-500 font-bold">{formik.errors.email}</div>}
                        <Inputs 
                        textType='password' 
                        placeText='please enter your password'
                        inputName='password'
                        handleonchange={formik.handleChange}
                        inputValue={formik.values.password}
                        />
                        {formik.errors && <div className="text-red-500 font-bold">{formik.errors.password}</div>}
                         <Inputs 
                        textType='password' 
                        placeText='please confirm your password'
                        inputName='confirmPassword'
                        handleonchange={formik.handleChange}
                        inputValue={formik.values.confirmPassword}
                        />
                        {formik.errors && <div className="text-red-500">{formik.errors.confirmPassword}</div>}
                        {formik.errors.server && <div className="text-red-500 alert font-bold"></div>}
                        <Buttons ButtonText='Sign Up' handleclick={formik.handleSubmit}/>
                        <p className='text-lg text-white'>you have an account ? what you waiting for <span className='underline text-violet-500 cursor-pointer' onClick={() => navigate("/")}>Login</span> </p>
                    </form>
                    </div>
                    </div>
                </div>
                <div className="LoginBg h-full w-[45%] rounded-tr-xl rounded-br-xl max-md:hidden">
                    <div className="LoginText bg-black/50 h-full w-full text-center flex flex-col justify-center items-center px-1" >
                        <h1 className=' font-bold font-Diplomzta text-2xl pb-3 bg-gradient-to-r from-red-500 to-orange-500  bg-clip-text text-transparent'>Welcome To Food Store</h1>
                        <p className='text-white font-serif text-xl font-bold'>Discover all the Recipes in the world here</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Register
