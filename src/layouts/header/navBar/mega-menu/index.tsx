'use client';
import React from 'react';
import MegaMenuButton from './mega-menu-button';
import {isArray} from '@src/utiles/helper/isArray';
import Link from 'next/link';
import {someJson} from '../../data-json';

async function MegaMenu({clasificationList}: any) {
  const clasificationListSecond = someJson.result.widgets;
  console.log(clasificationListSecond);

  return (
    <>
      <MegaMenuButton />
      <div
        className="bg-common-white h-auto z-20 border absolute mt-[3000px] w-fit"
        id="mega-menue">
        <div>
          {isArray(clasificationListSecond)
            .slice(0, 12)
            .map(cluster => (
              <div className='flex'>
                <div className="flex items-center w-[25%]">
                  <Link
                    href={''}
                    className="text-sm block text-gray-70 py-3 px-2">
                    {cluster.data.title}
                  </Link>
                </div>
                <div className='border w-[75%]'>
                  {cluster?.data?.child?.map((item: any) => {
                    return <div className='text-gray-90'>{item?.title_fa}</div>;
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MegaMenu;
