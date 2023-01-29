import React from 'react';

import { useRouter } from 'next/router';

import { ChangeLanguageProps } from '@components/ChangeLanguage/ChangeLanguage.interface';
import { Modal } from '@components/Modal/Modal.component';
import {
  ChangeLanguageContainer,
  Flag,
  LanguageItem,
  LanguageName,
  LanguagesList,
  PickedLanguage
} from '@styles/ChangeLanguage.style';

export const ChangeLanguage = ({ defaultLanguage, path, translate }: ChangeLanguageProps) => {
  const router = useRouter();

  const [showLanguages, setShowLanguages] = React.useState(false);
  const [pickedLanguage, setPickedLanguage] = React.useState('');
  const [languages,] = React.useState([{
    language: translate('components:changeLanguage.pl'),
    flag: '🇵🇱',
    prefix: 'pl'
  }, {
    language: translate('components:changeLanguage.ru'),
    flag: '🇷🇺',
    prefix: 'ru'
  }, {
    language: translate('components:changeLanguage.en'),
    flag: '🇬🇧',
    prefix: 'en'
  }]);

  React.useEffect(() => {
    switch (defaultLanguage) {
      case 'en':
        setPickedLanguage('🇬🇧');
        break;
      case 'ru':
        setPickedLanguage('🇷🇺');
        break;
      case 'pl':
        setPickedLanguage('🇵🇱');
        break;
      default:
        setPickedLanguage('🇬🇧');
        break;
    }
  }, []);

  const handleRedirect = async (prefix: string) => {
    if (path.split('/').length === 2) await router.push(`/${prefix}`);
    else await router.push(`/${prefix}/${path.split('/').slice(-1)}`);
  };

  return (
    <>
      <PickedLanguage
        onClick={() => setShowLanguages(!showLanguages)}
      >{pickedLanguage}</PickedLanguage>
      <ChangeLanguageContainer>
        {showLanguages ? (
          <Modal description={translate('components:changeLanguage.langList')}
                 header={translate('components:changeLanguage.lang')} onClose={() => setShowLanguages(false)}>
            {languages.map(item => (
              <LanguageItem
                key={item.language}
                onClick={() => handleRedirect(item.prefix)}
              >
                <Flag>{item.flag}</Flag>
                <LanguageName>{item.language}</LanguageName>
              </LanguageItem>
            ))}
          </Modal>
        ) : null}
      </ChangeLanguageContainer>
    </>
  );
};
