import * as React from "react";

function SvgSearch(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M9.298 10.71h1.413a5.715 5.715 0 01-.769.645l-.644-.644zm1.413 0V9.299l.644.644c-.191.273-.406.53-.644.769zm3.978 2.567l-1.412 1.412-3.335-3.334a5.688 5.688 0 111.412-1.412l3.335 3.334zm-4.31-6.589a3.69 3.69 0 10-7.382 0 3.69 3.69 0 007.382 0zm.332 2.61l3.978 3.98c.942.94-.47 2.353-1.412 1.411l-3.979-3.978a.999.999 0 011.413-1.413z"
          id="search_svg__a"
        />
      </defs>
      <use fill="currentColor" fillRule="nonzero" xlinkHref="#search_svg__a" />
    </svg>
  );
}

export default SvgSearch;
