import React, { SVGProps } from "react";

function TextIconSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19.25 0H4.75A2.752 2.752 0 002 2.75v18.5A2.752 2.752 0 004.75 24h14.5A2.752 2.752 0 0022 21.25V2.75A2.752 2.752 0 0019.25 0zM5 8.75A.75.75 0 015.75 8h5.5a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0V9.5H9.25v4a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5v-4H6.5v.25a.75.75 0 01-1.5 0zM18.25 21H5.75a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5zm0-3H5.75a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5zm0-3h-3.5a.75.75 0 010-1.5h3.5a.75.75 0 010 1.5zm0-2.75h-3.5a.75.75 0 010-1.5h3.5a.75.75 0 010 1.5zm0-2.75h-3.5a.75.75 0 010-1.5h3.5a.75.75 0 010 1.5z"></path>
    </svg>
  );
}

export default TextIconSVG;
