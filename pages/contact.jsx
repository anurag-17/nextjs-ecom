import React from "react";

const Contact = () => {
  return (
    <section className="md:py-20 ">
      <div className="text-center text-[28px] md:text-[34px]  font-semibold leading-tight mt-8 md:mt-0">
        {" "}
        Contact Us
      </div>
      <div className=" py-[30px] my-6 contact-page">
        <div className="absolute lg:w-[50%] sm:w-[60%] w-full px-[20px] ">
        <div className=" ">
          <form action="" className="">
            <div className="flex flex-col gap-4 justify-center  md:max-w-[80%] mx-auto ">
              <div className="text-left ">
                {/* <p className="text-[15px] font-[400] leading-[26px] text-gray-400 mb-4 text-[#494949]">
                       Welcome back! Please enter your details
                        </p> */}
              </div>

              <div className="relative flex justify-center items-center mt-4">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your name"
                  className="login-input placeholder:text-[gray] w-full custom-input "
                  // onChange={InputAdmin}
                  // minLength={8}
                  // value={adminData.email}
                  required
                />
              </div>
              <div className="relative flex justify-center items-center mt-4">
                <input
                  type="number"
                  name="email"
                  placeholder="Enter your cantact number"
                  className="login-input placeholder:text-[gray] w-full custom-input "
                  // onChange={InputAdmin}
                  // minLength={8}
                  // value={adminData.email}
                  required
                />
              </div>
              <div className="relative flex justify-center items-center mt-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="login-input placeholder:text-[gray] w-full custom-input "
                  // onChange={InputAdmin}
                  // minLength={8}
                  // value={adminData.email}
                  required
                />
              </div>
              <div className="relative flex justify-center items-center mt-4">
                <textarea
                  type="text"
                  name="password"
                  placeholder="Message"
                  className=" border border-[#f3f3f3] py-2 px-4 focus-visible:outline-none
                   placeholder:text-[gray] w-full h-[100px]"
                  required
                ></textarea>
                <div className="absolute right-[10px] cursor-pointer"></div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  // className="w-full bg-[#1f2432] hover:text-[#1f2432] font-medium text-white p-2 rounded-lg  hover:bg-white hover:border hover:border-gray-300 h-[50px] login-btn"
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="">
          <img
            src="/contact.jpg"
            alt="contact"
            className="w-full max-w-full h-auto xl:max-h-[100vh]"
          />
        </div> */}
        </div>

      </div>
    </section>
  );
};

export default Contact;
