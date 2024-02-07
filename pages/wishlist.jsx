import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import WishListItem from "@/components/WishItems";

const Wishlist = () => {
  const [loading, setLoading] = useState(false);
  const { wishlist } = useSelector((state) => state.cart);
  console.log(wishlist);

  return (
    <section className="w-full md:py-20">
      <Wrapper>
        {wishlist.length > 0 && (
          <>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                WishList
              </div>
            </div>
            {/* HEADING AND PARAGRAPH END */}

            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Wishlist Items</div>
                {wishlist.map((item) => (
                  <WishListItem key={item.id} data={item} />
                ))}
              </div>
              {/* CART ITEMS END */}

              {/* SUMMARY START */}
              <div className="flex-[1]">
                <div className="text-lg font-bold"> </div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">

                {/* BUTTON START */}
             <Image src="/about2.jpg" alt="buy product" height={400} width={400} />
                  <div className="flex justify-between mt-4">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Lorem Ipsum
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel voluptatum quia modi repellendus dolorum incidunt et pariatur repudiandae ut. 
                </div>
                </div>
                {/* BUTTON END */}
              </div>
              {/* SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        )}

        {wishlist.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-wishlist.png"
              width={300}
              height={300}
              className="w-[600px] md:w-[1000px]"
            />
            <span className="text-xl font-bold pt-8">
              Your Wishlist is empty
            </span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your wishList.
              <br />
              Go ahead and explore our products.
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Watching
            </Link>
          </div>
        )}
      </Wrapper>
    </section>
  );
};

export default Wishlist;
