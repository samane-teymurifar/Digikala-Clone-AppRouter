import  BottomStoryData  from "./Data/data";
import BotomStoryItem from "./BottomStoryItem/index";
import { isArray } from "@src/utiles/helper/isArray";

 function BottomStories() {

 type BottomStoriesItemType = {
    src: string;
    title: string;
 }
    return (
    <section className="w-full bg-common-white py-4 flex justify-center my-6 gap-[50px]">
      {isArray(BottomStoryData).map((item:BottomStoriesItemType) => {
        return (
          <BotomStoryItem key={item.src} item={item}/>
        );
      })}
    </section>
  );
}

export default BottomStories;