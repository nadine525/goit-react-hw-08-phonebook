import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerUser } from 'redux/auth/operations';
import {
  Form,
  Button,
  Label,
  Input,
  ParagrafCreate,
} from './RegistrationForm.styled';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'email':
        setEmail(event.currentTarget.value);
        break;
      case 'password':
        setPassword(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    console.log(user);

    dispatch(registerUser(user));

    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <>
      <ParagrafCreate>Fil the registration Form, please</ParagrafCreate>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label htmlFor="name"></Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button type="submit">Registration</Button>
      </Form>
    </>
  );
};

export default RegistrationForm;
