import { getData } from "./Data/data";
import StoryItem from "./StoryItem";
import { HomeTrendingDataType } from "@utiles/types/homeTrending";
import { isArray } from "@src/utiles/helper/isArray";

async function TopStories() {
    const response = await getData();
    const TopStoriesData = (response?.result?.trending)?.products.slice(0,8)
 
    return (
    <section className="w-full bg-common-white py-4 flex justify-center my-6 gap-[50px]">
      {isArray(TopStoriesData).map((item:HomeTrendingDataType) => {
        return (
          <StoryItem key={item.id} item={item} TopStoriesData={TopStoriesData}/>
        );
      })}
    </section>
  );
}

export default TopStories;