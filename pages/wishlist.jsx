import React from "react";
import Image from "next/image";
import Link from "next/link";

const Wishlist = () => {
  return (
    <section>
      <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
        <Image
          src="/empty-wishlist.png"
          width={300}
          height={300}
          className="w-[600px] md:w-[1000px]"
        />
        <span className="text-xl font-bold pt-8">Your Wishlist is empty</span>
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
    </section>
  );
};

export default Wishlist;
