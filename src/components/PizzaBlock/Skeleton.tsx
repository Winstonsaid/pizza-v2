import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="110" r="110" />
    <rect x="6" y="237" rx="9" ry="9" width="275" height="22" />
    <rect x="3" y="271" rx="10" ry="10" width="280" height="88" />
    <rect x="6" y="371" rx="10" ry="10" width="95" height="27" />
    <rect x="126" y="366" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
