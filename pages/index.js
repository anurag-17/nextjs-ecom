import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

import { fetchDataFromApi } from "@/utils/api";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

    const [products,setProducts] = useState([]);

    // console.log("res",products)
    useEffect(()=>{ getProducts() },[])

    const getProducts = async () => {
        try {
          await axios.get('/api/getProducts')
          .then((res)=>{
            setProducts(res?.data?.products)
          })
          .catch((e)=>{console.log("e",e)})
        } catch (error) {
          console.error("Error:", error);
        }
      };
      


    return (
        <main>
            <HeroBanner />
            <Wrapper>
                {/* heading and paragaph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] ">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>      
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 my-14 px-5 md:px-0">
                    {products?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
                {/* products grid end */}

            </Wrapper>
        </main>
    )
}

// export async function getStaticProps() {

//         const options = {
//             method: "GET",
//         };
    
//         const res = await fetch(`https://45880e62786c3b0d2ad5ab66ff561d97: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@demo-store-controlf5.myshopify.com//admin/api/2023-07/products.json`, options);
//         // const data = await res.json();
//     console.log("res",res)
//     return {
//         props: { res },
//     };
// }
