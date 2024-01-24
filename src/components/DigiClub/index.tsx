import Image from "next/image";
import { isArray } from "@src/utiles/helper/isArray";
import missions from "../../assets/images/missions.webp";
import awards from "../../assets/images/awards.webp";
import wheelSpinner from "../../assets/images/wheel-spinner.webp";
function DigiClub() {

    const DigiClubDataArray = [        {
            id: 3,
            src: wheelSpinner,
            title: "",
        },
        {
            id: 1,
            src: missions,
            title: "",
        },
        {
            id: 2,
            src: awards,
            title: "",
        },

    ]
    return (
        <section className="mt-6 mx-48">
            <div className="bg-gradient-to-bl from-tertiaryTint-90 to-tertiaryTint-40 h-24 rounded-2xl p-4 flex">
                <Image src={'https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg'} width={119} height={33} alt="DigiClub"/>
                {isArray(DigiClubDataArray).map((clubImage:any) => {
                        return (
                        
                        <Image src={clubImage.src} width={168} height={60} alt={clubImage.src}/>
    
                       
                        );
                    })}
            </div>
        </section>
  );
}

export default DigiClub;