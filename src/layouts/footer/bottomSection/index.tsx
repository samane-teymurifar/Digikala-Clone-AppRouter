import { isArray } from "@src/utiles/helper/isArray";
import FooterData from "./data/index";
// import Image from "next/image";
import { Keywords } from "@src/constants/keyword";
import Link from "next/link";

function BottomFooter() {


    return (
      <section className="flex w-full flex-col mt-6">
        <div className="mx-12 border-t border-gray-5 pt-10 text-xs text-gray-30 my-8 text-center">{Keywords.DigikalaRight}</div>
        <div className="px-7 bg-gray-5">
          <div className="w-full flex flex-wrap  items-start justify-end">
              {isArray(FooterData).map((item, key) => (
                    // <Image src={item.src} width={200} height={100} alt="" className="bg-gray-10 p-5 border-l border-gray-20"/>
                    <Link href={item.href} className="px-5 grow w-[12%] flex justify-center items-center flex-col h-20"> 
                    <img src={item.src} height="20" alt={item.alt}/>
                    </Link>
                    
              ))}
          </div>
        </div>
      </section>
  );
}

export default BottomFooter;