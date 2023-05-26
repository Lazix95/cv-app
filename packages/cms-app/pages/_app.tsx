import { useState } from 'react';
import { AppProps } from 'next/app';
import './globalStyles.scss';
import {
  SharedDrawer,
  SharedHead,
  SharedMainLayout,
  SharedNamedChild,
  SharedThemeProvider,
} from '@cv-app/shared/shared-ui';
import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Breakpoint } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export interface CustomAppProps {
  maxWidth: Breakpoint | false;
}

function CustomApp({ Component, pageProps }: AppProps<CustomAppProps>) {
  const [drawerActive, setDrawerActive] = useState(false);

  const items = [
    {
      label: 'Test',
      Icon: InboxIcon,
      subItems: [
        { label: 'Test a', Icon: InboxIcon },
        { label: 'Test b', Icon: InboxIcon },
        { label: 'Test c', Icon: InboxIcon },
      ],
    },
    {
      label: 'Test 2',
      Icon: InboxIcon,
      subItems: [
        { label: 'Test 2 a', Icon: InboxIcon },
        { label: 'Test 2 b', Icon: InboxIcon },
        { label: 'Test 2 c', Icon: InboxIcon },
      ],
    },
    {
      label: 'Test 3',
      Icon: InboxIcon,
      subItems: [
        { label: 'Test 3 a', Icon: InboxIcon },
        { label: 'Test 3 b', Icon: InboxIcon },
        { label: 'Test 3 c', Icon: InboxIcon },
      ],
    },
    {
      label: 'Test 4',
      Icon: InboxIcon,
      subItems: [
        { label: 'Test 4 a', Icon: InboxIcon },
        { label: 'Test 4 b', Icon: InboxIcon },
        { label: 'Test 4 c', Icon: InboxIcon },
      ],
    },
  ];

  return (
    <Fragment>
      <SharedHead title="Welcome to Sevenarch!" />

      <SharedThemeProvider mode={'light'}>
        <CssBaseline />
        <SharedMainLayout maxWidth={pageProps.maxWidth} onDrawerChange={setDrawerActive}>
          <SharedNamedChild name="drawer">
            <SharedDrawer items={items} value={drawerActive} onChange={setDrawerActive} />
          </SharedNamedChild>

          <Component {...pageProps} />
        </SharedMainLayout>
      </SharedThemeProvider>
    </Fragment>
  );
}

export default CustomApp;
