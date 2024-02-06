'use client';
import {Keywords} from '@src/constants/keyword';
import someJson from '../../data/HomeData/content';
import {isArray} from '@src/utiles/helper/isArray';
import Image from 'next/image';
function DigikalaOffer() {
  const DigikalaOfferData = someJson.result.home_8.products;
  const NumberedDigikalaOfferData = DigikalaOfferData.slice(0, 7).concat(
    DigikalaOfferData.slice(0, 7),
  );

  return (
    <section className="mt-6 mx-48">
      <div className="text-lg text-common-black text-center">
        {Keywords.digikalaOffer}
      </div>
      <div className="grid grid-cols-7 mt-6 border border-gray-10 rounded-2xl">
        {isArray(NumberedDigikalaOfferData).map(
          (DigikalaOfferCard: any, index) => {
            return (
              <div
                className={`flex flex-col items-center ${
                  index !== 6 && 'border-l'
                } ${index <= 6 && 'border-b'}  border-gray-10 py-6`}>
                <Image
                  src={DigikalaOfferCard.images.main}
                  alt={DigikalaOfferCard.title_fa}
                  width={60}
                  height={60}
                  key={`${index}-DigikalaOfferCard`}
                />
                <span className="text-sm text-common-black text-ellipsis w-20 overflow-hidden whitespace-nowrap block">
                  {DigikalaOfferCard.title_fa}
                </span>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}

export default DigikalaOffer;
