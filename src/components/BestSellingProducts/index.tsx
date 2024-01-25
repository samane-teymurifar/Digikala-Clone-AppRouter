import { isArray } from "@src/utiles/helper/isArray";
import Image from "next/image";
import BestSelingProduct from "./Data/index";
import { Keywords } from "@src/constants/keyword";
import someJson from "@src/data/HomeData/content";
function BestSelleProducts() {

  const MobilePhone = someJson.result.home_1.products
  const suitableData = (MobilePhone.concat(MobilePhone)).slice(0, 12)

    return (
        <section className="mx-48 mt-4 border border-gray-10 rounded-2xl">
            <div className="text-2xl text-common-black text-center mt-4">{Keywords.BestSellerProducts}</div>
            <div  className="grid grid-cols-4 gap-6 m-4 mt-8">
            {isArray(suitableData).map((item, index) => (
                <div className="flex items-center gap-2 justify-center">
                    <Image src={item.images.main} width={86} height={86} alt={item.title_fa}/>
                    <div  className="text-lg text-tertiaryTint-50 font-bold font2">{++index}</div>
                    <div className="text-xs text-gray-40 text-ellipsis  w-40 overflow-hidden whitespace-nowrap line-clamp-2">{item.title_fa}</div>
                </div>

            ))}

            </div>
        </section>
  );
}

export default BestSelleProducts;