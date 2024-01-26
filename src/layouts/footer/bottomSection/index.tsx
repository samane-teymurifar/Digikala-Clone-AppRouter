import { isArray } from "@src/utiles/helper/isArray";
import FooterData from "./data/index";
import Image from "next/image";
import { Keywords } from "@src/constants/keyword";

 function BottomFooter() {

    return (
      <section className="flex w-full flex-col border-t border-gray-20 mt-6">
        <div className="w-full text-xs text-gray-30 my-8 text-center">{Keywords.DigikalaRight}</div>
        <div className="w-full flex flex-wrap items-start">

            {isArray(FooterData).map((item, key) => (
                <div >

                    <Image src={item.src} width={100} height={50} alt="" className="bg-gray-10  p-5 border-l border-gray-20"/>
                </div>
            ))}
        </div>
      </section>
  );
}

export default BottomFooter;