import { FcTwoSmartphones } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
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
