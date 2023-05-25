import { Button, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { SharedHocIf } from '../../../../../shared-hoc/src/lib/SharedHocIf';

interface SharedLinkProps {
  readonly children?: ReactNode;
  readonly label?: string;
  readonly type?: 'button' | 'link',
  readonly href?: string;
  readonly color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  readonly sx?: Record<string, unknown>
}

export function SharedLink({children, label, href, type="button", color='inherit', sx={}}: SharedLinkProps) {
  return (
    <Fragment>
      <SharedHocIf RIf={type === 'button'}>
        <Button color={color} href={href} LinkComponent={Link} variant="outlined" sx={{ my: 1, mr: 1.5, ...sx }}>
          {children ? children : label}
        </Button>
      </SharedHocIf>

      <SharedHocIf RIf={type === 'link'}>
        <MuiLink color={color} href={href} component={Link} sx={{ p: 1, flexShrink: 0, ...sx }}>
          {children ? children : label}
        </MuiLink>
      </SharedHocIf>
    </Fragment>
  )
}