import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";


const CartItem = ({ data }) => {
    // const p = data;

    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        };
        dispatch(updateCart(payload));
    };
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart({ id: data.id }));
    };
    return (
        <div className="flex flex-col md:flex-row py-5 gap-3 md:gap-5 border-b">
            {/* IMAGE START */}
            <div className="flex mx-auto shrink-0 aspect-square  md:w-[120px]">
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
                        MRP : &#8377;{data?.oneQuantityPrice}
                    </div>
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-md font-medium text-black/[0.5] hidden md:block mt-3">
                    {data?.title}
                </div>

                <div className="flex  items-center justify-between mt-5">
                    <div className="flex flex-wrap items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            <select
                                className="hover:text-black px-2 py-"
                                onChange={(e) =>
                                    updateCartItem(e, "selectedColor")
                                }
                            >
                                {data?.variants?.map((item, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={item?.title}
                                            disabled={
                                                ! data.selectedColor ? true : false
                                            }
                                            selected={
                                                data.selectedColor === item?.title
                                            }
                                        >
                                           {item?.title}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select
                                className="hover:text-black"
                                onChange={(e) => updateCartItem(e, "quantity")}
                            >
                                {Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line
                        onClick={handleRemoveFromCart}
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
