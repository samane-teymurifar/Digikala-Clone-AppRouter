import { Keywords } from "@src/constants/keyword";
import someJson from "../../data/HomeData/content";
function DigikalaOffer() {
    const DigikalaOfferData = someJson.result.home_8
    console.log("DigikalaOfferData", DigikalaOfferData);
    
    return (
    <section className="mt-6">
        <div className="text-lg text-common-black text-center">
            {Keywords.digikalaOffer}
        </div>
    </section>
  );
}

export default DigikalaOffer;