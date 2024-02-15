import {isArray} from '@src/utiles/helper/isArray';
import Image from 'next/image';
function BottomAds({data}: any) {
  return (
    <div className="grid grid-cols-2 gap-3  mx-48 mt-4">
      {isArray(data).map((BottomAdsCard: any, index) => {
        return (
          <Image
            src={BottomAdsCard.src}
            alt={BottomAdsCard.alt}
            width={700}
            height={200}
            className="rounded-2xl"
            key={`${index}-BottomAdsCard`}
          />
        );
      })}
    </div>
  );
}

export default BottomAds;
