import './label.less';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { translate } from 'com.edge.ui-translations';

/**
 * A small doc block explaining what we use this component for
 *
 * @param {*} props - a description of what the props will be
 * @returns {*} a LabelComponent
 */
export const LabelComponent = ({
  className,
  t,
  m,
  onClick,
  placeholders,
}) => (
  <label
    className={className}
    onClick={onClick}
  >
    <pre>
      {t(m, placeholders)}
    </pre>
  </label>
);

LabelComponent.propTypes = {
  m: PropTypes.any,
  placeholders: PropTypes.object,
};

LabelComponent.defaultProps = {
  m: ' ',
  placeholders: {},
};

export const Label = translate(LabelComponent);
