import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';
import { SharedHocIf } from 'packages/shared/shared-hoc/src/lib/SharedHocIf';
import { Fragment } from 'react';

export interface SharedDrawerItem {
  label: string;
  Icon?: typeof SvgIcon;
  subItems?: SharedDrawerItem[];
}

interface SharedDrawerItemListProps {
  items: SharedDrawerItem[];
  onHover?: (index: number) => void;
  dense?: boolean;
  subItem?: boolean;
}

export function SharedDrawerMobileListItem({ items, onHover, dense }: SharedDrawerItemListProps) {
  return (
    <List>
      {items.map(({ label, Icon, subItems }, index) => (
        <Fragment key={`${label} - fragment`}>
          <ListItem key={label} disablePadding>
            <ListItemButton dense={dense} onMouseEnter={() => onHover?.(index)}>
              {Icon && (
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
              )}
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>

          {subItems?.map((subItem) => (
            <ListItem style={{ paddingLeft: 15 }} key={subItem.label} disablePadding>
              <ListItemButton dense onMouseEnter={() => onHover?.(index)}>
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
        </Fragment>
      ))}
    </List>
  );
}
