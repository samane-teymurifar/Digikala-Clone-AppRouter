import Image from 'next/image';
import {BazarcheCardType} from '../types';

function BazarcheCard({bazarcheCard}: BazarcheCardType) {
  return (
    <Image
      src={bazarcheCard.src}
      width={322}
      height={242}
      alt={bazarcheCard.alt}
      style={{borderRadius: '15px'}}
    />
  );
}

export default BazarcheCard;
