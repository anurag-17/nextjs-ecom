import { useState } from "react";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const ProductCard = ({ data }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Link
            href={`/product-details/${data?.handle}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer border border-transparent hover:border-[#717875a1] py-2 rounded hover:shadow"
        >
            {loading ? (
                <div className="animate-pulse w-[300px] h-[300px] mx-auto bg-gray-200 rounded">
                      <Skeleton width={300} height={300} />
                </div>
            ) : (
                <>
                    <img
                        onLoad={() => setLoading(false)} 
                        src={data?.image?.src}
                        alt={data?.image?.alt ? data?.image?.alt : "loading"}
                        className="w-[300px] h-[300px] mx-auto"
                    />
                    <h2 className="text-lg font-medium text-center text-black/[0.9]">{data?.title}</h2>
                </>
            )}
        </Link>
    );
};

export default ProductCard;
