import Navigation from 'components/Navigation';
import { HeaderContainer } from './AppBar.styled';

const AppBar = () => {
  return (
    <HeaderContainer>
      <Navigation />
      {/* <UserMenu /> */}
      {/* <AuthNav /> */}
    </HeaderContainer>
  );
};

export default AppBar;
