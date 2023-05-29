import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Typography,
} from '@mui/material';
import { SharedHocIf } from 'packages/shared/shared-hoc/src/lib/SharedHocIf';
import { Fragment } from 'react';
import { SharedDrawerItem } from './SharedDrawer';

interface SharedDrawerItemListProps {
  readonly showSubList?: boolean;
  readonly items: SharedDrawerItem[];
  readonly dense?: boolean;
  readonly subItem?: boolean;
}

export function SharedDrawerMobileListItem({ items, dense, showSubList }: SharedDrawerItemListProps) {
  return (
    <List sx={{ pt: 0 }}>
      {items.map(({ label, Icon, subItems }, index) => (
        <Fragment key={`${label} - fragment`}>
          <ListItem key={label} disablePadding>
            <ListItemButton dense={dense}>
              {Icon && (
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
              )}
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>

          <SharedHocIf RIf={showSubList}>
            {subItems?.map((subItem) => (
              <ListItem style={{ paddingLeft: 15 }} key={subItem.label} disablePadding>
                <ListItemButton dense>
                  {subItem.Icon && (
                    <ListItemIcon>
                      <subItem.Icon />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={subItem.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <SharedHocIf RIf={index < items.length - 1}>
              <Divider />
            </SharedHocIf>
          </SharedHocIf>
        </Fragment>
      ))}
    </List>
  );
}
