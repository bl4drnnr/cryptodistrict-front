import { useRouter } from 'next/router';

import { FooterProps } from '@components/Footer/Footer.interface';
import { Box, Container, NavigationButtons, NavigationLink } from '@styles/Footer.style';

export const Footer = ({ translate, locale }: FooterProps) => {
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <Container>
      <Box>
        <NavigationButtons>
          <NavigationLink onClick={() => handleRedirect('/')}>
            {translate('components:footer.home')}
          </NavigationLink>
          <NavigationLink onClick={() => handleRedirect('/about')}>
            {translate('components:footer.about')}
          </NavigationLink>
          <NavigationLink onClick={() => handleRedirect('/terms-and-conditions')}>
            {translate('components:footer.tac')}
          </NavigationLink>
        </NavigationButtons>
        <NavigationLink>
          {translate('components:footer.copy')} &copy; {translate('components:footer.right')}
        </NavigationLink>
      </Box>
    </Container>
  );
};
