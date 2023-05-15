import {SharedHeading, SharedGridContainer, SharedGridItem} from "@cv-app/shared/shared-ui";

export function FeatureBasicInfoContainer() {
  return (
    <SharedGridContainer centerX>
      <SharedHeading level={4}>
       <SharedGridItem>
         Basic Info
       </SharedGridItem>
      </SharedHeading>
    </SharedGridContainer>
  );
}

export default FeatureBasicInfoContainer;