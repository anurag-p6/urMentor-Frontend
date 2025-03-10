const Login = () => {
  return (
      <div className="flex h-screen w-scree bg-[rgb(242, 242, 246)]">
          {/* Left Container */}
          <div className="w-3/5 min-h-[130%] bg-gray-900 text-white flex flex-col justify-center items-center bg-fixed">
              <div className="absolute top-5 left-5 bg-black p-2 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-white uppercase">UrMentor</h3>
              </div>
              <h2 className="text-4xl font-bold mb-10 text-center">Welcome to UrMentor</h2>
              <div className="bg-black p-5 rounded-xl shadow-lg text-center w-80">
                  <p className="text-lg font-semibold">Empowering teachers, inspiring learners</p>
                  <p className="text-sm mt-2">Your journey to knowledge starts here</p>
              </div>
              <div className="bg-black p-5 rounded-xl shadow-lg text-center w-80 mt-5">
                  <p className="text-lg font-semibold">Seamless, distraction-free learning designed to help you grow effortlessly.</p>
              </div>
          </div>
          {/* Right Container */}
          <div className="w-2/5 min-h-[117%] flex justify-center mt-[2.4%] mb-[3%]">
              <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                  <h2 className="text-4xl font-semibold text-center mb-5 underline">SIGNUP</h2>
                  <div className="space-y-3">
                      <div >
                          <label className="block  text-gray-700 mb-[0.5rem]">First Name :-</label>
                          <input type="text" className=" w-full border border-gray-400  p-2 rounded-lg focus:ring-2 focus:ring-blue-500 " placeholder ="Enter your First Name "  />
                      </div>
                      <div>
                          <label className="block text-gray-700  mb-[0.5rem]">Last Name :-</label>
                          <input type="text" className="w-full border border-gray-400 p-2 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter your Last Name" />
                      </div>
                      <div >
                          <label className="block text-gray-700 mb-[0.5rem]">Email-Id:-</label>
                          <input type="email" className="w-full border border-gray-400 p-2 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter your Email-Id" />
                      </div>
                      {/* Phone number  */}
                      <div >
                          <label className="block text-gray-700 mb-[0.5rem]">Phone No:-</label>
                          <input type="tel" className="w-full border border-gray-400 p-2 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter your Phone-No" />
                      </div>
                      {/*  */}

                      <div >
                          <label className="block text-gray-700 mb-[0.5rem]">Create-Password:-</label>
                          <input type="password" id="password" className="w-full border border-gray-400 p-2 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Create an Password" />
                      </div>

                      <div >
                          <label className="block text-gray-700 mb-[0.5rem]">Confirm Password:</label>
                          <input type="password" id="password" className="w-full border border-gray-400 p-2 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Confirm your Password" />
                      </div>

                      <div className="mt-8">
                          <div >
                              <button id="Signin" className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition ></div>">Sign In</button>
                              <div className="text-center mt-2 mr-6">
                                  <a href="#" className="text-blue-500 text-sm absolute">Already have an Account ??</a>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
          </div>
      </div>
  );
}

export default Login;