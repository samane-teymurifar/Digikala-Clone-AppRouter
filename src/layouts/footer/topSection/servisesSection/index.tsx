import {isArray} from '@src/utiles/helper/isArray';
import Image from 'next/image';
import FooterTopSectionData from '../../data';

function ServisesSection() {
  return (
    <div className="flex justify-between mt-8">
      {isArray(FooterTopSectionData).map((item, key) => (
        <div className="flex flex-col justify-center items-center gap-2" key={`ServisesSection-Item-${key}`}>
          <Image src={item.src} width={50} height={50} alt={item.title} />
          <p className="text-xs text-gray-60">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ServisesSection;
