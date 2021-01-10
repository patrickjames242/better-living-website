
import React, { SVGProps } from "react";

function ArrowSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 68 68"
    {...props}
  >
    <g fillRule="evenodd" >
      <g fillRule="nonzero">
        <g transform="rotate(180 32.5 32.5)">
          <path d="M32.5 65C14.55 65 0 50.45 0 32.5S14.55 0 32.5 0 65 14.55 65 32.5 50.45 65 32.5 65zm15.833-35h-25.6l6.16-6.16a2.528 2.528 0 00.774-1.84c0-1.312-1.084-2.667-2.667-2.667-.708 0-1.325.258-1.84.774l-10.61 10.61c-.438.438-.883.978-.883 1.95s.372 1.44.861 1.929l10.632 10.63A2.515 2.515 0 0027 46c1.584 0 2.667-1.355 2.667-2.667 0-.688-.248-1.314-.774-1.84l-6.16-6.16h25.6a2.668 2.668 0 000-5.333z"></path>
        </g>
      </g>
    </g>
  </svg>
  );
}

export default ArrowSVG;
