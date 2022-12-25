import { useRouter } from 'next/router';

import { FooterProps } from '@components/Footer/Footer.interface';
import { Box, Container, NavigationButtons, NavigationLink } from '@styles/Footer.style';

export const Footer = ({}: FooterProps) => {
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <Container>
      <Box>
        <NavigationButtons>
          <NavigationLink onClick={() => handleRedirect('/')}>Home</NavigationLink>
          <NavigationLink onClick={() => handleRedirect('/about')}>About</NavigationLink>
          <NavigationLink onClick={() => handleRedirect('/terms-and-conditions')}>T&A</NavigationLink>
        </NavigationButtons>
        <NavigationLink>
          Copyright &copy; 2022. All right reserved
        </NavigationLink>
      </Box>
    </Container>
  );
};
