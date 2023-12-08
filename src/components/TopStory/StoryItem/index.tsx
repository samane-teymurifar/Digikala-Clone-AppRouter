import { HomeTrendingDataType } from "@src/utiles/types/homeTrending";
import Image from "next/image";

function StoryItem( item : HomeTrendingDataType) {
  const Item = item.item;
  return (
    <span key={Item.id} className="flex flex-col items-center border border-secondary-main m-3">

        <Image
          src={Item?.images?.main && Item?.images?.main}
          width="55"
          height="55"
          alt={Item.category_title}
          className="absolute"
        />
    
      <span className="text-xs font-light">{Item.category_title}</span>
    </span>
  );
}

export default StoryItem;