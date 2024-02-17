import {SVGProps} from 'react';

function ComparisonIcon({...props}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7ZM19 17H5V13H19V17ZM5 11V7H19V11H5Z" />
    </svg>
  );
}

export default ComparisonIcon;
