import { getData } from "./Data/data";
import StoryItem from "./StoryItem";
async function TopStories() {
    const response = await getData();
    const TopStoriesData = response?.result.trending

    return (
    <section className="w-full bg-common-white py-4">
      {TopStoriesData.products.slice(0,8).map((item) => {
        return (
          <StoryItem key={item.id} item={item}/>
      
        );
      })}
    </section>
  );
}

export default TopStories;