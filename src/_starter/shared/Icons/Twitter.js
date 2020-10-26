import * as React from "react";

function SvgTwitter(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M14.932 3.418a.292.292 0 00-.35-.058 2.778 2.778 0 01-.438.157 2.83 2.83 0 00.496-.933.292.292 0 00-.45-.31 6.18 6.18 0 01-1.476.584A2.947 2.947 0 0010.631 2a3.333 3.333 0 00-1.751.543c-1.11.624-1.302 2.066-1.22 2.959a7.587 7.587 0 01-5.253-2.778.31.31 0 00-.239-.14.292.292 0 00-.233.146 3.122 3.122 0 00.128 3.326 3.691 3.691 0 01-.274-.204.292.292 0 00-.496.233 3.344 3.344 0 001.459 2.708l-.228-.064a.292.292 0 00-.356.391 3.782 3.782 0 002.445 2.113 5.381 5.381 0 01-3.285.689.292.292 0 00-.181.542 8.871 8.871 0 004.523 1.209 7.791 7.791 0 005.836-2.703 7.955 7.955 0 002.13-5.79c.52-.397.969-.88 1.325-1.43a.292.292 0 00-.029-.332z"
          id="twitter_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="twitter_svg__b" fill="#fff">
          <use xlinkHref="#twitter_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#twitter_svg__a"
        />
        <g mask="url(#twitter_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgTwitter;
