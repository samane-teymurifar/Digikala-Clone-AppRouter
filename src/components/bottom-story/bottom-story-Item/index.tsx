import Image from 'next/image';

type Properties = {
  item: {
    src: string;
    title: string;
  };
};
function BotomStoryItem({item}: Properties) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image src={item.src} width={52} height={52} alt={item.title} />
      <p className="text-xs">{item.title}</p>
    </div>
  );
}

export default BotomStoryItem;
