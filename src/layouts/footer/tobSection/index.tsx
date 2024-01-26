import { isArray } from "@src/utiles/helper/isArray";
import Image from "next/image";
import { Keywords } from "@src/constants/keyword";
import SearchIcon from "@src/assets/icons/SearchIcon";
import FooterTopSectionData from "./data/index";


 function TopSection() {


    const FooterInfo = [
        {
            id: 0,
            CatTitle: "با دیجی‌کالا",
            text: [
                {
                    id: 0,
                    title: "اتاق خبر دیجی‌کالا"
                },
                {
                    id: 1,
                    title: "فروش در دیجی‌کالا"
                },
                {
                    id: 2,
                    title: "فرصت‌های شغلی"
                },
                {
                    id: 3,
                    title: "گزارش تخلف در دیجی‌کالا"
                },
                {
                    id: 4,
                    title: "تماس با دیجی‌کالا"
                },{
                    id: 5,
                    title: "درباره دیجی‌کالا"
                }
            ]
        },
        {
            id: 1,
            CatTitle: "خدمات مشتریان",
            text: [
                {
                    id: 0,
                    title: "پاسخ به پرسش‌های متداول"
                },
                {
                    id: 1,
                    title: "رویه‌های بازگرداندن کالا"
                },
                {
                    id: 2,
                    title: "شرایط استفاده"
                },
                {
                    id: 3,
                    title: "حریم خصوصی"
                },
                {
                    id: 4,
                    title: "گزارش باگ"
                },
            ]
        },
        {
            id: 1,
            CatTitle:  "راهنمای خرید از دیجی‌کالا",
            text: [
                {
                    id: 0,
                    title: "نحوه ثبت سفارش"
                },
                {
                    id: 1,
                    title: "رویه ارسال سفارش"
                },
                {
                    id: 2,
                    title: "شیوه‌های پرداخت"
                }
            ]
        },
    ];


    const SocialMedia = [
        {
            id: 0,
            icon: <SearchIcon/>
        },
        {
            id: 1,
            icon: <SearchIcon/>
        },
        {
            id: 2,
            icon: <SearchIcon/>
        },
        {
            id: 3,
            icon: <SearchIcon/>
        },
    ]
    return (
      <section className=" mt-10 border-t border-gray-20">
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
        <div>
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
        
        </div>
        <div className="flex-grow"></div>
                <div>{Keywords.beWithUs}</div>
                <div className="flex justify-center">
                    {
                        isArray(SocialMedia).map((socialMedia)=>(
                            socialMedia.icon
                        ))
                    }
                </div>
        </div>
      </section>
  );
}

export default TopSection;