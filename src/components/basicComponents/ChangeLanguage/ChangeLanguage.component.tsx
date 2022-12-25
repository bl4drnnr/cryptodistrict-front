import React from 'react';

import { useRouter } from 'next/router';

import { ChangeLanguageProps } from "@components/ChangeLanguage/ChangeLanguage.interface";
import { ChangeLanguageContainer, LanguageItem, LanguagesList, PickedLanguage } from "@styles/ChangeLanguage.style";

export const ChangeLanguage = ({ defaultLanguage, path }: ChangeLanguageProps) => {
  const router = useRouter();

  const [showLanguages, setShowLanguages] = React.useState(false);
  const [pickedLanguage, setPickedLanguage] = React.useState('');
  const [languages, ] = React.useState([{
    language: 'Polish',
    flag: '🇵🇱',
    prefix: 'pl'
  }, {
    language: 'Russian',
    flag: '🇷🇺',
    prefix: 'ru'
  }, {
    language: 'English',
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
          <LanguagesList>
            {languages.map(item => (
              <LanguageItem
                key={item.language}
                onClick={() => handleRedirect(item.prefix)}
              >
                {item.flag} {item.language}
              </LanguageItem>
            ))}
          </LanguagesList>
        ):  null}
      </ChangeLanguageContainer>
    </>
  );
};
