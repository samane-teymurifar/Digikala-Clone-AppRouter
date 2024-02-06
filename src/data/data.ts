import someJson from '@src/data/HomeData/content';
import article1 from '../assets/images/article1.jpg';
import article2 from '../assets/images/article2.jpg';
import article3 from '../assets/images/article3.jpg';
import article4 from '../assets/images/article4.jpg';
export type AdsDataType = {
  id: string;
  src: string;
  title: string;
  alt: string;
};

const AdsData: AdsDataType[] = [
  {
    id: '1',
    src: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/792b26d05b1af23cc09a37969d8739caae938b01_1704715052.gif?x-oss-process=image?x-oss-process=image/format,webp',
    title: 'پارتنرشیپ-سیف',
    alt: 'پارتنرشیپ-سیف',
  },
  {
    id: '2',
    src: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/2a36a2a56a08554e6b13e70edbfa2d349cdefc8f_1705140698.jpg?x-oss-process=image/quality,q_95/format,webp',
    title: 'پارتنرشیپ-اکتیو',
    alt: 'پارتنرشیپ-اکتیو',
  },
];

const SecondAdsData: AdsDataType[] = [
  {
    id: '1',
    src: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/2868645aeeea88e39faef0ee16ce1e47e15ebada_1705238744.jpg?x-oss-process=image/quality,q_95/format,webp',
    title: 'پارتنرشیپ-چرم مشهد',
    alt: 'پارتنرشیپ-چرم مشهد',
  },
  {
    id: '2',
    src: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/bf92fba2b245d680aad7ab89659e4a1293c559f4_1704974447.jpg?x-oss-process=image/quality,q_95/format,webp',
    title: 'پارتنرشیپ-فیروز',
    alt: 'پارتنرشیپ-فیروز',
  },
];

const FirstSection = someJson.result.home_1.products;
const SecondSection = someJson.result.home_2.products;
const ThirdSection = someJson.result.home_3.products;
const FourthSection = someJson.result.home_4.products;

const RandomCategoriesData = [
  {title: someJson.result.home_1.title, products: FirstSection},
  {title: someJson.result.home_2.title, products: SecondSection},
  {title: someJson.result.home_3.title, products: ThirdSection},
  {title: someJson.result.home_4.title, products: FourthSection},
];

const SecondRandomCategoriesDataFirstSection = someJson.result.home_5.products;
const SecondRandomCategoriesDataSecondSection = someJson.result.home_6.products;
const SecondRandomCategoriesDataThirdSection = someJson.result.home_7.products;
const SecondRandomCategoriesDataFourthSection = someJson.result.home_8.products;

const SecondRandomCategoriesData = [
  {
    title: someJson.result.home_5.title,
    products: SecondRandomCategoriesDataFirstSection,
  },
  {
    title: someJson.result.home_6.title,
    products: SecondRandomCategoriesDataSecondSection,
  },
  {
    title: someJson.result.home_7.title,
    products: SecondRandomCategoriesDataThirdSection,
  },
  {
    title: someJson.result.home_8.title,
    products: SecondRandomCategoriesDataFourthSection,
  },
];

const ResultHome1Products = someJson.result.home_1.products;
const BestSellerData = ResultHome1Products.concat(ResultHome1Products).slice(
  0,
  12,
);
const BestSellerDataTitle = someJson.result.home_1.title;

const Terending = someJson.result.trending.products;
const TerendingData = Terending.concat(Terending).slice(0, 12);
const TerendingDataTitle = someJson.result.trending.title;

const ArticlesData = [
  {
    id: 1,
    src: article1,
    title: 'بررسی کرم ضد آفتاب بی رنگ برایت مکس؛ آبرسان با  SPF 50',
  },
  {
    id: 2,
    src: article4,
    title: 'بررسی می بند ۸ پرو؛ مچ‌بند در حد ساعت هوشمند',
  },
  {
    id: 3,
    src: article2,
    title: 'تجربه‌ی ۵ ماه استفاده از گلکسی S23 اولترا؛ همچنان جذاب؟',
  },
  {
    id: 4,
    src: article3,
    title:
      'بررسی ادو پرفیوم مردانه نایس پاپت ورساچه اروس؛ حجم ۱۰۰ میلی لیتری با ماندگاری بالا',
  },
];

export {
  AdsData,
  SecondAdsData,
  RandomCategoriesData,
  SecondRandomCategoriesData,
  BestSellerData,
  BestSellerDataTitle,
  TerendingData,
  TerendingDataTitle,
  ArticlesData,
};
