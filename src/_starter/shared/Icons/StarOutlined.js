import * as React from "react";

function SvgStaroutlined(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M14.97 6.347a.585.585 0 00-.518-.409l-4.304-.296-1.61-3.782A.583.583 0 008 1.5a.583.583 0 00-.536.36l-1.61 3.782-4.304.296a.585.585 0 00-.522.407.597.597 0 00.183.64L4.443 9.72l-.804 4.09a.596.596 0 00.239.592c.194.13.447.13.641 0l3.5-2.178 3.5 2.178c.192.12.436.115.625-.011a.595.595 0 00.255-.58l-.84-4.09 3.231-2.735a.597.597 0 00.18-.64zM12.353 7.53l-2.076 1.776.548 2.788a.298.298 0 01-.12.298.288.288 0 01-.317.01L8 10.869l-2.385 1.485a.288.288 0 01-.317-.01.298.298 0 01-.12-.297l.548-2.788L3.65 7.483a.299.299 0 01-.088-.318.292.292 0 01.257-.203l2.83-.136 1.084-2.575A.303.303 0 018 4.087c.113 0 .216.063.268.164l1.085 2.575 2.829.178c.118.008.22.088.257.202a.299.299 0 01-.088.318v.006z"
          id="star_outlined_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="star_outlined_svg__b" fill="#fff">
          <use xlinkHref="#star_outlined_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#star_outlined_svg__a"
        />
        <g
          mask="url(#star_outlined_svg__b)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgStaroutlined;
