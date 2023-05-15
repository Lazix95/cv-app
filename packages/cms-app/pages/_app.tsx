import { AppProps } from 'next/app';
import Head from 'next/head';
import './globalStyles.scss'
import {SharedMainLayout} from "@cv-app/shared/shared-ui";
import {Fragment} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import {SharedThemeProvider} from "../../shared/shared-ui/src/lib/components/SharedThemeProvider/SharedThemeProvider";


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to cms-app!</title>
      </Head>
      <SharedThemeProvider mode={"light"}>
        <CssBaseline />
        <SharedMainLayout>
          <Component {...pageProps} />
        </SharedMainLayout>
      </SharedThemeProvider>

    </Fragment>
  );
}

export default CustomApp;
