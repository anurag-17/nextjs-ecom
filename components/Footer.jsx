import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          <div className="flex flex-col gap-3 max-w-[500px]">
          <Link href="/">
            <h5 className="text-[18px] md:text-[20px] font-medium">  E-commerce Website </h5>
            </Link>
            <div className="text-[12px] md:text-[16px]">
            At E-commerce Website , we believe in transparency, integrity, and
            innovation. We're dedicated to continuously improving our offerings
            and ensuring your satisfaction.
            </div>
            {/* <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a store
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              become a partner
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              sign up for email
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              send us feedback
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              student discount
            </div> */}
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex gap-[0px] md:gap-[75px] lg:gap-[100px] shrink-0">
        
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About Us
              </div>
              <Link href="/news">
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                News
              </div>
              </Link>
              <Link href="/careers">
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Careers
              </div>
              </Link>
              <Link href="/about-us">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  About  Us
                </div>
              </Link>
              <Link href="/contact">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Contact Us
                </div>
              </Link>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          <Link href="https://facebook.com" target="_blank">
            <div
              // onClick={() =>
              //     window.open("https://facebook.com", "_blank")
              // }
              className="w-7 md:w-10 h-7 md:h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            >
              <FaFacebookF className="w-[10px] md:w-[20px]" size={20} />
            </div>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="w-7 md:w-10 h-7 md:h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaTwitter className="w-[15px] md:w-[20px]" size={20} />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <div className="w-7 md:w-10 h-7 md:h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <FaYoutube className="w-[15px] md:w-[20px]" size={20} />
            </div>
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <div className="w-7 md:w-10 h-7 md:h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <FaInstagram className="w-[15px] md:w-[20px]" size={20} />
            </div>
          </Link>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] text-white/[0.5] hover:text-white  text-center md:text-left">
          © 2024 E-commerce website, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          {/* <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div> */}
           <Link href="/term-condition" >
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
           </Link>
           <Link href="/privacy-policy" >
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
           </Link>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
