import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto my-[20px] md:my-[40px] px-[20px]">
    
        <div className="text-center max-w-[800px] mx-auto ">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {" "}
            About Us
          </div>

       

          <div className="text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            minima pariatur consectetur cum consequuntur placeat, unde tempore
            harum sint..
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-16 md:grid md:grid-cols-2 2xl:gap-20 flex flex-col-reverse xl:gap-14 gap-10">
          <div className="">
            <p className="text-[16px] font-normal text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              minima pariatur consectetur cum consequuntur placeat, unde tempore
              harum sint ex explicabo nihil quo aperiam corrupti aliquid iusto
              quasi hic repudiandae sit quos? Doloribus eius deserunt nam
              architecto, veritatis exercitationem corrupti sed excepturi, velit
              cumque nesciunt? Veniam, accusamus illum voluptatem aliquid
              quisquam incidunt dolores. Incidunt culpa minus expedita nobis
              necessitatibus eum repellendus. Ullam accusantium nisi libero
              nemo. Reiciendis temporibus assumenda nihil pariatur expedita sint
              eius laborum quasi sunt, ipsum, quisquam nulla, accusantium hic
              reprehenderit voluptatibus dolorum inventore ipsam suscipit illum
              aspernatur aliquam quas? Totam dolore laboriosam doloremque nulla
              iure aliquam libero? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Aliquam labore id eligendi nemo commodi ut
              voluptate veritatis similique deserunt corrupti! Lorem ipsum dolor
              sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Labore, libero cumque? Facere nobis autem vero tempora .
            </p>
          </div>
          <div className="">
            <Image src="/about01.jpg" alt="About-us" height={500} width={500} className="ml-auto md:mx-auto"/>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto md:py-10 grid md:grid-cols-2 2xl:gap-20 xl:gap-14 gap-10">
          <div className="">
            <Image src="/about02.jpg" alt="About-us" height={500} width={500} />
          </div>
          <div className="">
            <p className="text-[16px] font-normal text-justify pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              minima pariatur consectetur cum consequuntur placeat, unde tempore
              harum sint ex explicabo nihil quo aperiam corrupti aliquid iusto
              quasi hic repudiandae sit quos? Doloribus eius deserunt nam
              architecto, veritatis exercitationem corrupti sed excepturi, velit
              cumque nesciunt? Veniam, accusamus illum voluptatem aliquid
              quisquam incidunt dolores. Incidunt culpa minus expedita nobis
              necessitatibus eum repellendus. Ullam accusantium nisi libero
              nemo. Reiciendis temporibus assumenda nihil pariatur expedita sint
              eius laborum quasi sunt, ipsum, quisquam nulla, accusantium hic
              reprehenderit voluptatibus dolorum inventore ipsam suscipit illum
              aspernatur aliquam quas? Totam dolore laboriosam doloremque nulla
              iure aliquam libero?
            </p>
          </div>
        </div>
    
      </div>
    
    </section>
  );
};

export default AboutUs;
