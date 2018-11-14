import * as React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'com.edge.ui-translations';
import { Label } from '../Label';

/*
 * This component wraps checkbox with label component.
 * This will be useful for translation for the checkbox label
 */
export class CheckBoxWithLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.checked,
    };
  }

  /**
   * This function will update local value if the new value is not
   * equals to current value
   *
   * @param {Object} nextProps - React component props object.
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({
        value: nextProps.checked,
      });
    }
  }

  /**
   * Change handler for the checkbox component
   * Will convert boolean value to string
   *
   * @param {{}} value - value after checked the checkbox
   */
  onChange = (value) => {
    const checkedValue = (Number(value.checked)).toString();
    this.setState({ value: value.checked });
    this.props.onChange(checkedValue);
  };

  render() {
    const { className, label, ...rest } = this.props;
    const { value } = this.state;
    return (
      <div className={className}>
        <input
          {...rest}
          checked={value}
          onChange={this.onChange}
        />
          <div className="checkbox-label">
            <Label m={label} />
          </div>
      </div>
    );
  }
}

CheckBoxWithLabel.propTypes = {
  componentName: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

CheckBoxWithLabel.defaultProps = {
  componentName: 'CheckBoxWithLabel',
};
