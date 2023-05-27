import React, { ComponentType } from 'react';
import { setInitialPageProps } from './../../utils/nextUtils';
import { FeatureBasicInfoView } from './FeatureBasicInfoView';

setInitialPageProps(FeatureBasicInfoContainer, { maxWidth: 'xs' });

const DynamicComponent = React.lazy(
  () => import('@cv-app/shared/content') as unknown as Promise<{ default: ComponentType<any> }>
);

export async function getStaticProps() {
  // Dynamically import component using require
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const dynamicComponent = require('@cv-app/shared/content');

  // Additional data fetching or processing
  // ...

  return {
    props: {
      dynamicComponent,
      // Additional data to pass to the page
      // ...
    },
  };
}

export function FeatureBasicInfoContainer(props: unknown) {
  console.log(props);
  return <FeatureBasicInfoView />;
}
