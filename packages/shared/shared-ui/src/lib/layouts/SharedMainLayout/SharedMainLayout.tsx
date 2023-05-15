import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import {ReactNode} from "react";
import {SharedDefaultFooter} from "../../components/SharedDefaultFooter/SharedDefaultFooter";

export function SharedMainLayout({children, Footer = SharedDefaultFooter} : {children: ReactNode, Footer?: () => JSX.Element}) {
  return (
    <React.Fragment>
      <AppBar position={"sticky"} elevation={2} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Toolbar sx={{ flexWrap: 'wrap', borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            <Button href="#" color="inherit" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Projects
            </Button>
            <Button color="inherit" href="#" sx={{ my: 1, mx: 1.5 }}>
              Features
            </Button>
            <Button color="inherit" href="#" sx={{ my: 1, mx: 1.5 }}>
              Enterprise
            </Button>
            <Button color="inherit" href="#" sx={{ my: 1, mx: 1.5 }}>
              Support
            </Button>
          </nav>
        </Toolbar>
        <Container maxWidth="md">
        <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
            <Link color="inherit" noWrap variant="body2"  href="#" sx={{ p: 1, flexShrink: 0 }}>
              Projects
            </Link>
            <Link color="inherit" noWrap variant="body2"  href="#" sx={{ p: 1, flexShrink: 0 }}>
              People
            </Link>
            <Link color="inherit" noWrap variant="body2"  href="#" sx={{ p: 1, flexShrink: 0 }}>
              News
            </Link>
            <Link color="inherit" noWrap variant="body2"  href="#" sx={{ p: 1, flexShrink: 0 }}>
              Careers
            </Link>
            <Link color="inherit" noWrap variant="body2"  href="#" sx={{ p: 1, flexShrink: 0 }}>
              Contact
            </Link>
        </Toolbar>
        </Container>
      </AppBar>

      {/* Main view */}
      <Container maxWidth="md" component="main" style={{paddingLeft: 0, paddingRight: 0}}>
        {children}
      </Container>

      {/* Footer */}
      <footer>
        <Footer/>
      </footer>
    </React.Fragment>
  );
}
