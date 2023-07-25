import { FcTwoSmartphones } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        <div>
          <FcTwoSmartphones />
          Phonebook
        </div>
      </NavLink>

      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;
