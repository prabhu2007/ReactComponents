import * as React from 'react';
import { translate } from 'com.edge.ui-translations';

export const PComponent = ({
  className,
  t,
  m,
}) => (
  <p className={className}>
    {t(m)}
  </p>
);

export const P = translate(PComponent);
