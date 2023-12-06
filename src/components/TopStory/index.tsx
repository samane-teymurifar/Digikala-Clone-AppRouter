import { getData } from "./Data/data";
import StoryItem from "./StoryItem";
import { HomeTrendingDataType } from "@utiles/types/homeTrending";
import { isArray } from "@src/utiles/helper/isArray";
async function TopStories() {
    const response = await getData();
    const TopStoriesData = response?.result.trending

    return (
    <section className="w-full bg-common-white py-4" style={{display: "flex", justifyContent: "center", marginTop:"24px",marginBottom: "24px", gap:"50px"}}>
      {isArray(TopStoriesData.products.slice(0,8)).map((item:HomeTrendingDataType) => {
        return (
          <StoryItem key={item.id} item={item}/>
      
        );
      })}
    </section>
  );
}

export default TopStories;