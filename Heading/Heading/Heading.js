import * as React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'com.edge.ui-translations';

/**
 * This component is used to generate heading based on the size
 *
 * @param {number} size - size of the header
 * @param {*} t - used for translating the string
 * @param {string} m - text of the heading
 * @param {string} className - extra class names
 * @returns {*} a React Stateless Functional Component
 */
export const HeadingComponent = ({
  size,
  t,
  m,
  value,
  className,
}) => {
  const Heading = `h${size}`;
  return (
    <Heading className={className}>
      {value || t(m)}
    </Heading>
  );
};

HeadingComponent.propTypes = {
  size: PropTypes.number,
  m: PropTypes.string,
  className: PropTypes.string,
};

HeadingComponent.defaultProps = {
  size: 1,
  m: '',
};

export const Heading = translate(HeadingComponent);
