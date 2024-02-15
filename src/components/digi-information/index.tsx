import {Keywords} from '@src/constants/keyword';
import kasbokar from '@images/kasbokar.webp';
import rezi from '@images/rezi.webp';
import Image from 'next/image';

function DigikalaInformation() {
  return (
    <section className="mt-6 flex mx-24 border-t border-gray-30">
      <div>
        <div>{Keywords.DigikalaDescription}</div>
        <p>
          یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
          باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود
          برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه
          اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این
          طریق مشتریان ثابت خود را داشته باشد.
        </p>
      </div>
      <div className="flex gap-4">
        <Image src={kasbokar} width={150} height={100} alt="" />
        <Image src={rezi} width={150} height={100} alt="" />
      </div>
    </section>
  );
}

export default DigikalaInformation;
