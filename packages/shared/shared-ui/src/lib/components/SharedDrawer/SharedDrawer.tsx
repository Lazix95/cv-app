import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { SharedHocIf } from 'packages/shared/shared-hoc/src/lib/SharedHocIf';
import { SharedDrawerItem, SharedDrawerItemList } from './SharedDrawerItemList';

interface SharedDrawerProps {
  readonly onChange: (state: boolean) => void;
  readonly value: boolean;
  readonly showSubList?: boolean;
  readonly items?: SharedDrawerItem[];
}

export function SharedDrawer({ onChange, value, items, showSubList = true }: SharedDrawerProps) {
  const handlers = {
    onClick: () => onChange(false),
    onKeyDown: () => onChange(false),
  };
  const [subItems, setSubItems] = useState<SharedDrawerItem[]>([]);

  useEffect(() => {
    if (subItems.length > 0 || !items || items.length === 0) return;
    setSubItems(items[0].subItems || []);
  });

  const list = () => (
    <Box sx={{ height: '100%', width: showSubList ? 500 : 250 }} role="presentation" {...handlers}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={showSubList ? 6 : 12}>
          <SharedDrawerItemList items={items ?? []} onHover={(index) => setSubItems(items?.[index]?.subItems || [])} />
        </Grid>

        <SharedHocIf RIf={showSubList}>
          <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />

          <Grid style={{ paddingLeft: 0 }} item xs={6}>
            <SharedDrawerItemList dense items={subItems} />
          </Grid>
        </SharedHocIf>
      </Grid>
    </Box>
  );

  return (
    <Drawer anchor={'right'} open={value} onClose={() => onChange(false)}>
      {list()}
    </Drawer>
  );
}
