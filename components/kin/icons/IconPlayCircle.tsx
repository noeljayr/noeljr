import * as React from "react"
import { SVGProps } from "react"
const IconPlayCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.688 7.5v-.925c0-1.194.843-1.675 1.875-1.081l.8.462.8.463c1.03.593 1.03 1.568 0 2.162l-.8.463-.8.462c-1.032.594-1.875.106-1.875-1.081V7.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.5 13.75a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5Z"
    />
  </svg>
)
export default IconPlayCircle
