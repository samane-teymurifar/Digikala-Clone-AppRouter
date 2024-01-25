import { isArray } from "@src/utiles/helper/isArray";
import Image from "next/image";
import { Keywords } from "@src/constants/keyword";
import someJson from "@src/data/HomeData/content";
function SellingAndSales() {

  const SellingAndSales = someJson.result.selling_and_sales


    return (
        <section className="mx-48 mt-4 border border-gray-10 rounded-2xl">
            <div className="text-2xl text-common-black text-center mt-4">{SellingAndSales.title}</div>
            <div  className="grid grid-cols-6  m-4 mt-8">
            {isArray(SellingAndSales.products).map((item, index) => (
                <div className="flex flex-col gap-y-2 border-l  border-gray-10 border-b p-2">
                    <Image src={item.images.main} width={150} height={150} alt={item.title_fa}/>
                    <div className="flex justify-between">
                        <div className="bg-primary-main w-fit h-fit text-center rounded-2xl  text-xs text-common-white px-2 py-1">50%</div>
                        <div className="flex items-center gap-1">
                            <div  className="text-sm">{item.price.selling_price}</div>
                            <div className="text-xs text-gray-60">{Keywords.toman}</div>
                        </div>
                        
                    </div>
                    <div className="text-left line-through text-gray-20 ml-8">{item.price.rrp_price}</div>
                </div>

            ))}

            </div>
        </section>
  );
}

export default SellingAndSales;