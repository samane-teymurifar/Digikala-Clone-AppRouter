import ClacificationJson from '../../data/ClassificationData/classificationData';
import {isArray} from '@src/utiles/helper/isArray';
import {Keywords} from '@src/constants/keyword';
import {CategoryType} from './types';
import Image from 'next/image';
function Clacification() {
  const response = ClacificationJson;
  const ClassificationProducts = response?.result?.widgets?.slice(0, 13);
  return (
    <section className="w-full bg-common-white py-6 flex flex-col justify-center my-6 gap-[50px]">
      <span className="text-xl text-center text-common-black">
        {Keywords.buyBaseOnClasification}
      </span>
      <section className="flex flex-wrap justify-center mx-48 gap-y-6 gap-x-8">
        {isArray(ClassificationProducts).map((Category: CategoryType) => {
          return (
            <div className="flex gap-y-4 flex-col items-center w-40">
              <Image
                src={Category.data.child[0].top_product_image}
                width={100}
                height={100}
                alt={Category.data.title}
              />
              <span className="text-common-black text-xs">
                {Category.data.title}
              </span>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default Clacification;
