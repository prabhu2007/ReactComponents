import { translate as translator } from 'react-i18next';

/**
 * Simple helper for adding translation functionality
 *
 * @param {*} WrappedComponent - a React component
 * @param {*} namespace - translation namespace
 * @returns {*} the WrappedComponent with translations
 */
export const translate = (WrappedComponent, namespace = __I18N_NS__) =>
  translator(namespace)(WrappedComponent);
