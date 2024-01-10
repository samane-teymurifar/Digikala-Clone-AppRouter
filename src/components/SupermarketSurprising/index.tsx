import Image from "next/image";
import box from "@images/fresh.webp";
import { Keywords } from "@src/constants/keyword";
// import SupermarketSurprisingData from "./Data/index"
async function SurprisingSupermarket() {
    // console.log("SupermarketSurprisingData:", SupermarketSurprisingData);
    
 return (
    <section className="h-10 bg-surprisingSupermarket flex px-48">
      
      <Image src={box} alt="surprisingSupermarket" width={50} height={50}/>
      <Image src="https://www.digikala.com/statics/img/svg/typography/fresh.svg" alt="surprisingSupermarket" width={200} height={50}/>
      <div className="bg-offTo59Color rounded-xl h-fit text-sm text-common-white py-1 px-3">{Keywords.offTo59}</div>
    </section>
  );
}

export default SurprisingSupermarket;