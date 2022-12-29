import { useState } from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { Button } from '@components/Button/Button.component';
import { Input } from '@components/Input/Input.component';
import { Textarea } from '@components/Textarea/Textarea.component';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { Container, Content, InputFieldsWrapper, SendButtonWrapper, Title } from '@styles/contact.style';


interface ContactProps {
  locale: string;
}

const Contact = ({ locale }: ContactProps) => {
  const { t } = useTranslation();

  const [senderName, setSenderName] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const sendEmail = async () => {
    //
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:contact.title')}</title>
      </Head>
      <DefaultLayout locale={locale} translate={t}>
        <Container>
          <Title>{t('pages:contact.pageTitle')}</Title>
          <Content>{t('pages:contact.content')}</Content>
          <InputFieldsWrapper>
            <Input
              value={senderName}
              placeholder={t('pages:contact.nameRequest')}
              onChange={(e) => setSenderName(e.target.value)}
            />
            <Textarea
              value={emailBody}
              placeholder={t('pages:contact.emailRequest')}
              onChange={(e) => setEmailBody(e.target.value)}
            />
            <SendButtonWrapper>
              <Button
                disabled={!senderName || !emailBody}
                text={t('pages:contact.sendMessage')}
                fillButton={true}
                onClick={() => sendEmail()}
              />
            </SendButtonWrapper>
          </InputFieldsWrapper>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default Contact;
