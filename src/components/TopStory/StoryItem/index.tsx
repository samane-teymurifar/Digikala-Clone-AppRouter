
import Image from "next/image";
type Properties = {
  item: {
    category_title: string;
    id: string;
    images: {
      main: string
    };
  };
};
function StoryItem({ item }: Properties) {
  console.log(item?.images.main);
  
  return (
    <span key={item.id} className="flex flex-col items-center">

        <Image
          src={item.images.main}
          width="55"
          height="55"
          alt={item.category_title}
          className="absolute border rounded-full"
        />
    

      <span className="text-xs font-light">{item.category_title}</span>
    </span>
  );
}

export default StoryItem;