'use client';
import MenuIcon from '@src/assets/icons/MenuIcon';
import {Keywords} from '@src/constants/keyword';
import React from 'react';

function MegaMenuButton() {
  const openMegaMenue = () => {
    document.getElementById('mega-menue')?.classList.remove('hidden');
  };
  const closeMegaMenue = () => {
    document.getElementById('mega-menue')?.classList.add('hidden');
  };

  return (
    <>
      <div
        className="cursor-pointer flex items-center"
        onMouseEnter={openMegaMenue}
        onMouseOut={closeMegaMenue}>
        <span className="ml-2">
          <MenuIcon className="fill-secondaryTint-80" />
        </span>
        <span className="pl-2 text-sm text-gray-90">
          {Keywords.productsClassification}
        </span>
      </div>
    </>
  );
}

export default MegaMenuButton;
