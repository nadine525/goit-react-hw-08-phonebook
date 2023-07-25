import { FcTwoSmartphones } from 'react-icons/fc';

import { iconSize } from 'components/constans';
import { LinkDiv, StyledLink, NavigDiv } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavigDiv>
        <StyledLink to="/">
          <LinkDiv>
            <FcTwoSmartphones size={iconSize.extra} />
            Phonebook
          </LinkDiv>
        </StyledLink>

        <StyledLink to="/contacts">Contacts</StyledLink>
      </NavigDiv>
    </nav>
  );
};

export default Navigation;
