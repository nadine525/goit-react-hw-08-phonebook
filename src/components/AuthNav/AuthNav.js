import { AuthNavDiv, StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavDiv>
      <StyledLink to="/register">Sing Up</StyledLink>

      <StyledLink to="/login">Sing In</StyledLink>
    </AuthNavDiv>
  );
};

export default AuthNav;
