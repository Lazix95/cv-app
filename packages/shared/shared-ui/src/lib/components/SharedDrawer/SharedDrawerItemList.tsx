import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';

export interface SharedDrawerItem {
  label: string;
  Icon?: typeof SvgIcon;
  subItems?: SharedDrawerItem[];
}

interface SharedDrawerItemListProps {
  items: SharedDrawerItem[];
  onHover?: (index: number) => void;
  dense?: boolean;
}

export function SharedDrawerItemList({ items, onHover, dense }: SharedDrawerItemListProps) {
  return (
    <List>
      {items.map(({ label, Icon }, index) => (
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
      ))}
    </List>
  );
}
