import * as React from "react";

function SvgClick(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M13.02 7.47L10.4 5.786a1.806 1.806 0 00-1.925 0l-.058.04V2.623c0-.401-.223-.772-.584-.972-.36-.201-.805-.201-1.166 0-.361.2-.584.57-.584.972v7.034a.279.279 0 01-.137.238.301.301 0 01-.283.014l-1.872-.904a1.278 1.278 0 00-1.205.052A1.182 1.182 0 002 10.072v.214c0 .079.033.154.093.208l3.366 3.028a3.86 3.86 0 002.584.978h2.707c.774 0 1.515-.296 2.062-.823a2.758 2.758 0 00.855-1.986V8.64a1.386 1.386 0 00-.648-1.17z"
          id="click_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="click_svg__b" fill="#fff">
          <use xlinkHref="#click_svg__a" />
        </mask>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#click_svg__a" />
        <g mask="url(#click_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgClick;
