import { useState } from 'react';
import type { FC } from 'react';
import { TextInput, PasswordInput, Paper, Title, Container, Button, Alert, Flex } from '@mantine/core';

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login: FC<LoginProps> = ({ onLoginSuccess }) => {
  const [error, setError] = useState<string>('');
  
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<LoginFormValues>>({});

  const validateForm = (values: LoginFormValues): boolean => {
    const errors: Partial<LoginFormValues> = {};
    
    if (!values.email || !/^\S+@\S+$/.test(values.email)) {
      errors.email = 'Invalid email';
    }
    
    if (!values.password || values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (values: LoginFormValues) => {
    const validEmail = import.meta.env.VITE_LOGIN_EMAIL;
    const validPassword = import.meta.env.VITE_LOGIN_PASSWORD;

    if (values.email === validEmail && values.password === validPassword) {
      setError('');
      onLoginSuccess();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Flex mih="100vh" align="center" justify="center">
      <Container size={420} my={40}>
        <Title ta="center" order={1}>
          Welcome back
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {error && (
            <Alert color="red" mb="md">
              {error}
            </Alert>
          )}

        <form onSubmit={(e) => {
            e.preventDefault();
            if (validateForm(formValues)) {
              handleSubmit(formValues);
            }
          }}>
          <TextInput
            label="Email"
            placeholder="you@example.com"
            required
            value={formValues.email}
            error={formErrors.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            value={formValues.password}
            error={formErrors.password}
            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
          />
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
    </Flex>
  );
};