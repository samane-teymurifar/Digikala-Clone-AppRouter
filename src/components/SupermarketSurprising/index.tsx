import Image from "next/image";
import box from "@images/fresh.webp";
import { Keywords } from "@src/constants/keyword";
import SupermarketSurprisingData from "./Data/index"
import { isArray } from "@src/utiles/helper/isArray";
import SurprisingSupermarketCard from "./SurprisingSupermarketCard";
import {SupermarketSurprisingCardDataType} from "./Type/index";
import SearchIcon from "@src/assets/icons/SearchIcon";
async function SurprisingSupermarket() {
 
 return (
    <section className="h-fit bg-surprisingSupermarket flex justify-between mx-48 mt-4 py-6 px-12 rounded-lg">
      <div className="flex items-center justify-between gap-4">
      <Image src={box} alt="surprisingSupermarket" width={62} height={62}/>
      <Image src="https://www.digikala.com/statics/img/svg/typography/fresh.svg" alt="surprisingSupermarket" width={250} height={28}/>
      <div className="bg-offTo59Color rounded-xl h-fit text-sm text-common-white py-1 px-3">{Keywords.offTo59}</div>
      </div>
      <div className="flex gap-3 items-center">
        {isArray(SupermarketSurprisingData).map((item:SupermarketSurprisingCardDataType) => {
        return (
          <SurprisingSupermarketCard key={item.title} cardData={item}/>
        );
        })}       
        <div className="bg-common-white rounded-3xl h-fit py-3 px-5 gap-1 flex items-center text-sm text-offTo59Color">
        {Keywords.moreThan100Product}
        <SearchIcon/>
      </div>
      </div>


    </section>
  );
}

export default SurprisingSupermarket;