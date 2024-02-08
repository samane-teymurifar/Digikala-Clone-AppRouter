import {SVGProps} from 'react';

function AwardsIcon({...props}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="24"
      viewBox="0 0 18 24"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M9.7875 21.5029L-0.00250244 11.7129V13.7129C-0.00250244 14.2429 0.207497 14.7529 0.587497 15.1229L8.3775 22.9129C9.1575 23.6929 10.4275 23.6929 11.2075 22.9129L17.4175 16.7029C18.1975 15.9229 18.1975 14.6529 17.4175 13.8729L9.7875 21.5029Z" />
      <path d="M8.3775 17.9129C8.7675 18.3029 9.2775 18.5029 9.7875 18.5029C10.2975 18.5029 10.8075 18.3029 11.1975 17.9129L17.4075 11.7029C18.1875 10.9229 18.1875 9.65293 17.4075 8.87293L9.6175 1.08293C9.2475 0.71293 8.7375 0.50293 8.2075 0.50293H1.9975C0.897498 0.50293 -0.00250244 1.40293 -0.00250244 2.50293V8.71293C-0.00250244 9.24293 0.207497 9.75293 0.587497 10.1229L8.3775 17.9129ZM1.9975 2.50293H8.2075L15.9975 10.2929L9.7875 16.5029L1.9975 8.71293V2.50293Z" />
      <path d="M4.2475 6.00293C4.93785 6.00293 5.4975 5.44329 5.4975 4.75293C5.4975 4.06257 4.93785 3.50293 4.2475 3.50293C3.55714 3.50293 2.9975 4.06257 2.9975 4.75293C2.9975 5.44329 3.55714 6.00293 4.2475 6.00293Z" />
    </svg>
  );
}

export default AwardsIcon;