import React from 'react';
import { setInitialPageProps } from './../../utils/nextUtils';
import { FeatureBasicInfoView } from './FeatureBasicInfoView';
import { SaveContentPayload } from '@cv-app/shared/shared-fnc';
import { storeDocument } from '@cv-app/shared/firebase';

setInitialPageProps(FeatureBasicInfoContainer, { maxWidth: 'xs' });

export function FeatureBasicInfoContainer(props: unknown) {
  async function handleSubmit(payload: SaveContentPayload) {
    const res = await storeDocument('generalInfo', 'landingPage', { test_3: 1 });
    console.log(res);
  }

  return <FeatureBasicInfoView onSubmit={handleSubmit} />;
}
