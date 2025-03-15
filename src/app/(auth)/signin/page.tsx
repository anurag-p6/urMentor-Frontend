'use client'
import SplineComponent from "@/components/splineComponent";
import SplineNext from "@splinetool/react-spline/next";
import {Eye, EyeOff, Router} from "lucide-react"
import React, { InputHTMLAttributes, useState } from "react";
import { useRouter } from "next/navigation";

const SignUpp = () => {
   const [showPassword, setShowPassword] = useState(false)
   const router = useRouter();
   const [formData, setFormData] = useState({
    email:"",
    password:"",
   });
   const [error, setError] = useState("")

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
   };

   const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
  

    try {
      const res = await fetch("http://localhost:8080/api/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log(res);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Signup failed!");
      }

      alert("Signin successful!");
    } catch(error) {
       console.log(error)
    }
  }
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      {/* Left Container */}   
      {/* <SplineComponent /> */}
      <div className="hidden z-10 flex-wrap w-full md:w-3/5 h-1/2 md:h-full bg-transparent text-white md:flex flex-col justify-center items-center p-5 ">
        
        <div className="absolute top-5 left-5 bg-black p-2 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white uppercase">UrMentor</h3>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">Welcome to UrMentor</h2>
        <div className="bg-transparent p-5 rounded-xl shadow-lg text-center w-full max-w-sm">
          <p className="text-lg font-semibold">Empowering teachers, inspiring learners</p>
          <p className="text-sm mt-2">Your journey to knowledge starts here</p>
        </div>
        <div className="bg-transparent p-5 rounded-xl shadow-lg text-center w-full max-w-sm mt-5">
          <p className="text-lg font-semibold">Seamless, distraction-free learning designed to help you grow effortlessly.</p>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-full md:w-2/5 flex justify-center items-center p-5">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5 underline text-black">SIGNIN</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Email / Phone Number:</label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-400 p-2 rounded-lg focus:ring-2 text-black focus:ring-blue-500" placeholder="Email Id"/>
            </div>
            <div className="relative ">
              <label className="block text-gray-700 mb-2">Password:</label>
              <input type={showPassword? "text": "password"} name="password" onChange={handleChange} value={formData.password} className=" w-full border border-gray-400 p-2 text-black rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Password" />
              <button
                type="button"
                className="absolute pt-[35px] right-3 top-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="text-right text-blue-500 text-sm">
              <a href="#">Forgot Password?</a>
            </div>
            <button onClick={handleSubmit} className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition">
              Sign In
            </button>
            <div className="text-center text-blue-500 hover:cursor-pointer"
             onClick={() => router.push("/signup")}>
              Create a Account
            </div>
            <button className="w-full text-gray-600 flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-lg shadow hover:shadow-md">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" className="w-5 h-5" />
              Continue with Google
            </button>
            <button className="w-full text-gray-600 flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-lg shadow hover:shadow-md">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="w-5 h-5" />
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpp;
