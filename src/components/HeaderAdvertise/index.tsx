import Image from 'next/image';

function HeaderAdvertise() {
  return (
    <Image
      width={100}
      height={60}
      className="w-full fixed h-[60px] z-20"
      alt=""
      src={
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/58fb25ef5ef526b9c362c81a839dd931eafb6a46_1707298697.gif?x-oss-process=image?x-oss-process=image/format,webp'
      }
    />
  );
}

export default HeaderAdvertise;
