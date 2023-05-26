import { ReactNode, Fragment } from 'react';

export function SharedHocIf({
  children,
  RIf,
  Fallback,
}: {
  children: ReactNode;
  RIf: boolean | undefined;
  Fallback?: () => JSX.Element;
}) {
  return (
    <Fragment>
      {RIf && children}
      {!RIf && Fallback && <Fallback />}
    </Fragment>
  );
}
