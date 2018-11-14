import './remove-margin.less';
import * as React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import { get } from 'lodash';
import { translate } from 'com.edge.ui-translations';


/**
 * This component is a  wrapper for the Select component.
 * this components behaves the same as the Select component
 * with the additional ability to translation labels.
 *
 * @param {string} localeString - label locale value
 * @param {string} dataTestId - label for unique identifier value
 * @param {function} t - translation function
 * @param {[]} options - selector options
 * @param {*} value - selected value
 * @param {function} onChange - change function for select
 * @param {params} rest - rest arguments for this component
 * @returns {*} - A select component with label translation
 * @constructor
 */
export const SelectorComponent = ({
  localeString,
  t,
  options,
  value,
  onChange,
  dataTestId,
  removeMargin,
  ...rest
}) => {
  /**
   * It will translate local label by using translate prop.
   * @type {{label: *, value}[]}
   */
  const translatedOptions = options.map(option => ({
    ...option,
    label: t(get(option, 'label', '')),
    value: get(option, 'value', ''),
  }));

  return (
    <div
      className={
        removeMargin ?
          'remove-margin' :
          ''
      }
    >
      <Select
        label={t(localeString)}
        options={translatedOptions}
        value={value}
        onChange={onChange}
        visibleItems={8}
        {...rest}
      />
    </div>
  );
};

SelectorComponent.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  localeString: PropTypes.string,
  value: PropTypes.any,
  removeMargin: PropTypes.bool,
};

SelectorComponent.defaultProps = {
  onChange: () => {
  },
  options: [],
  localeString: '',
  value: 1,
  removeMargin: false,
};

export const Selector = translate(SelectorComponent);
