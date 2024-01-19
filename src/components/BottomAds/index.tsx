import { isArray } from "@src/utiles/helper/isArray";
import AdsData from "./Data/index";
import { AdsDataType} from "./Type/index";
import Image from "next/image";
 function BottomAds() {
    const AddsCardsArray = AdsData;
    return (
        <div className="grid grid-cols-2 gap-3  mx-48 mt-4">
        {isArray(AddsCardsArray).map((item:AdsDataType) => {
        return (
          <Image src={item.src} alt={item.alt} width={700} height={200} className="rounded-2xl"/>
        );
        })}       
      </div>
  );
}

export default BottomAds;