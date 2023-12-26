'use client'
import CubeSwiperComponent from "@src/components/CubeSwiper";
import { HomeTrendingDataType } from "@src/utiles/types/homeTrending";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

function StoryItem( {item,TopStoriesData}:{item : HomeTrendingDataType, TopStoriesData: any}) {
  const Item = item;
  const [viewStory, setViewStory] = useState(false);
  const HandleViewStoryItem = () => {
    setViewStory(true);
  }

  return (
    <>
      <div key={Item.id} className="flex flex-col items-center" onClick={HandleViewStoryItem}>
          <Image
            src={Item?.images?.main && Item?.images?.main}
            width="80"
            height="80"
            alt={Item.category_title}
            className={`${viewStory ? `border-secondary-main` :`border-primary-main` }  rounded-full border-[3px]`}
          />
          <div className="text-xs font-light mt-2 w-32 text-center text-gray-60">{Item.category_title}</div>
    </div>
    {viewStory && createPortal(<CubeSwiperComponent Slides={TopStoriesData}/>,document.body)}
    </>
  );
}

export default StoryItem;