import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="270" rx="10" ry="10" width="280" height="28" />
    <rect x="0" y="308" rx="10" ry="10" width="280" height="89" />
    <rect x="0" y="417" rx="10" ry="10" width="70" height="46" />
    <rect x="130" y="417" rx="30" ry="30" width="152" height="46" />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
