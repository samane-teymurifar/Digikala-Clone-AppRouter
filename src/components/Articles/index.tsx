import SearchIcon from "@src/assets/icons/SearchIcon";
import { Keywords } from "@src/constants/keyword";
import { isArray } from "@src/utiles/helper/isArray";
import Image from "next/image";
import ArticlesData from "./Data/index";
function Articles() {

    return (
        <section className="mx-48 mt-4">
            <div className="flex justify-between">

            <div className="text-base text-common-black text-center mt-4">{Keywords.Readables}</div>
            <div className="flex justify-between items-center">
                <div className="text-base text-tertiary-main text-center mt-4">{Keywords.MoreArticlesInDigikalaMag}</div>
                <SearchIcon/>
            </div>
            </div>
            <div  className="grid grid-cols-4 gap-6 m-4 mt-8">
            {isArray(ArticlesData).map((item, index) => (
                <div className="flex items-center gap-2 justify-center">
                    <Image src={item.src} width={86} height={86} alt={item.title}/>
                    <div  className="">{item.title}</div>
                </div>

            ))}
        </div>
        </section>
  );
}

export default Articles;