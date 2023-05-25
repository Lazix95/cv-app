import {
  SharedGridContainer,
  SharedGridInput,
  SharedGridItem,
  SharedHeading,
  SharedImageUpload,
} from '@cv-app/shared/shared-ui';
import { saveImageToPublic } from './../../utils/electronUtils';

export function FeatureBasicInfoView() {
  async function handleImageUpload(file: File) {
    const a = await saveImageToPublic(file);
    console.log(a);
  }

  return (
    <SharedGridContainer centerX column spacing={3} mt={0} mb={3}>
      <SharedGridItem centerText>
        <SharedHeading level={4}> Basic Info </SharedHeading>
      </SharedGridItem>

      <SharedGridInput label={'Company Name'} />
      <SharedGridInput label={'Test Field 1'} />
      <SharedGridInput label={'Test Field 2'} />
      <SharedGridInput label={'Test Field 3'} />

      <SharedImageUpload onChange={handleImageUpload} />
    </SharedGridContainer>
  );
}
