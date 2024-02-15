import React, { useState, useEffect,Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import closebuton from '../public/xcross.svg';
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

const Header = () => {
    const [formData,setFormData]=useState({
        name:"",
        password:""
    });
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);
    const [dialogMatch, setDialogMatch] = useState(false);

    const { cartItems,wishlist } = useSelector((state) => state.cart);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    const handleSubmit=()=>{
    //    e.preventDefault();
       localStorage.setItem('userData',JSON.stringify(formData));
       setDialogMatch(false);
       setFormData({
        name:"",
        password:""
       })
    };
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`w-full h-[100px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300
             ${show ? "sticy top-0 bg-[#f3f3f3] border border-red-50 shadow-xl" : ""}`}
        >
            <Wrapper className="h-[80px] flex justify-between items-center">
                <Link href="/">
                    {/* <img src="/logo.svg" className="w-[40px] md:w-[60px]" /> */}
                   <span className="text-[18px] font-semibold"> E-Commerce Website</span>
                </Link>

                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />

                {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />
                )}

                <div className="flex items-center gap-2 text-black">
                    {/* Icon start */}
                    <Link href="/wishlist">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                           {wishlist?.length > 0 && (
                                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                    {wishlist?.length}
                                </div>
                            )}
                        </div>
                     </Link>
                    {/* Icon end */}

                    {/* Icon start */}
                    <Link href="/addtocart">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <BsCart className="text-[15px] md:text-[20px]" />
                            {cartItems?.length > 0 && (
                                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                    {cartItems?.length}
                                </div>
                            )}
                        </div>
                    </Link>
                    {/* Icon end */}
                    <div onClick={()=>setDialogMatch(true)}
                     className=" flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                     Login
                    </div>

                    {/* Mobile icon start */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/* Mobile icon end */}
                </div>
            </Wrapper>
             {/* ----------popup----------- */}
      <Transition appear show={dialogMatch} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[90%] sm:w-full sm:max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-4  sm:px-8 lg:px-8 2xl:p-5 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end ">
                    <button
                      onClick={() => setDialogMatch(false)}
                      className="w-8 2xl:w-6"
                    >
                      <Image src={closebuton} alt="close"/>
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-[29px] font-semibold  text-gray-900 flex justify-center"
                  >
                   Login
                  </Dialog.Title>
                  <div className="mt-2 flex justify-center w-full">
                    <form onSubmit={handleSubmit}>
                     
                      <input
                      className="border border-gray-400 mb-4 py-2 rounded px-3 pr-24"
                        type="text"
                        id="email"
                        name="name"
                        placeholder="Email"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                     <br/>
                 
                      <input
                      className="border border-gray-400 py-2 rounded px-3 pr-24"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <br/>
                      <div className="flex justify-center">
                      <button  className="text-[20px] font-bold px-5 py-3 bg-blue-300  hover:bg-blue-400 rounded-md mt-3" type="submit">Submit</button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </header>
    );
};  

export default Header;
