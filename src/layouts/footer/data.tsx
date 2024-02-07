import InstagramIcon from '@src/assets/icons/Instagram';
import LinkdinIcon from '@src/assets/icons/Linkdin';
import TwitterIcon from '@src/assets/icons/Twitter';

type footerDataType = {
  src: string;
  id: number;
  title: string;
};

const FooterTopSectionData: footerDataType[] = [
  {
    id: 1,
    src: 'https://www.digikala.com/statics/img/svg/footer/express-delivery.svg',
    title: 'اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس',
  },
  {
    id: 2,
    src: 'https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg',
    title: 'امکان پرداخت در محل',
  },
  {
    id: 3,
    src: 'https://www.digikala.com/statics/img/svg/footer/support.svg',
    title: '۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ',
  },
  {
    id: 4,
    src: 'https://www.digikala.com/statics/img/svg/footer/days-return.svg',
    title: 'هفت روز ضمانت بازگشت کالا',
  },
  {
    id: 5,
    src: 'https://www.digikala.com/statics/img/svg/footer/original-products.svg',
    title: 'ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ',
  },
];
export default FooterTopSectionData;

export const FooterInfo = [
  {
    id: 0,
    CatTitle: 'با دیجی‌کالا',
    text: [
      {
        id: 0,
        title: 'اتاق خبر دیجی‌کالا',
      },
      {
        id: 1,
        title: 'فروش در دیجی‌کالا',
      },
      {
        id: 2,
        title: 'فرصت‌های شغلی',
      },
      {
        id: 3,
        title: 'گزارش تخلف در دیجی‌کالا',
      },
      {
        id: 4,
        title: 'تماس با دیجی‌کالا',
      },
      {
        id: 5,
        title: 'درباره دیجی‌کالا',
      },
    ],
  },
  {
    id: 1,
    CatTitle: 'خدمات مشتریان',
    text: [
      {
        id: 0,
        title: 'پاسخ به پرسش‌های متداول',
      },
      {
        id: 1,
        title: 'رویه‌های بازگرداندن کالا',
      },
      {
        id: 2,
        title: 'شرایط استفاده',
      },
      {
        id: 3,
        title: 'حریم خصوصی',
      },
      {
        id: 4,
        title: 'گزارش باگ',
      },
    ],
  },
  {
    id: 1,
    CatTitle: 'راهنمای خرید از دیجی‌کالا',
    text: [
      {
        id: 0,
        title: 'نحوه ثبت سفارش',
      },
      {
        id: 1,
        title: 'رویه ارسال سفارش',
      },
      {
        id: 2,
        title: 'شیوه‌های پرداخت',
      },
    ],
  },
];

export const SocialMedia = [
  {
    id: 0,
    icon: <InstagramIcon className="fill-secondaryTint-50" />,
  },
  {
    id: 1,
    icon: <TwitterIcon className="fill-secondaryTint-50" />,
  },
  {
    id: 2,
    icon: <LinkdinIcon className="fill-secondaryTint-50" />,
  },
];
