import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { SharedHocIf } from 'packages/shared/shared-hoc/src/lib/SharedHocIf';
import { SharedDrawerItem, SharedDrawerDesktopListItem } from './SharedDrawerDesktopListItem';
import { SharedDrawerDesktopList } from './SharedDrawerDeskropList';
import { SharedDrawerMobileList } from './SharedDrawerMobileList';

interface SharedDrawerProps {
  readonly onChange: (state: boolean) => void;
  readonly value: boolean;
  readonly showSubList?: boolean;
  readonly items?: SharedDrawerItem[];
}

export function SharedDrawer({ onChange, value, items, showSubList = true }: SharedDrawerProps) {
  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Drawer anchor={'right'} open={value} onClose={() => onChange(false)}>
      <SharedHocIf RIf={isDesktopView}>
        <SharedDrawerDesktopList onChange={onChange} items={items || []} showSubList={showSubList} />
      </SharedHocIf>

      <SharedHocIf RIf={!isDesktopView}>
        <SharedDrawerMobileList onChange={onChange} items={items || []} />
      </SharedHocIf>
    </Drawer>
  );
}
