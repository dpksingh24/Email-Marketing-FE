import React from 'react';
import { login } from '../api/auth';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async (values) => {
        try {
            const response = await login(values);
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            navigate('/dashboard')
        } catch (error) {
            alert('Error logging in');
        }
    };

    return (
        <div>
        <h1>Login</h1>
        <AuthForm onSubmit={handleLogin} isLogin={true} />
        </div>
    );
};

export default Login;
