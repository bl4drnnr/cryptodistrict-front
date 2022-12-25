import { useRouter } from 'next/router';

import { getStaticPaths, makeStaticProps } from '@lib/getStatic';

interface TermsAndConditionsProps {
  locale: string
}

const TermsAndConditions = ({ locale }: TermsAndConditionsProps) => {
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`${locale}${path}`);
  };
  return (
    <></>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components']);
export { getStaticPaths, getStaticProps };

export default TermsAndConditions;
