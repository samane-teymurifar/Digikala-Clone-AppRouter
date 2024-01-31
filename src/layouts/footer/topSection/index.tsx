import Image from "next/image";
import { Keywords } from "@src/constants/keyword";
import DigikalaApp from "@src/components/DigikalaApp";
import DigikalaInformation from "@src/components/DigiInformation/index";
import ArrowUPIcon from "@src/assets/icons/ArrowIconUp";
import ServisesSection from "./servisesSection";
import ColumnsSection from "./ColumnsSection";


function TopSection() {
    return (
      <section className="px-36 mt-10 border-t border-gray-20">
        <div className="px-5 m-10">
            <div className="flex justify-between w-full">
                <Image src={"https://www.digikala.com/statics/img/svg/digi.svg"} width={100} height={30} alt=""/>
                <button className="flex items-center border border-gray-30 rounded-lg px-4 py-2">
                    <span className="text-sm text-gray-30">{Keywords.goToTop}</span>
                    <ArrowUPIcon className="fill-secondaryTint-60 pr-1"/>
                </button>
            </div>
            <div className="flex justify-start  gap-4 mt-5">
                <p className="text-gray-40 text-sm ">{Keywords.phoneSuport}</p>
                <div className="text-gray-30">|</div>
                <p className="text-gray-40 text-sm">{Keywords.phoneSuportData}
                </p>
            </div>
            <ServisesSection/>
        </div>
        <ColumnsSection/>
        <DigikalaApp/>
        <DigikalaInformation/>

      </section>
  );
}

export default TopSection;