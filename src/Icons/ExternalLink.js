import React from "react";

const SvgExternalLink = props => (
  <svg width={27} height={27} {...props}>
    <g fill="#949FB3" fillRule="evenodd">
      <path d="M25.362 0H16.27c-.898 0-1.63.731-1.63 1.63 0 .898.732 1.63 1.63 1.63h5.157l-8.602 8.602a1.618 1.618 0 0 0-.478 1.153c0 .435.17.844.477 1.152.308.308.717.478 1.153.478.435 0 .845-.17 1.153-.478l8.602-8.603v5.157c0 .9.731 1.63 1.63 1.63.899 0 1.63-.73 1.63-1.63V1.63c0-.899-.731-1.63-1.63-1.63z" />
      <path d="M19.282 23.648H3.344V7.71h11.987l2.794-2.794H1.947C1.176 4.916.55 5.54.55 6.313v18.731c0 .772.626 1.397 1.397 1.397H20.68c.771 0 1.397-.625 1.397-1.397V8.867l-2.794 2.794v11.987z" />
    </g>
  </svg>
);

export default SvgExternalLink;