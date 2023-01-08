import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useWindowDimensions } from '@hooks/useGetWindowDimensions.hook';
import GlobalLayout from '@layouts/Global.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { Container, Content, ImageWrapper, Link, LinkWrapper, Title } from '@styles/coming-soon.style';

interface ComingSoonProps {
  locale: string;
}

const ComingSoon = ({ locale }: ComingSoonProps) => {
  const { t } = useTranslation();
  const { height, width } = useWindowDimensions();
  const [pictureSize, setPictureSize] = React.useState(500);

  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  React.useEffect(() => {
    if (width && width < 600) setPictureSize(300);
    else setPictureSize(500);
  }, [width]);

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:comingSoon.title')}</title>
      </Head>
      <GlobalLayout>
        <Container>
          <Title>{t('pages:comingSoon.pageTitle')}</Title>
          <Content>{t('pages:comingSoon.content')}</Content>
          <LinkWrapper>
            <Link
              onClick={() => handleRedirect('/')}
            >{t('pages:comingSoon.link')}</Link>
          </LinkWrapper>
          <ImageWrapper>
            <Image src={'/img/women-web-developer-with-laptop.svg'} alt={'women-web-developer-with-laptop'} width={pictureSize} height={pictureSize} />
          </ImageWrapper>
        </Container>
      </GlobalLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default ComingSoon;
