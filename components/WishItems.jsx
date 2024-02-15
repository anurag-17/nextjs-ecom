import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromWishlist } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const WishListItem = ({ data }) => {
  // const p = data;

  const dispatch = useDispatch();
  const handleWishlistRemove = ()=>{
    dispatch(removeFromWishlist({id: data?.id }))
  }

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={data?.image?.src}
          alt={data?.image?.alt}
          width={120}
          height={120}
        />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className=" justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {data?.title}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden mt-3">
            {data?.vendor}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-3">
            MRP : &#8377; 200
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block mt-3">
          {data?.title}
        </div>
      </div>
      <RiDeleteBin6Line
        onClick={handleWishlistRemove}
        data-tip="Delete"
        className="cursor-pointer text-black/[0.5] hover:text-black text-[22px] md:text-[20px]"
      />
     
    </div>
  );
};

export default WishListItem;
