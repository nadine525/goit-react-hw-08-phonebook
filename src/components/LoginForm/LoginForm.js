import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logInUser } from 'redux/auth/operations';
import { Form, Label, Button, ParagrafCreate, Input } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.currentTarget.name) {
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
    const user = { email, password };
    console.log(user);
    dispatch(logInUser(user));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <ParagrafCreate>Nice to see you again! Sign in, please.</ParagrafCreate>

      <Form onSubmit={handleSubmit} autoComplete="off">
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
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
};

export default LoginForm;
