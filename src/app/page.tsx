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
import someJson from "@src/data/HomeData/content";
import BestSelleProducts from "@src/components/BestSellingProducts";
import SellingAndSales from "@src/components/SellingAndSales";

export default function Home() {

  const ComputerAccessoriesMobilePhone = someJson.result.home_1.products
  const ComputerAccessoriesCellPhonePouchCover = someJson.result.home_2.products
  const ComputerAccessoriesHeadphone = someJson.result.home_3.products
  const ComputerAccessoriesSmartWatch = someJson.result.home_4.products

  const SuitableData = [ 
      {title: someJson.result.home_1.title , products: ComputerAccessoriesMobilePhone},
      {title: someJson.result.home_2.title , products: ComputerAccessoriesCellPhonePouchCover},
      {title: someJson.result.home_3.title , products: ComputerAccessoriesHeadphone}, 
      {title: someJson.result.home_4.title , products: ComputerAccessoriesSmartWatch}, 
  ]


  const notebookNetbookUltrabook = someJson.result.home_5.products
  const inCarAccessories = someJson.result.home_6.products
  const medicalSupplement = someJson.result.home_7.products
  const speaker = someJson.result.home_8.products

  const SuitableData2 = [ 
      {title: someJson.result.home_5.title , products: notebookNetbookUltrabook},
      {title: someJson.result.home_6.title , products: inCarAccessories},
      {title: someJson.result.home_7.title , products: medicalSupplement}, 
      {title: someJson.result.home_8.title , products: speaker}, 
  ]
  
  return (
    <main>
      {/* <TopStories/>
      <SwiperComponent/>
      <BottomStories/>
      <SurprisingOffer/>
      <SurprisingSupermarket/>
      <BazarcheCards/>
      <Clacification/>
      <BottomAds data={AdsData}/>
      <DigikalaOffer/>
      <PopularBBrands/>
      <BottomAds data={AdsData2}/>
      <ComputerAccessories SuitableData={SuitableData}/>
      <Digiplus/>
      <DigiClub/>
      <ComputerAccessories SuitableData={SuitableData2}/>
      <BestSelleProducts/> */}
      <SellingAndSales/>

    </main>
  )
}
