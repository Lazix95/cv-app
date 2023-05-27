import { useEffect, useState } from 'react';
import { SharedDrawerDesktopListItem, SharedDrawerItem } from './SharedDrawerDesktopListItem';
import { Box, Divider, Grid, useMediaQuery } from '@mui/material';
import { SharedHocIf } from 'packages/shared/shared-hoc/src/lib/SharedHocIf';
import { SharedDrawerMobileListItem } from './SharedDrawerMobileListItem';

interface SharedDrawerMobileListProps {
  readonly items: SharedDrawerItem[];
  readonly onChange: (event: boolean) => void;
}

export function SharedDrawerMobileList({ items, onChange }: SharedDrawerMobileListProps) {
  const [subItems, setSubItems] = useState<SharedDrawerItem[]>([]);

  const handlers = {
    onClick: () => onChange(false),
    onKeyDown: () => onChange(false),
  };

  useEffect(() => {
    if (subItems.length > 0 || !items || items.length === 0) return;
    setSubItems(items[0].subItems || []);
  });

  return (
    <Box sx={{ height: '100%', width: 250 }} role="presentation" {...handlers}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={12}>
          <SharedDrawerMobileListItem
            items={items ?? []}
            onHover={(index) => setSubItems(items?.[index]?.subItems || [])}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
