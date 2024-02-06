import BazarcheCards from '@src/components/Bazarche';
import AdsComponent from '@src/components/AdsComponent';
import BottomStories from '@src/components/BottomStory';
import Clacification from '@src/components/Clacification';
import DigikalaOffer from '@src/components/DigikalaOffer';
import PopularBrands from '@src/components/PopularBrands';
import SurprisingSupermarket from '@src/components/SupermarketSurprising';
import SurprisingOffer from '@src/components/SurprisingOffer';
import SwiperComponent from '@src/components/SwiperBanner';
// import TopStories from '@src/components/TopStory';
import {AdsData} from '@src/data/data';
import {SecondAdsData} from '@src/data/data';
import {RandomCategoriesData} from '@src/data/data';
import {SecondRandomCategoriesData} from '@src/data/data';
import {BestSellerData, BestSellerDataTitle} from '@src/data/data';
import {TerendingData, TerendingDataTitle} from '@src/data/data';
import {ArticlesData} from '@src/data/data';
import RandomCategories from '@src/components/RandomCategories';
import Digiplus from '@src/components/DigiPlus';
import DigiClub from '@src/components/DigiClub';
import TopProducts from '@src/components/TopProducts';
import SellingAndSales from '@src/components/SellingAndSales';
import Articles from '@src/components/Articles';

export default function Home() {
  return (
    <main className="mt-[112px]">
      {/* <TopStories/> */}
      <SwiperComponent />
      <BottomStories />
      <SurprisingOffer />
      <SurprisingSupermarket />
      <BazarcheCards />
      <Clacification />
      <AdsComponent data={AdsData} />
      <DigikalaOffer />
      <PopularBrands />
      <AdsComponent data={SecondAdsData} />
      <RandomCategories data={RandomCategoriesData} />
      <Digiplus />
      <DigiClub />
      <RandomCategories data={SecondRandomCategoriesData} />
      <TopProducts data={BestSellerData} title={BestSellerDataTitle} />
      <SellingAndSales />
      <TopProducts data={TerendingData} title={TerendingDataTitle} />
      <Articles data={ArticlesData} />
    </main>
  );
}
