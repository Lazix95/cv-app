import { useState } from 'react';
import { AppProps } from 'next/app';
import './globalStyles.scss';
import { SharedDrawer, SharedHead, SharedMainLayout, SharedNamedChild, SharedThemeProvider } from '@cv-app/shared/shared-ui';
import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Breakpoint } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { SharedHocIf } from '@cv-app/shared/shared-hoc';
import { FirebaseAuth } from '@cv-app/shared/firebase';
import { User } from 'firebase/auth';

export interface CustomAppProps {
  maxWidth: Breakpoint | false;
}

const items = [
  {
    label: 'Basic Info',
    Icon: InboxIcon,
  },
  {
    label: 'Landing Page',
    Icon: InboxIcon,
  },
];

function CustomApp({ Component, pageProps }: AppProps<CustomAppProps>) {
  const [drawerActive, setDrawerActive] = useState(false);
  const [user, setUser] = useState<User | null | undefined>(undefined);

  const LoginFallback = () => {
    return <FirebaseAuth onChanged={setUser} />;
  };

  return (
    <Fragment>
      <SharedHead title="Welcome to Sevenarch!" />

      <SharedThemeProvider mode={'light'}>
        <CssBaseline />
        <SharedHocIf RIf={!!user} Fallback={LoginFallback}>
          <SharedMainLayout maxWidth={pageProps.maxWidth} onDrawerChange={setDrawerActive}>
            <SharedNamedChild name="drawer">
              <SharedDrawer title={'Menu'} items={items} value={drawerActive} showSubList={false} onChange={setDrawerActive} />
            </SharedNamedChild>
            <Component {...pageProps} />
          </SharedMainLayout>
        </SharedHocIf>
      </SharedThemeProvider>
    </Fragment>
  );
}

export default CustomApp;
