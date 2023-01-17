import ContentLoader from "react-content-loader";

interface Props {
  name?: string;
  description?: string;
}
export const Loader = (props: Props) => {
  return (
    <div>
      <ContentLoader viewBox="0 0 800 400" height={400} width={800} {...props}>
        <circle cx="472" cy="159" r="7" />
        <rect x="487" y="154" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="190" r="7" />
        <rect x="487" y="184" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="219" r="7" />
        <rect x="487" y="214" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="249" r="7" />
        <rect x="487" y="244" rx="5" ry="5" width="220" height="10" />
        <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />
        <rect x="229" y="300" rx="0" ry="0" width="0" height="0" />
        <rect x="111" y="340" rx="0" ry="0" width="0" height="0" />
        <rect x="121" y="342" rx="0" ry="0" width="0" height="0" />
        <rect x="10" y="20" rx="0" ry="0" width="40" height="44" />
        <rect x="10" y="80" rx="0" ry="0" width="40" height="44" />
        <rect x="10" y="140" rx="0" ry="0" width="40" height="44" />
        <rect x="194" y="329" rx="0" ry="0" width="0" height="0" />
        <rect x="192" y="323" rx="0" ry="0" width="0" height="0" />
        <rect x="185" y="323" rx="0" ry="0" width="0" height="0" />
        <rect x="10" y="200" rx="0" ry="0" width="40" height="44" />
        <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
        <rect x="470" y="58" rx="0" ry="0" width="300" height="6" />
        <rect x="470" y="68" rx="0" ry="0" width="300" height="6" />
        <rect x="470" y="78" rx="0" ry="0" width="300" height="6" />
        <rect x="798" y="135" rx="0" ry="0" width="0" height="0" />
        <rect x="731" y="132" rx="0" ry="0" width="0" height="0" />
        <rect x="470" y="99" rx="0" ry="0" width="70" height="30" />
        <rect x="560" y="99" rx="0" ry="0" width="70" height="30" />
      </ContentLoader>
    </div>
  );
};

export const PageLoader = (props: Props) => {
  return (
    <ContentLoader viewBox="0 0 1360 900" height={900} width={1360} {...props}>
      <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
      <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
      <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
      <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
      <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
      <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
    </ContentLoader>
  );
};
