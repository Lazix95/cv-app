import React, { useEffect } from 'react';
import { setInitialPageProps } from './../../utils/nextUtils';
import { FeatureBasicInfoView } from './FeatureBasicInfoView';
import { SaveContentPayload, useSharedContent } from '@cv-app/shared/shared-fnc';
import { SharedContentImage, SharedGridContainer, SharedGridItem } from '@cv-app/shared/shared-ui';

setInitialPageProps(FeatureBasicInfoContainer, { maxWidth: 'xs' });

export function FeatureBasicInfoContainer(props: unknown) {
  const { content, saveContent } = useSharedContent();

  useEffect(() => {
    if (content) console.log('content => ', content);
  }, [content]);

  function handleSubmit(payload: SaveContentPayload) {
    saveContent('landingPage', payload);
  }

  return (
    <>
      <SharedGridContainer>
        <SharedGridItem xs={12}>
          <SharedContentImage content={content} name={'landingPage_Dnevna_1'} />
        </SharedGridItem>
      </SharedGridContainer>
      <FeatureBasicInfoView onSubmit={handleSubmit} />
    </>
  );
}
