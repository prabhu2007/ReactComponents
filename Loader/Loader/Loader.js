import PropTypes from 'prop-types';
import * as React from 'react';

/**
 * `Loader` component.
 * Loads spinner when prop 'loading' is true.
 * This component can be used as preloader for async actions.
 *
 * usage
 *     <Loader loading/>
 *
 * @param {string}className - Style of the component.
 * @param {bool}loading - When true spinner is loaded, in case of false children will be rendered
 * @param {string}loaderType - the type of loader with currently one supported value ('section').
 * @param {Element|Node}children - Children nodes to be rendered.
 * @returns {Element} Loader component.
 * @constructor
 */
const Loader = ({
  className, loaderType, loading, children,
}) => {
  const styleObj = loaderType === 'section' ? { position: 'relative' } : {};
  return (
    <div className={className}>
      {loading &&
        <div style={styleObj} className="loader-container">
          <div className="loader" />
        </div>
      }
      {!loading ? children : null}
    </div>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  loaderType: PropTypes.string,
  children: PropTypes.element,
};

Loader.defaultProps = {
  className: '',
  loaderType: '',
  children: null,
  loading: false,
};

export default Loader;
