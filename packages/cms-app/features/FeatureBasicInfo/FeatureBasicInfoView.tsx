import { SaveContentPayload } from '@cv-app/shared/shared-fnc';
import { SharedGridContainer, SharedGridInput, SharedGridItem, SharedHeading, SharedImageUpload } from '@cv-app/shared/shared-ui';

export function FeatureBasicInfoView({ onSubmit }: { onSubmit: (payload: SaveContentPayload) => void }) {
  async function handleImageUpload(file: File) {
    onSubmit({ image: file, first_image_save_test: true });
  }

  return (
    <SharedGridContainer centerX column spacing={3} mt={0} mb={3}>
      <SharedGridItem centerText>
        <SharedHeading level={4}> Basic Info </SharedHeading>
      </SharedGridItem>

      <SharedGridInput label={'Company Name'} />
      {/* <SharedGridInput label={'Test Field 1'} />
      <SharedGridInput label={'Test Field 2'} />
      <SharedGridInput label={'Test Field 3'} /> */}

      <SharedImageUpload onChange={handleImageUpload} />
    </SharedGridContainer>
  );
}
