import * as React from 'react';
import { translate } from 'com.edge.ui-translations';

/**
 * A small doc block explaining what we use this component for
 *
 * @param {*} props - a description of what the props will be
 * @returns {*} a ButtonComponent
 */
export const ButtonComponent = (props) => {
  const {
    className,
    mouseOverHandler,
    onClick,
    t,
    m,
    i18n,
    tReady,
    disabled,
    ...rest
  } = props;
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`${className}${disabled ? ' f-btn-disabled' : ''}`}
      onMouseOver={mouseOverHandler}
      onClick={onClick}
    >
      {t(m)}
    </button>
  );
};

export const Button = translate(ButtonComponent);
