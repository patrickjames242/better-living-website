import * as React from "react"

function ClipboardSVG(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M12.25 6h-6.5C4.785 6 4 5.215 4 4.25v-1.5A.75.75 0 014.75 2h1.604C6.682.847 7.743 0 9 0s2.318.847 2.646 2h1.604a.75.75 0 01.75.75v1.5C14 5.215 13.215 6 12.25 6zM22 21a.5.5 0 01-.447-.276l-1.289-2.578A2.51 2.51 0 0120 17.028V8c0-1.103.897-2 2-2s2 .897 2 2v9.028c0 .386-.091.772-.264 1.118l-1.289 2.578A.5.5 0 0122 21zm1.289-3.078h.01z" />
            <path d="M15.25 3H15v1.25A2.752 2.752 0 0112.25 7h-6.5A2.752 2.752 0 013 4.25V3h-.25A2.752 2.752 0 000 5.75v15.5A2.752 2.752 0 002.75 24h12.5A2.752 2.752 0 0018 21.25V5.75A2.752 2.752 0 0015.25 3zm-1 18H3.75a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5zm0-3H3.75a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5zm0-3H3.75a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5zm0-3H3.75a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5z" />
        </svg>
    )
}

export default ClipboardSVG;
