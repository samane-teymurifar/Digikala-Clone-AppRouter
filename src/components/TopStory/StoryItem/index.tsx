
import { HomeTrendingDataType } from "@src/utiles/types/homeTrending";
import Image from "next/image";

function StoryItem( item : HomeTrendingDataType) {
  
  return (
    <span key={item.id} className="flex flex-col items-center border border-secondary-main rounded-full">

        <Image
          src={item?.images?.main}
          width="55"
          height="55"
          alt={item.category_title}
          className="absolut border-secondary-main border-2 rounded-full"
        />
    
      <span className="text-xs font-light">{item.category_title}</span>
    </span>
  );
}

export default StoryItem;