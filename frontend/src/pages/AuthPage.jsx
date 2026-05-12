import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Set initial state based on path
    useEffect(() => {
        if (location.pathname === '/register') {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location.pathname]);

    // Redirect if already logged in
    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            navigate('/');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!isLogin && formData.password !== formData.confirmPassword) {
            return setError('Passwords do not match');
        }

        setLoading(true);
        
        const endpoint = isLogin ? '/auth/login' : '/auth/register';
        const payload = isLogin ? { 
            email: formData.email, 
            password: formData.password 
        } : { 
            email: formData.email, 
            password: formData.password,
            username: formData.username
        };

        try {
            let API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';
            
            // Ensure API_URL ends with /api but doesn't double it
            if (!API_URL.endsWith('/api')) {
                API_URL = API_URL.endsWith('/') ? `${API_URL}api` : `${API_URL}/api`;
            }

            console.log(`Attempting ${isLogin ? 'Login' : 'Register'} at: ${API_URL}${endpoint}`);
            console.log('Payload:', payload);

            const res = await axios.post(`${API_URL}${endpoint}`, payload, {
                withCredentials: true
            });
            
            console.log('Success:', res.data);
            localStorage.setItem('userInfo', JSON.stringify(res.data));
            navigate('/');
        } catch (err) {
            console.error('AUTH ERROR:', err);
            const errorMsg = err.response?.data?.message || err.message || 'Connection failed';
            setError(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container page-enter">
            <div className="auth-card">
                <div className="auth-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div className="auth-logo" style={{ marginBottom: '24px' }}>
                        <svg width="70" height="70" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="12" fill={isLogin ? "var(--primary)" : "var(--purple)"} />
                            <path d={isLogin ? "M12 20L18 26L28 14" : "M20 12V28M12 20H28"} stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h1 style={{ fontWeight: '900', fontSize: '36px', lineHeight: '1.1', color: 'var(--text-primary)', marginBottom: '8px' }}>Balaji Communication</h1>
                    <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{isLogin ? 'Sign in to your account' : 'Create your professional account'}</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {error && <div className="auth-error">{error}</div>}
                    
                    {!isLogin && (
                        <div className="form-group">
                            <label>Full Name</label>
                            <div className="input-wrapper">
                                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter your full name" 
                                    value={formData.username}
                                    onChange={handleChange}
                                    required={!isLogin}
                                />
                            </div>
                        </div>
                    )}

                    <div className="form-group">
                        <label>Email Address</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="name@example.com" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="••••••••" 
                                value={formData.password}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <div className="input-wrapper">
                                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    placeholder="Confirm your password" 
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required={!isLogin}
                                />
                            </div>
                        </div>
                    )}

                    <button type="submit" className="btn-primary auth-btn" style={{ background: isLogin ? 'var(--primary)' : 'var(--purple)' }} disabled={loading}>
                        {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
                    </button>
                </form>

                <div className="auth-footer">
                    {isLogin ? (
                        <>Don't have an account? <span style={{ color: 'var(--primary)', fontWeight: '600', cursor: 'pointer' }} onClick={() => { setIsLogin(false); navigate('/register'); }}>Create one</span></>
                    ) : (
                        <>Already have an account? <span style={{ color: 'var(--purple)', fontWeight: '600', cursor: 'pointer' }} onClick={() => { setIsLogin(true); navigate('/login'); }}>Sign In</span></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
