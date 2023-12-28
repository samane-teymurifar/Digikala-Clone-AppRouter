'use client'
import Image from "next/image";
import Link from "next/link";


type properties = {
    product: any;  
}
function SurprisingOfferCard({product}: properties) {
    console.log("product:", product);
    
    return (
        // <Link>
            <div className="w-full bg-common-white px-4 py-3 h-full cursor-pointer">
                <Image src={product?.images?.main} width={150} height={150} alt={product?.title_en}/>
            </div>
        // </Link>
    );
}

export default SurprisingOfferCard;