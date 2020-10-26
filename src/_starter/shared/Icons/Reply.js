import * as React from "react";

function SvgReply(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M7.815 5.651h-.04V3.903a.903.903 0 00-1.482-.69L1.777 7.276a.903.903 0 000 1.39l4.516 4.065a.903.903 0 00.578.203.903.903 0 00.903-.903v-1.865h.154c3.59 0 6.62 1.138 6.62 2.488a.226.226 0 00.452 0 7.023 7.023 0 00-7.185-7.004z"
          id="reply_svg__a"
        />
      </defs>
      <use fill="currentColor" fillRule="nonzero" xlinkHref="#reply_svg__a" />
    </svg>
  );
}

export default SvgReply;
