import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { HeaderContainer, Division } from './AppBar.styled';

const AppBar = () => {
  return (
    <HeaderContainer>
      <Division>
        <Navigation />
        <UserMenu />
        <AuthNav />
      </Division>
    </HeaderContainer>
  );
};

export default AppBar;
