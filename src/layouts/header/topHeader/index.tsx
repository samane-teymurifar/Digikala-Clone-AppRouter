import SearchIcon from "@src/assets/icons/SearchIcon";
import { Keywords } from "@src/constants/keyword";
import Image from "next/image";



function TopHeader() {
  return (
    <div className="mx-[99px] flex py-3">
    <div className="flex-grow flex gap-5">
      <Image
        width={115}
        height={30}
        src="https://www.digikala.com/statics/img/svg/logo.svg"
        alt={Keywords.DigikalaLogo}
      />
      <form className="flex ml-96 h-11">
        <div className="bg-secondaryTint-20 pl-4 pr-4 rounded-tr-md rounded-br-md flex content-center items-center">
          <SearchIcon viewBox="0 0 24 24" width="24px" height="24px" />
        </div>
        <input
          placeholder={Keywords.searchPlaceholder}
          className="py-1 rounded-bl-md rounded-tl-md text-xs bg-secondaryTint-20 w-[555px] outline-none"
        ></input>
      </form>
    </div>
    <div className="flex gap-1 items-center">
      <button className="border border-gray-10 border-e-[1px] rounded-lg flex items-center gap-1 px-4 py-2">
        <div>
          <SearchIcon />
        </div>
        <span className="text-xs">{Keywords.login}</span>
        <span>|</span>
        <span className="text-xs">{Keywords.sigUp}</span>
      </button>
      <span className="h-5 w-[1px] bg-gray-10 mx-3" />
      <SearchIcon />
    </div>
  </div>
  );
}

export default TopHeader;