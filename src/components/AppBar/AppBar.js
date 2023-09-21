import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { RiSunLine, RiSparklingLine } from 'react-icons/ri';
import { useThemeContext } from '../../hooks/useTheme';
import { LIGHT } from '../constans/thems';
import { HeaderContainer, Division, ToggleIcon } from './AppBar.styled';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { iconSize } from '../constans';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { theme, onChangeTheme } = useThemeContext();
  const isThemeLight = theme === LIGHT;

  return (
    <HeaderContainer>
      <Division>
        <Navigation />

        <ToggleIcon onClick={onChangeTheme}>
          {isThemeLight ? (
            <RiSunLine size={iconSize.lg} />
          ) : (
            <RiSparklingLine size={iconSize.lg} />
          )}
        </ToggleIcon>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Division>
    </HeaderContainer>
  );
};

export default AppBar;
