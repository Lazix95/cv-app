import { useEffect, useState } from 'react';
import { SharedDrawerDesktopListItem, SharedDrawerItem } from './SharedDrawerDesktopListItem';
import { Box, Divider, Grid, useMediaQuery } from '@mui/material';
import { SharedHocIf } from 'packages/shared/shared-hoc/src/lib/SharedHocIf';

interface SharedDrawerDesktopListProps {
  readonly items: SharedDrawerItem[];
  readonly showSubList: boolean;
  readonly onChange: (event: boolean) => void;
}

export function SharedDrawerDesktopList({ items, showSubList, onChange }: SharedDrawerDesktopListProps) {
  const [subItems, setSubItems] = useState<{ items: SharedDrawerItem[]; index: number | null }>({
    items: [],
    index: null,
  });

  const handlers = {
    onClick: () => onChange(false),
    onKeyDown: () => onChange(false),
  };

  useEffect(() => {
    if (subItems.items.length > 0 || !items || items.length === 0) return;
    setSubItems({ items: items[0].subItems || [], index: 0 });
  });

  function handleHoverOnDrawerItem(index: number) {
    setSubItems({ items: items?.[index]?.subItems || [], index });
  }

  return (
    <Box sx={{ height: '100%', width: showSubList ? 500 : 250 }} role="presentation" {...handlers}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={showSubList ? 6 : 12}>
          <SharedDrawerDesktopListItem
            selectedIndex={subItems.index}
            items={items ?? []}
            onHover={handleHoverOnDrawerItem}
          />
        </Grid>

        <SharedHocIf RIf={showSubList}>
          <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />

          <Grid style={{ paddingLeft: 0 }} item xs={6}>
            <SharedDrawerDesktopListItem dense items={subItems.items} />
          </Grid>
        </SharedHocIf>
      </Grid>
    </Box>
  );
}
