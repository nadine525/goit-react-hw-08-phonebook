import { useDispatch, useSelector } from 'react-redux';
import { UserMenuDiv, Button, Paragraf } from './UserMenu.styled';
import { selectUser } from 'redux/auth/selectors';
import { logOutUser } from 'redux/auth/operations';
import defaultAvatar from './images.png';

const styles = {
  avatar: {
    borderRadius: 50,
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const avatar = defaultAvatar;

  return (
    <UserMenuDiv>
      <img src={avatar} alt="avatar" width={30} style={styles.avatar} />
      <Paragraf>Welcome, {user.name} </Paragraf>
      <Button type="button" onClick={() => dispatch(logOutUser())}>
        LogOut
      </Button>
    </UserMenuDiv>
  );
};

export default UserMenu;
