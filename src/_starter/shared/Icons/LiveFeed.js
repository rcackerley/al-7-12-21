import * as React from "react";

function SvgLivefeed(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M14.412 7.588H11.61L10.584 5.03a.56.56 0 00-.232-.28.577.577 0 00-.356-.089.644.644 0 00-.335.15.556.556 0 00-.184.315l-1.094 5.1L7.11 2.242a.57.57 0 00-.533-.492.556.556 0 00-.369.103.626.626 0 00-.232.307L4.363 7.588H1.588a.567.567 0 00-.417.17.552.552 0 00-.171.404c0 .164.057.303.17.417.115.114.254.171.418.171h3.2a.573.573 0 00.348-.116.566.566 0 00.212-.294l1.011-3.39 1.354 8.558a.628.628 0 00.198.348.521.521 0 00.362.144h.014a.58.58 0 00.37-.13.553.553 0 00.204-.335l1.354-6.289.451 1.135c.046.11.119.198.219.266.1.069.21.103.328.103h3.2a.567.567 0 00.416-.17.567.567 0 00.171-.418.552.552 0 00-.17-.403.567.567 0 00-.418-.171z"
          id="live_feed_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="live_feed_svg__b" fill="#fff">
          <use xlinkHref="#live_feed_svg__a" />
        </mask>
        <use fill="currentColor" xlinkHref="#live_feed_svg__a" />
        <g mask="url(#live_feed_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgLivefeed;
