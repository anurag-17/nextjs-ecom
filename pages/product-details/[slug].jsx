import React, { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import axios from "axios";

import { IoMdHeartEmpty } from "react-icons/io";

import { useRouter } from "next/router";

import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import { addToCart, addToWishlist } from "@/store/cartSlice";
import Skeleton from "react-loading-skeleton";

const ProductDetails = ({ product, products }) => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [showError, setShowError] = useState(false);
  const [productPrice, setProductPrice] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getProducts();
  }, [slug]);

  const getProducts = async () => {
    try {
      await axios.get("/api/getProducts").then((res) => {
        const filterArr = res?.data?.products?.filter((p) => {
          return slug === p?.handle;
        });
        setProductDetails(filterArr[0]);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

 
  return (
    <>
      <div className="w-full md:py-20">
        <ToastContainer />
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductDetailsCarousel images={productDetails?.images} />
            </div>

            <div className="flex-[1] py-3">
              {/* PRODUCT TITLE */}
              <div className="text-[34px] font-semibold mb-2 leading-tight">
              {
                loading ? 
                <div style={{ height: "80px", backgroundColor: "#f0f0f0" }}>
                <Skeleton height={80} />
              </div>
              :
                productDetails?.title
              }
              </div>
              <div className="text-lg font-semibold mb-5">
              {
                loading ? 
                <div style={{ height: "40px", backgroundColor: "#f0f0f0" }} >
                <Skeleton height={40} />
              </div>
              :
              productDetails?.vendor
            }
            </div>
           
              {/* PRODUCT SIZE RANGE START */}
              <div className="mb-10">
                {productDetails?.variants?.map((items, i) => (
                  <>
                    {items?.title === selectedColor && (
                      <div key={i}>
                        <div className="flex md:items-center md:flex-row flex-col">
                          <p className="mr-2 text-lg font-semibold">
                            MRP : &#8377;{items?.price}
                          </p>
                          {items?.compare_at_price && (
                            <>
                              <p className="text-base  font-medium line-through">
                                &#8377;{items?.compare_at_price}
                              </p>
                              <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                  items?.compare_at_price,
                                  items?.price
                                )}
                                % off
                              </p>
                            </>
                          )}
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                          incl. of taxes|
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-2">
                          {`(Also includes all applicable duties)`}|
                        </div>
                      </div>
                    )}
                    {/* <div className="mb-10">
                      <div className="flex justify-between mb-2">
                        <div className="text-md font-semibold">
                          Select Colour
                        </div>
                      </div>
                      <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                        <div
                          className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer
                        ${
                          selectedColor === items?.title ? `bg-[#f3f3f3]` : ""
                        }`}
                          onClick={() => {
                            setSelectedColor(items?.title);
                            setShowError(false);
                            // setProductPrice(id)
                          }}
                        >
                          <div className="">{items?.title}</div>
                        </div>
                      </div>
                    </div> */}
                  </>
                ))}
              </div>
              <div className="mb-10">
                <div id="sizesGrid">
                  {productDetails?.options?.map((option, i) => (
                    <Fragment key={i}>
                      <div className="flex justify-between mb-2">
                        <div className="text-md font-semibold">
                          {option?.name}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {productDetails?.variants?.map((col, inx) => {
                          const colLower = col?.title?.toLowerCase();

                          return (
                            <div
                              key={inx}
                              className={`border rounded-md text-center py-3 font-medium hover:text-${colLower} text-${colLower} cursor-pointer
                        ${selectedColor === col?.title ? `bg-[#f3f3f3]` : ""}`}
                              onClick={() => {
                                setSelectedColor(col?.title);
                                setShowError(false);
                                setProductPrice(col?.price);
                              }}
                            >
                              
                              <div className="">{col?.title}</div>
                            </div>
                          );
                        })}
                      </div>
                      {showError && (
                        <div className="text-red-600 mt-3 px-2">
                          {option?.name} selection is required
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>

              {/*BUTTON START */}
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={() => {
                  if (!selectedColor) {
                    setShowError(true);
                    document.getElementById("sizesGrid").scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  } else {
                    dispatch(
                      addToCart({
                        ...productDetails,
                        selectedColor,
                        oneQuantityPrice: productPrice,
                      })
                    );
                    notify();
                  }
                }}
              >
                Add to Cart
              </button>

              <button
                className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
                onClick={() => {
                  dispatch(
                    addToWishlist({
                      ...productDetails,
                    })
                    );
                }}
              >
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>
              {/* BUTTON END */}

              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="markdown text-md mb-5">
                  {/* <ReactMarkdown> */}

                  {productDetails?.body_html ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: productDetails?.body_html,
                      }}
                    />
                  ) : (
                    "No details available"
                  )}
                  {/* </ReactMarkdown> */}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ProductDetails;
