import DiscountIcon from '@src/assets/icons/DiscountIcon';
import GiftCardIcon from '@src/assets/icons/GiftCard';
import SupermarketIcon from '@src/assets/icons/Supermarket';
import SurprisingIcon from '@src/assets/icons/Surprising';
import TopSalesIcon from '@src/assets/icons/TopSalesIcon';

type HeaderInfoType = {
  FaTitle: string;
  EnTitle: string;
  Icon: any;
};

export const HeaderInfo: HeaderInfoType[] = [
  {
    FaTitle: 'شگفت انگیز ها',
    EnTitle: 'surprisingProducts',
    Icon: <SurprisingIcon className="fill-secondaryTint-60" />,
  },
  {
    FaTitle: 'سوپرمارکت',
    EnTitle: 'supermarket',
    Icon: <SupermarketIcon className="fill-secondaryTint-60" />,
  },
  {
    FaTitle: 'کارت هدیه',
    EnTitle: 'giftCard',
    Icon: <GiftCardIcon className="fill-secondaryTint-60" />,
  },
  {
    FaTitle: 'پرفروش ترین ها',
    EnTitle: 'topSales',
    Icon: <TopSalesIcon className="fill-secondaryTint-60" />,
  },
  {
    FaTitle: 'تخفیف ها و پیشنهاد ها',
    EnTitle: 'تخفیف ها و پیشنهاد ها',
    Icon: <DiscountIcon className="fill-secondaryTint-60" />,
  },
];
