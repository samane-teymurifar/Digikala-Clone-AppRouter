import { SVGProps } from "react";
function ArrowIcon({ ...props }: SVGProps<any>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z"/>
    </svg>
  );
}

export default ArrowIcon;