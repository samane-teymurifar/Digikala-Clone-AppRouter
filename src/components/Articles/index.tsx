import SearchIcon from '@src/assets/icons/SearchIcon';
import {Keywords} from '@src/constants/keyword';
import {isArray} from '@src/utiles/helper/isArray';
import Image from 'next/image';

function Articles({data}: any) {
  return (
    <section className="mx-48 mt-4">
      <div className="flex justify-between">
        <div className="text-base text-common-black text-center mt-4">
          {Keywords.Readables}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-base text-tertiary-main text-center mt-4">
            {Keywords.MoreArticlesInDigikalaMag}
          </div>
          <SearchIcon />
        </div>
      </div>
      <div className="grid grid-cols-4  mt-8">
        {isArray(data).map((item, index) => (
          <div className="flex flex-col items-center gap-2 justify-center border border-gray-30 h-fit relative w-[323px] rounded-lg">
            <Image
              src={item.src}
              fill
              alt={item.title}
              className="!relative rounded-t-lg min-h-[200px]"
            />
            <div className="relative bottom-0 p-4 text-xs text-gray-90 h-16">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
