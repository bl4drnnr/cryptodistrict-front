import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import GlobalLayout from '@layouts/Global.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { ImageWrapper, LinkWrapper } from '@styles/coming-soon';
import { Container, Content, Link, Title } from '@styles/error.style';

interface ComingSoonProps {
  locale: string;
}

const ComingSoon = ({ locale }: ComingSoonProps) => {
  const { t } = useTranslation();

  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:comingSoon.title')}</title>
      </Head>
      <GlobalLayout>
        <Container className={'center'}>
          <Title>{t('pages:comingSoon.pageTitle')}</Title>
          <Content>{t('pages:comingSoon.content')}</Content>
          <LinkWrapper>
            <Link
              onClick={() => handleRedirect('/')}
            >{t('pages:comingSoon.link')}</Link>
          </LinkWrapper>
          <ImageWrapper>
            <Image src={'/img/women-web-developer-with-laptop.svg'} alt={'women-web-developer-with-laptop'} width={500} height={500} />
          </ImageWrapper>
        </Container>
      </GlobalLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default ComingSoon;
