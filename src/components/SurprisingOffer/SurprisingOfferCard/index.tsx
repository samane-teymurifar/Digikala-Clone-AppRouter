'use client'
import { Keywords } from "@src/constants/keyword";
import Image from "next/image";
import Link from "next/link";


type properties = {
    product: any;  
}
function SurprisingOfferCard({product}: properties) {
    console.log("product:", product?.price);
    
    return (

            <div className="bg-common-white px-4 py-3 h-full cursor-pointer">
                <Image src={product?.images?.main} width={150} height={150} alt={product?.title_en}/>
                <span className="flex-col w-full"> 
                <div className="flex justify-between pt-2">
                <div className="text-xs bg-primary-main rounded-3xl w-9 h-5 text-center flex items-center justify-center">2%</div>
                <div className="flex gap-1 items-center">
                    <div>
                    {product?.price.rrp_price}
                    </div>
                    <div className="text-xs">
                        {Keywords.toman}
                    </div> 
                </div></div>
                    <div>
                        {product?.price.selling_price}
                    </div>
      
                </span>
            </div>
     
    );
}

export default SurprisingOfferCard;