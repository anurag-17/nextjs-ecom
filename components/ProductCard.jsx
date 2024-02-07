import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data }) => {
    return (
        <Link
            href={`/product-details/${data?.handle}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer border border-transparent  hover:border-[#717875a1] py-2 rounded hover:shadow"
        >
            {/* <Image
                width={500}
                height={500}
                src={data?.image?.src}
                alt={data?.image?.alt}
                
            /> */}
            <img src={data?.image?.src} alt={data?.image?.alt ? data?.image?.alt : "loading"} className="w-[300px] h-[300px] mx-auto" />

                <h2 className="text-lg font-medium text-center text-black/[0.9]">{data?.title}</h2>
            {/* <div className="p-4 text-black/[0.9]">
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{data?.variants}
                    </p>

                    {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )}
                </div>
            </div> */}
        </Link>
    );
};

export default ProductCard;
