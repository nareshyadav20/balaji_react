import React from 'react';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!userInfo) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="section-wrap page-enter" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="card" style={{ padding: '40px', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
                <div className="trustIcon" style={{ margin: '0 auto 20px', width: '80px', height: '80px', fontSize: '40px' }}>
                    👤
                </div>
                <h1 className="section-title">User Profile</h1>
                <p className="section-sub" style={{ marginBottom: '30px' }}>Manage your account and preferences</p>
                
                <div style={{ textAlign: 'left', background: 'var(--bg-section)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Username</label>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)' }}>{userInfo.username}</p>
                    </div>
                    <div>
                        <label style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Email Address</label>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)' }}>{userInfo.email}</p>
                    </div>
                </div>

                <div style={{ marginTop: '32px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button className="btn-primary">Edit Profile</button>
                    <button className="btn-outline" onClick={() => { localStorage.removeItem('userInfo'); window.location.reload(); }}>Sign Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
