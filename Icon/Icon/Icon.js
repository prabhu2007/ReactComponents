import './icon.less';
import * as React from 'react';
import classnames from 'classnames';

/**
 * This component is used to generate icons
 *
 * @param {{icon, size}} props - icon name and size
 * @returns {*} an Icon React component
 */
export const Icon = (props) => {
  const {
    icon,
    size,
    className,
    onClick,
  } = props;
  return (
    <i
      onClick={onClick}
      className={
        classnames(
          'icon',
          `icon-${icon}`,
          `icon-${size}`,
          className,
          onClick ?
            '' :
            'no-pointer',
        )
      }
    />
  );
};

Icon.defaultProps = {
  icon: 'cross-orange',
  size: 's',
};
