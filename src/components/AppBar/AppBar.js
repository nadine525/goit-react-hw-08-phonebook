import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { HeaderContainer, Division } from './AppBar.styled';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderContainer>
      <Division>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Division>
    </HeaderContainer>
  );
};

export default AppBar;
