import { UserMenuDiv, Button, Paragraf } from './UserMenu.styled';

const UserMenu = () => {
  return (
    <UserMenuDiv>
      <Paragraf>Welcome, User</Paragraf>
      <Button type="button">LogOut</Button>
    </UserMenuDiv>
  );
};

export default UserMenu;
