import Image from 'next/image';
import {SupermarketSurprisingDataType} from '../types';
function SurprisingSupermarketCard({cardData}: SupermarketSurprisingDataType) {
  return (
    <div className="relative">
      <Image
        src={cardData.src}
        alt={cardData.title}
        width={72}
        height={72}
        style={{borderRadius: '100%'}}
      />
      <div className="text-xs bg-primary-light rounded-3xl w-9 h-5 text-center text-common-white flex items-center justify-center absolute bottom-0 right-0">
        {cardData.discount}%
      </div>
    </div>
  );
}

export default SurprisingSupermarketCard;
