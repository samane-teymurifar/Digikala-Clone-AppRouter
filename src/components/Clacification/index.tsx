// import { getData } from "./Data/data";
// import StoryItem from "./StoryItem";
import { HomeTrendingDataType } from "@utiles/types/homeTrending";
import { isArray } from "@src/utiles/helper/isArray";
import { Keyboard } from "swiper/modules";
import { Keywords } from "@src/constants/keyword";

async function Clacification() {
    // const response = await getData();
    // const TopStoriesData = (response?.result?.trending)?.products.slice(0,8)
    
    return (
    <section className="w-full bg-common-white py-6 flex justify-center my-6 gap-[50px]">
        <span className="text-lg text-common-black">
        {Keywords.buyBaseOnClasification}

        </span>
    </section>
  );
}

export default Clacification;