import { FcTwoSmartphones } from 'react-icons/fc';
import { iconSize } from 'components/constans';
import { LinkDiv, StyledLink, NavigDiv } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavigDiv>
        <StyledLink to="/">
          <LinkDiv>
            <FcTwoSmartphones size={iconSize.extra} />
            Phonebook
          </LinkDiv>
        </StyledLink>

        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </NavigDiv>
    </nav>
  );
};

export default Navigation;
