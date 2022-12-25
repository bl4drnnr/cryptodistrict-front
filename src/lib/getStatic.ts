import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import i18nextConfig from '@i18config';

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lang) => ({
    params: {
      locale: lang
    }
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
});

export async function getI18nProps(ctx: any, ns = ['pages', 'common', 'components']) {
  const locale = ctx?.params?.locale;
  const isProd = process.env.NODE_ENV === 'production';
  const url = isProd ? process.env.PRODUCTION_DATA_API_URL : process.env.LOCAL_DATA_API_URL;

  const availableEndpoints = ['post', 'user', 'todo'];

  const endpoints = await Promise.all(
    availableEndpoints.map(async (item) => {
      const res = await fetch(`${url}/${item}?count=true`);
      const data = await res.json();
      return { count: data.count, endpoint: item };
    })
  );

  return {
    ...(await serverSideTranslations(locale, ns)),
    endpoints,
    locale,
    url
  };
}

export function makeStaticProps(ns: string[]) {
  return async function getStaticProps(ctx: any) {
    return {
      props: await getI18nProps(ctx, ns)
    };
  };
}
