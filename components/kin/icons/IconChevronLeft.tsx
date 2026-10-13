import * as React from "react"
import { SVGProps } from "react"
const IconChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.375 12.45 5.3 8.375a1.241 1.241 0 0 1 0-1.75L9.375 2.55"
    />
  </svg>
)
export default IconChevronLeft
