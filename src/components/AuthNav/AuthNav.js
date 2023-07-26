import { AuthNavDiv, StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavDiv>
      <StyledLink to="/register">Sign Up</StyledLink>

      <StyledLink to="/login">Sign In</StyledLink>
    </AuthNavDiv>
  );
};

export default AuthNav;
