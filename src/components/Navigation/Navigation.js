import { FcTwoSmartphones } from 'react-icons/fc';
// import { NavLink } from 'react-router-dom';

import { iconSize } from 'components/constans';
import { NavigationDiv, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavigationDiv>
        <StyledLink to="/">
          <FcTwoSmartphones size={iconSize.extra} />
          Phonebook
        </StyledLink>

        <StyledLink to="/contacts">Contacts</StyledLink>
      </NavigationDiv>
    </nav>
  );
};

export default Navigation;
