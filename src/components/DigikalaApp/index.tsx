import Image from "next/image";
import { isArray } from "@src/utiles/helper/isArray";

import DigikalaAppData from "./data/index";
import footerlogo from "@images/footerlogo.webp";
import { Keywords } from "@src/constants/keyword";
function DigikalaApp() {


    return (
        <section className="mt-6 mx-24">
            <div className="bg-digikalAppBannerColor h-fit rounded-xl p-4 flex justify-between">
                <div className="flex gap-4 items-center">
                    <Image src={footerlogo} width={44} height={44} alt="Digikala App"/>
                    <div className="text-2xl text-common-white text-right">{Keywords.DigikalaDownload}</div>

                </div>
                              
                <div className="flex gap-1">
                {isArray(DigikalaAppData).map((digiAppImage:any , index) => {
                        return (
                            <Image src={digiAppImage.src} width={168} height={60} alt={digiAppImage.src} className="p-1"/>
                    
                        );
                    })}
                </div>
            </div>
        </section>
  );
}

export default DigikalaApp;