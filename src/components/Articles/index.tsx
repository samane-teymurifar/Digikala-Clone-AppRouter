import SearchIcon from "@src/assets/icons/SearchIcon";
import { Keywords } from "@src/constants/keyword";
import { isArray } from "@src/utiles/helper/isArray";
import Image from "next/image";
import article1 from "../../assets/images/article1.jpg";
import article2 from "../../assets/images/article2.jpg";
import article3 from "../../assets/images/article3.jpg";
import article4 from "../../assets/images/article4.jpg";

function Articles() {

    const ArticlesData = [
        {
          id: 1,
          src: article1,
          title: "بررسی کرم ضد آفتاب بی رنگ برایت مکس؛ آبرسان با  SPF 50"
        },
        {
            id: 2,
            src: article4,
            title: "بررسی می بند ۸ پرو؛ مچ‌بند در حد ساعت هوشمند"
        },
        {
            id: 3,
            src: article2,
            title: "تجربه‌ی ۵ ماه استفاده از گلکسی S23 اولترا؛ همچنان جذاب؟"
        },
        {
            id: 4,
            src: article3,
            title: "بررسی ادو پرفیوم مردانه نایس پاپت ورساچه اروس؛ حجم ۱۰۰ میلی لیتری با ماندگاری بالا"
        },
    
    
      ];
    return (
        <section className="mx-48 mt-4">
            <div className="flex justify-between">

            <div className="text-base text-common-black text-center mt-4">{Keywords.Readables}</div>
            <div className="flex justify-between items-center">
                <div className="text-base text-tertiary-main text-center mt-4">{Keywords.MoreArticlesInDigikalaMag}</div>
                <SearchIcon/>
            </div>
            </div>
            <div  className="grid grid-cols-4  mt-8">
            {isArray(ArticlesData).map((item, index) => (
                <div className="flex flex-col items-center gap-2 justify-center border border-gray-30 h-fit relative w-[323px] rounded-lg">
                    <Image src={item.src} fill alt={item.title} className="!relative rounded-t-lg min-h-[200px]"/>
                    <div  className="relative bottom-0 p-4 text-xs text-gray-90 h-16">{item.title}</div>
                </div>

            ))}
        </div>
        </section>
  );
}

export default Articles;