import BazarcheCards from "@src/components/Bazarche";
import BottomAds from "@src/components/BottomAds";
import BottomStories from "@src/components/BottomStory";
import Clacification from "@src/components/Clacification";
import DigikalaOffer from "@src/components/DigikalaOffer";
import PopularBBrands from "@src/components/PopularBrands";
import SurprisingSupermarket from "@src/components/SupermarketSurprising";
import SurprisingOffer from "@src/components/SurprisingOffer";
import SwiperComponent from "@src/components/SwiperBanner";
import TopStories from "@src/components/TopStory";
import AdsData from "@src/components/BottomAds/Data/index"
import AdsData2 from "@src/components/Ads3/Data/index";
import ComputerAccessories from "@src/components/ComputerComponent";
import Digiplus from "@src/components/DigiPlus";
import DigiClub from "@src/components/DigiClub";

export default function Home() {
  return (
    <main>
      {/* <TopStories/> */}
      {/* <SwiperComponent/> */}
      {/* <BottomStories/> */}
      {/* <SurprisingOffer/> */}
      {/* <SurprisingSupermarket/> */}
      {/* <BazarcheCards/> */}
      {/* <Clacification/> */}
      {/* <BottomAds data={AdsData}/> */}
      {/* <DigikalaOffer/> */}
      {/* <PopularBBrands/> */}
      <BottomAds data={AdsData2}/>
      <ComputerAccessories/>
      <Digiplus/>
      <DigiClub/>
    </main>
  )
}
