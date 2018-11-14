import * as React from 'react';
import { i18n } from '../../i18n';
import { IntlProvider } from 'react-intl';
import { I18nextProvider, translate } from 'react-i18next';

const LoadingStatus = (props) => {
  if (!props.tReady) {
    return null;
  }

  return props.children;
};

// TODO: Use getLocale instead of accessing local storage
export const withI18NextProviderHoc = (WrappedComponent) => {
  const TranslationLoadingStatusDetector =
    translate(__I18N_NS__)(LoadingStatus);

  class I18NextProviderHoc extends React.PureComponent {
    render() {
      return (
        <I18nextProvider i18n={i18n}>
          <IntlProvider locale={localStorage.getItem('i18nextLng') || 'en'}>
            <TranslationLoadingStatusDetector>
              <WrappedComponent {...this.props} />
            </TranslationLoadingStatusDetector>
          </IntlProvider>
        </I18nextProvider>
      );
    }
  }

  return I18NextProviderHoc;
};
