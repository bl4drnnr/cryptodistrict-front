import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { getStaticPaths, makeStaticProps } from '@lib/getStatic';

interface TermsAndConditionsProps {
  locale: string
}

const TermsAndConditions = ({ locale }: TermsAndConditionsProps) => {
  const { t } = useTranslation();

  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`${locale}${path}`);
  };
  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:tac.title')}</title>
      </Head>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default TermsAndConditions;
