import { AuthNavDiv, StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavDiv>
      <StyledLink to="/register">Register</StyledLink>

      <StyledLink to="/login">Log In</StyledLink>
    </AuthNavDiv>
  );
};

export default AuthNav;
