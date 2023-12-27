'use client';

import Image from "next/image";

type Properties = {
item:{
       src: string;
    title: string; 
}

 
};
function BotomStoryItem({item} : Properties) {
console.log("item", item);

  return (
    <div className="flex flex-col justify-center items-center">
        <Image src={item.src} width={24} height={24} alt={item.title}/>
        <p>{item.title}</p>
    </div>
  );
}

export default BotomStoryItem;