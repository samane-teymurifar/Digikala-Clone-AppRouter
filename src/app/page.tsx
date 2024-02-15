import BazarcheCards from '@src/components/bazarche';
import AdsComponent from '@src/components/ads-component';
import BottomStories from '@src/components/bottom-story';
import Clacification from '@src/components/clacification';
import DigikalaOffer from '@src/components/digikala-offer';
import PopularBrands from '@src/components/popular-brands';
import SurprisingSupermarket from '@src/components/supermarket-surprising';
import SurprisingOffer from '@src/components/surprising-offer';
import SwiperComponent from '@src/components/swiper-banner';
import TopStories from '@src/components/top-story';
import {AdsData} from '@src/data/data';
import {SecondAdsData} from '@src/data/data';
import {RandomCategoriesData} from '@src/data/data';
import {SecondRandomCategoriesData} from '@src/data/data';
import {BestSellerData, BestSellerDataTitle} from '@src/data/data';
import {TerendingData, TerendingDataTitle} from '@src/data/data';
import {ArticlesData} from '@src/data/data';
import RandomCategories from '@src/components/random-categories';
import Digiplus from '@src/components/digiPlus';
import DigiClub from '@src/components/digiclub';
import TopProducts from '@src/components/top-products';
import SellingAndSales from '@src/components/selling-and-sales';
import Articles from '@src/components/articles';

export default function Home() {
  return (
    <main className="mt-[112px]">
      <TopStories />
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
