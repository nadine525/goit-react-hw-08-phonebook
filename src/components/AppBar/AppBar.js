import { Navigation } from 'components/Navigation';
import { HeaderContainer } from './AppBar.styled';

export const AppBar = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </HeaderContainer>
  );
};
