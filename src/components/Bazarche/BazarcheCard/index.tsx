import Image from "next/image";
import { BazarcheCardType } from "../Type";

function BazarcheCard({bazarcheCard}: BazarcheCardType) {
    return (
        <Image src={bazarcheCard.src} width={300} height={100} alt="" style={{ 'borderRadius': '15px'}}/>
  );
}

export default BazarcheCard;