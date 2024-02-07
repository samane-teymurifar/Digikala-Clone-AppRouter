import Image from 'next/image';
import {isArray} from '@src/utiles/helper/isArray';
import SearchIcon from '@src/assets/icons/SearchIcon';
import {DigiClubData} from './data';
import {Keywords} from '@src/constants/keyword';
function DigiClub() {
  const DigiClubDataArray = DigiClubData;

  return (
    <section className="mt-6 mx-48">
      <div className="bg-gradient-to-bl from-tertiaryTint-90 to-tertiaryTint-40 h-fit rounded-2xl p-4 flex justify-between">
        <Image
          src={
            'https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg'
          }
          width={119}
          height={33}
          alt="DigiClub"
        />
        <div className="flex gap-1">
          <div className="flex items-center gap-2">
            <span>{Keywords.YourPoint}</span>
            <Image
              src={'https://www.digikala.com/statics/img/svg/club-point.svg'}
              width={24}
              height={24}
              alt="coin"
            />
          </div>
          {isArray(DigiClubDataArray).map((clubImage: any, index) => {
            return (
              <div
                className={`flex flex-row h-fit justify-center items-center bg-common-white ${
                  index === 0 && 'rounded-tr-lg rounded-br-lg'
                  } ${index === 2 && 'rounded-tl-lg rounded-bl-lg'}`}
                key={`DigiClubDataArray-Item-${index}`}
              >
                <div
                  className={`bg-common-white  h-[85px] flex items-center pl-2 pr-4 ${
                    index === 0 && 'rounded-tr-lg rounded-br-lg'
                  } ${index === 2 && 'rounded-tl-lg rounded-bl-lg'}`}>
                  <SearchIcon />
                </div>
                <div className="text-sm bg-common-white h-[85px] text-center flex items-center">
                  {clubImage.title}
                </div>
                <Image
                  src={clubImage.src}
                  width={168}
                  height={60}
                  alt={clubImage.src}
                  className="p-1"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DigiClub;
