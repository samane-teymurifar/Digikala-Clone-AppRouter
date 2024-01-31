import { isArray } from "@src/utiles/helper/isArray";
import Image from "next/image";
import { Keywords } from "@src/constants/keyword";
import SearchIcon from "@src/assets/icons/SearchIcon";
import FooterTopSectionData from "./data/index";
import DigikalaApp from "@src/components/DigikalaApp";
import DigikalaInformation from "@src/components/DigiInformation/index";
import { FooterInfo } from "./data/index";
import { SocialMedia}  from "./data/index"


function TopSection() {
    return (
      <section className="px-36 mt-10 border-t border-gray-20">

        <div className="px-5 m-10">
        <div className="flex justify-between w-full">
            <Image src={"https://www.digikala.com/statics/img/svg/digi.svg"} width={100} height={30} alt=""/>
            <button className="flex items-center border border-gray-30 rounded-lg px-4 py-2">
                <span className="text-sm text-gray-30">{Keywords.goToTop}</span>
                <SearchIcon/>
            </button>
        </div>
        <div className="flex justify-start gap-4 mt-5">
            <p className="text-gray-40 text-sm ">
                {
                    Keywords.phoneSuport
                }
            </p>
            <div className="text-gray-30">
                |
            </div>
            <p className="text-gray-40 text-sm">
            {
                    Keywords.phoneSuportData
                }
            </p>
        </div>
        <div className="flex justify-evenly mt-7">
            {isArray(FooterTopSectionData).map((item, key) => (
                <div className="flex flex-col gap-2">
                    <Image src={item.src} width={50} height={50} alt={item.title}/>
                        <p className="text-sm">{item.title}</p>
                    </div>

                    
            
            ))}
        </div>
        </div>

        
        
            <div className="flex flex-wrap justify-between">
                {isArray(FooterInfo).map((item, key) => (
                    <div>
                        <p className="text-sm">{item.CatTitle}</p>
                        <div className="flex flex-col gap-2 mt-2">
                            {
                                item.text.map((subItem, index)=>{
                                    return <div key={`subItem-${index}`} className="text-base text-gray-30 ">{subItem.title}</div>
                                })
                            }
                        </div>
                    </div>
                ))}    
                <div className="flex flex-col gap-3">
                    <div>{Keywords.beWithUs}</div>
                    <div className="flex justify-start gap-8">
                        {
                            isArray(SocialMedia).map((socialMedia)=>(
                                socialMedia.icon
                            ))
                        }
                    </div>
                    <div className="text-gray-70 text-base">{Keywords.emailRegister}</div>
                    
                    <form className="flex gap-2">

                        <input type="email" className="bg-gray-10 h-8 w-80 px-2 py-6 rounded-lg text-gray-80 border-none outline-none " placeholder={Keywords.YourEmail}/>
                        <button className="bg-gray-10 text-gray-50 w-14 h-13 rounded-lg ">
                            {Keywords.RegisterEmail}
                        </button>
                    </form>
                    
                </div>

            </div>

            <DigikalaApp/>
       
            <DigikalaInformation/>

      </section>
  );
}

export default TopSection;