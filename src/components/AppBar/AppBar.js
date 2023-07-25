import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { HeaderContainer } from './AppBar.styled';

const AppBar = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </HeaderContainer>
  );
};

export default AppBar;
