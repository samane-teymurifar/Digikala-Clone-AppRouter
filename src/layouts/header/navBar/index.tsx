import SearchIcon from '@icons/SearchIcon';
import {Keywords} from '@constants/keyword';
import {HeaderInfo} from '../data';
import {isArray} from '@src/utiles/helper/isArray';
import LocationIcon from '@src/assets/icons/LocationIcon';
import MenuIcon from '@src/assets/icons/MenuIcon';

function NavBar() {
  return (
    <div className="flex mx-[99px] items-center justify-between  mt-3">
      <span className="flex items-center">
        <span className="ml-2">
          <MenuIcon className="fill-secondaryTint-80" />
        </span>
        <span className="pl-2 text-sm text-gray-90">
          {Keywords.productsClassification}
        </span>
        <span className="h-5 w-[1px] bg-gray-10 mx-3" />
        <nav className="flex gap-6">
          {isArray(HeaderInfo).map((item, key) => (
            <div key={`Header-Item-${key}`} className="flex gap-2 items-center">
              <span>{item.Icon}</span>
              <span className="text-gray-50 text-xs">{item.FaTitle}</span>
            </div>
          ))}
        </nav>
        <span className="h-5 w-[1px] bg-gray-10 mx-3" />
        <span className="text-gray-50 text-sm ml-2">
          {Keywords.haveQuestion}
        </span>
        <span className="text-gray-50 text-sm">{Keywords.saleAtDigikala}</span>
      </span>

      <span className="flex gap-4 items-center">
        <LocationIcon className="fill-secondaryTint-80" />

        <span className="text-sm text-gray-50">{Keywords.chooseLocation}</span>
      </span>
    </div>
  );
}

export default NavBar;
