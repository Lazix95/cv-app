import { setInitialPageProps } from "./../../utils/nextUtils";
import { FeatureBasicInfoView } from "./FeatureBasicInfoView";

setInitialPageProps(FeatureBasicInfoContainer, {maxWidth: 'xs'})

export function FeatureBasicInfoContainer() {
  return (
    <FeatureBasicInfoView/>
  );
}