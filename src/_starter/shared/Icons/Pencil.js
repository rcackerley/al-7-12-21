import * as React from "react";

function SvgPencil(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M11.01 5.518l1.145 1.21a.308.308 0 010 .445L5.6 13.663h-.127l-1.91.573-2.545.7H.827c-.127-.063-.254-.19-.19-.381l.763-2.546.573-1.909c0-.064 0-.064.063-.127L8.4 3.545a.482.482 0 01.255-.127c.127.064.19.064.254.127l1.146 1.146a.308.308 0 010 .445l-6.046 6.046s-.127.063-.19.063c-.128-.063-.192-.127-.255-.19l-.255-.51h-.827l-.446 1.528L3.564 13.6l1.527-.445v-.828l-.51-.254-.063-.064a.308.308 0 010-.445l6.046-6.046a.308.308 0 01.445 0zm3.245-2.227c.509.509.509 1.273.063 1.782L13.11 6.218a.308.308 0 01-.445 0L9.418 2.973a.308.308 0 010-.446l1.146-1.145a1.23 1.23 0 011.781 0l1.91 1.909z"
          id="pencil_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="pencil_svg__b" fill="#fff">
          <use xlinkHref="#pencil_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#pencil_svg__a"
        />
        <g mask="url(#pencil_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgPencil;
