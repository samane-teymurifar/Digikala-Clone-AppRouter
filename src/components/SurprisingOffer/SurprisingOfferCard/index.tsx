'use client'
import { Keywords } from "@src/constants/keyword";
import Image from "next/image";
import Link from "next/link";


type properties = {
    product: any;  
}
function SurprisingOfferCard({product}: properties) {

    return (

            <div className="bg-common-white px-4 py-3 h-full cursor-pointer">
                <Image src={product?.images?.main} width={150} height={150} alt={product?.title_en}/>
                <span className="flex-col w-full"> 
                <div className="flex justify-between gap-2 pt-2">
                <div className="text-xs bg-primary-light  text-common-white rounded-3xl w-9 h-5 text-center flex items-center justify-center">2%</div>
                <div className="flex gap-1 items-center">
                    <div className="text-gray-90 text-sm">
                    {product?.price.rrp_price}
                    </div>
                    <div className="text-xs text-gray-90">
                        {Keywords.toman}
                    </div> 
                </div></div>
                    <div className="text-xs text-gray-40 line-through text-left">
                        {product?.price.selling_price}
                    </div>
      
                </span>
            </div>
     
    );
}

export default SurprisingOfferCard;