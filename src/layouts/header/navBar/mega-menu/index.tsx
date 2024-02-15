import React from 'react';
import MegaMenuButton from './mega-menu-button';
import getData from './data';
import {isArray} from '@src/utiles/helper/isArray';
import Link from 'next/link';

async function MegaMenu() {
  const data = await getData();
  const clasificationList = data?.result?.widgets;
  console.log("clasificationList",clasificationList);
  
  return (
    <>
      <MegaMenuButton />
      <div
        className="bg-common-white h-auto z-20 border absolute mt-96 w-fit"
        id="mega-menue">
        <div>
          {isArray(clasificationList).map(cluster => (
            <div className="flex items-center">
              {cluster.data.icon}
              <Link href={''} className="text-sm block text-gray-70 py-3 px-2">
                {cluster.data.title}
              </Link>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default MegaMenu;
