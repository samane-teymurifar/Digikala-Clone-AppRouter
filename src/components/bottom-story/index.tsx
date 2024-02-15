import BottomStoryData from './data';
import BotomStoryItem from './bottom-story-Item/index';
import {isArray} from '@src/utiles/helper/isArray';

function BottomStories() {
  type BottomStoriesItemType = {
    src: string;
    title: string;
  };
  return (
    <section className="px-96">
      <div className="w-full bg-common-white py-4 flex justify-between my-6 gap-[50px]">
        {isArray(BottomStoryData).map((item: BottomStoriesItemType) => {
          return <BotomStoryItem key={item.src} item={item} />;
        })}
      </div>
    </section>
  );
}

export default BottomStories;
