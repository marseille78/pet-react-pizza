import { FC } from "react";
import ContentLoader from "react-content-loader";

const Skeleton: FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={0}
    width={280}
    height={493}
    viewBox="0 0 280 493"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="0" rx="8" ry="8" width="260" height="260" />
    <rect x="0" y="278" rx="8" ry="8" width="280" height="16" />
    <rect x="0" y="313" rx="8" ry="8" width="280" height="88" />
    <rect x="0" y="421" rx="8" ry="8" width="90" height="30" />
    <rect x="125" y="413" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
