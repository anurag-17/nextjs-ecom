import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto md:pt-20 pb-[10px] px-[20px]">
        <div className="text-center max-w-[800px] mx-auto  mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {" "}
            About Us
          </div>
          <div className="text-[14px] md:text-xl">
            At E-commerce website, we're dedicated to providing you with the best
            online shopping experience. Our mission is to offer high-quality
            products, exceptional customer service, and a seamless shopping
            journey from start to finish.
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-16 md:grid md:grid-cols-2 2xl:gap-20 flex flex-col-reverse xl:gap-14 gap-10">
          <div className="">
            <div className="text-xl md:text-xl font-semibold mb-2">
              Who we are :
            </div>
            <p className="text-[12px] md:text-[16px] font-normal text-justify">
              E-commerce website was founded with a passion for delivering
              top-notch products to customers worldwide. We are a team of
              dedicated professionals who strive to curate a diverse range of
              products that cater to your needs and preferences.
            </p>
            <div className="text-xl md:text-xl  font-semibold mt-4 mb-2">
              What We Offer:
            </div>
            <p className="text-[12px] md:text-[16px] font-normal text-justify">
              Our extensive collection features everything from trendy fashion
              apparel and accessories to cutting-edge electronics and gadgets.
              We carefully select each item to ensure it meets our standards of
              quality, style, and functionality. Whether you're searching for
              the latest fashion trends, innovative tech gadgets, or unique
              gifts, you'll find it all right here at E-commerce website.
            </p>
          </div>
          <div className="">
            <Image
              src="/about01.jpg"
              alt="About-us"
              height={500}
              width={500}
              className="ml-auto md:mx-auto"
            />
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto md:py-10 grid md:grid-cols-2 2xl:gap-20 xl:gap-14 gap-10">
          <div className="">
            <Image src="/about02.jpg" alt="About-us" height={500} width={500} />
          </div>
          <div className="">
            <div className="text-xl md:text-xl font-semibold mt-4 mb-2">
              Why Choose Us:
            </div>
            <div className="text-[12px] md:text-[16px] font-normal text-justify pb-4">
              <ul className="list-disc">
                <li>
                  <strong>Quality Assurance:</strong> We source our products
                  from reputable suppliers to guarantee their quality and
                  authenticity.
                </li>
                <li>
                  <strong>Exceptional Customer Service:</strong> Our team is
                  committed to providing prompt assistance and personalized
                  support to ensure your satisfaction.
                </li>
                <li>
                  <strong>Secure Shopping:</strong> Your privacy and security
                  are our top priorities. We utilize advanced encryption
                  technology to safeguard your personal information and payment
                  details.
                </li>
                <li>
                  <strong>Fast Shipping:</strong> We understand the excitement
                  of receiving your order promptly. That's why we strive to
                  process and ship your items as quickly as possible.
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
        <div className="py-[30px]  mb-10 bg-[#f3f3f3]">
          <div className=" w-full md:w-[60%] mx-auto flex flex-col gap-5 items-center justify-center text-center">
            <h3 className="text-[24px] md:text-[34px] mb-3 font-semibold leading-tight">
              Our Promise
            </h3>
            <p className="text-[12px] md:text-[16px]">
              At E-commerce website, we're not just a retailer; we're your
              trusted partner in online shopping. We are dedicated to exceeding
              your expectations at every turn and making your shopping
              experience enjoyable and hassle-free.
            </p>
            <p className="font-semibold text-[16px]">
              Thank you for choosing E-commerce website. Happy shopping!
            </p>
          </div>
        </div>
    </section>
  );
};

export default AboutUs;
