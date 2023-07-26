import { useSelector } from 'react-redux';
import { UserMenuDiv, Button, Paragraf } from './UserMenu.styled';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);

  return (
    <UserMenuDiv>
      <Paragraf>Welcome, {user.name}</Paragraf>
      <Button type="button">LogOut</Button>
    </UserMenuDiv>
  );
};

export default UserMenu;
