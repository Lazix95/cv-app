import {SharedHeading, SharedGridContainer, SharedGridItem, SharedGridInput} from "@cv-app/shared/shared-ui";

export function FeatureBasicInfoContainer() {
  return (
    <SharedGridContainer centerX>
      <SharedHeading level={4}>
       <SharedGridItem>
         Basic Info
       </SharedGridItem>

       <SharedGridInput  />
      </SharedHeading>
    </SharedGridContainer>
  );
}