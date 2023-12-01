import { SVGProps } from 'react';

function SearchIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >  
    <path
      fill="#000"
      fillOpacity={0.5}
      fillRule="evenodd"
      d="M11.647 4.08a7.361 7.361 0 1 0 4.976 12.785l.013-.012a7.342 7.342 0 0 0 2.372-5.411 7.36 7.36 0 0 0-7.361-7.361Zm6.516 13.278a8.77 8.77 0 0 0 2.285-5.917 8.8 8.8 0 0 0-8.801-8.8 8.801 8.801 0 1 0 5.463 15.702l2.815 2.807a.72.72 0 0 0 1.017-1.02l-2.78-2.772Z"
      clipRule="evenodd"
    />
  </svg>
  );
}

export default SearchIcon;
