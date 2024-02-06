import SearchIcon from '@src/assets/icons/SearchIcon';
import {Keywords} from '@src/constants/keyword';
import Image from 'next/image';
import DigiPlus from '@images/plus-widget.png';
import ClacificationJson from '../../data/ClassificationData/classificationData';
import {isArray} from '@src/utiles/helper/isArray';
function Digiplus() {
  const response = ClacificationJson;
  const ClassificationProducts = response?.result?.widgets?.slice(0, 12);
  return (
    <section className="mt-6 mx-48">
      <div className="bg-digiplusColor h-96 rounded-2xl flex">
        <div className="m-4">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2 m-8">
              <Image
                src={
                  'https://www.digikala.com/statics/img/svg/digiplus-logo.svg'
                }
                width={128}
                height={32}
                alt="Digiplus"
              />
              <div className="text-sm text-common-white">
                {Keywords.ForDigiPlusMembers}
              </div>
              <button className="text-sm text-common-white flex border border-common-white rounded-md w-fit py-2 px-3 gap-2">
                <span>{Keywords.Membership}</span>
                <SearchIcon />
              </button>
            </div>

            <Image
              src={DigiPlus}
              alt=""
              width={300}
              height={200}
              className="-mt-4"
            />
          </div>
        </div>
        <div className="bg-common-white flex-grow m-4 rounded-md py-8 px-4">
          <div className="flex justify-between">
            <div className="flex">
              <SearchIcon />
              {Keywords.FreeDelivery}
            </div>
            <div className="flex">
              {Keywords.seeAll}
              <SearchIcon />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-y-2 h-full">
            {isArray(ClassificationProducts).map((Category: any) => {
              return (
                <Image
                  src={Category.data.child[0].top_product_image}
                  width={120}
                  height={100}
                  alt={Category.data.title}
                  className="self-center"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Digiplus;
