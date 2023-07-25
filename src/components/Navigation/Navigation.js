import { FcTwoSmartphones } from 'react-icons/fc';

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
