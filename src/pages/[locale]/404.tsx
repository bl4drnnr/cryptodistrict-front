import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import GlobalLayout from '@layouts/Global.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { Container, Content, Link, Title } from '@styles/error.style';

interface ErrorPageProps {
  locale: string;
}

const ErrorPage = ({ locale }: ErrorPageProps) => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:error.title')}</title>
      </Head>
      <GlobalLayout>
        <Container>
          <Title>{t('pages:error.pageTitle')}</Title>
          <Content>{t('pages:error.content')}</Content>
          <Link
            onClick={() => handleRedirect('/')}
          >{t('pages:error.link')}</Link>
        </Container>
      </GlobalLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default ErrorPage;
