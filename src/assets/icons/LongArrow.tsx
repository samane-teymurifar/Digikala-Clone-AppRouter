import {SVGProps} from 'react';

function LongArrowIcon({...props}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z"
      />
    </svg>
  );
}

export default LongArrowIcon;
