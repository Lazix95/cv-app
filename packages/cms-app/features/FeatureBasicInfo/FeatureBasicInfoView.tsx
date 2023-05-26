import {
  SharedGridContainer,
  SharedGridInput,
  SharedGridItem,
  SharedHeading,
  SharedImageUpload,
} from '@cv-app/shared/shared-ui';
import { saveImageToPublic, saveJsonData } from './../../utils/electronUtils';

export function FeatureBasicInfoView() {
  async function handleImageUpload(file: File) {
    //const a = await saveImageToPublic(file);
    const a = await saveJsonData('landingPage.json', { test_2: 'first test 2' });
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
      <SharedImageUpload onChange={handleImageUpload} />
    </SharedGridContainer>
  );
}
