import {SVGProps} from 'react';

function DigitalProductCatIcon({...props}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M22 18.5V3.5H2V18.5H0V20.5H24V18.5H22ZM14 18.5H10V17.5H14V18.5ZM20 15.5H4V5.5H20V15.5Z" />
    </svg>
  );
}

export default DigitalProductCatIcon;
