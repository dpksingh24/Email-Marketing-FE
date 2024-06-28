import React from 'react';
import AuthForm from '../components/AuthForm';
import { register } from '../api/auth';

const Register = () => {
  const handleRegister = async (values) => {
    try {
      const response = await register(values);
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      alert('Registration successful');
      // Optionally, you can redirect the user after successful registration
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <AuthForm onSubmit={handleRegister} isLogin={false} />
    </div>
  );
};

export default Register;
