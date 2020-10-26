import * as React from "react";

function SvgCustomFields(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" {...props}>
      <defs>
        <path
          d="M10.862 2.963l2.175 2.175-7.976 7.976-2.175-2.175 7.976-7.976zM13.4 1.15l1.45 1.45c.2.2.2.525 0 .725l-1.088 1.088-2.175-2.175 1.088-1.088c.2-.2.524-.2.725 0zM1.018 14.653l1.143-2.99 2.175 2.176-2.99 1.143a.253.253 0 01-.328-.329zm4.601-7.62L4.413 5.829a2.5 2.5 0 01-3.24-3.244l1.266 1.27c.531-.178 1.238-.884 1.415-1.415L2.59 1.171a2.496 2.496 0 012.678.562 2.5 2.5 0 01.561 2.677l1.205 1.21-1.415 1.414zM10.414 9l1.207 1.205a2.5 2.5 0 013.24 3.244l-1.267-1.269c-.53.177-1.237.884-1.414 1.414l1.263 1.269a2.496 2.496 0 01-2.678-.562 2.5 2.5 0 01-.56-2.677L9 10.414 10.414 9z"
          id="custom-fields_svg__a"
        />
      </defs>
      <g transform="translate(-1 -1)" fill="none" fillRule="evenodd">
        <mask id="custom-fields_svg__b" fill="#fff">
          <use xlinkHref="#custom-fields_svg__a" />
        </mask>
        <use fill="currentColor" xlinkHref="#custom-fields_svg__a" />
        <g
          mask="url(#custom-fields_svg__b)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgCustomFields;
