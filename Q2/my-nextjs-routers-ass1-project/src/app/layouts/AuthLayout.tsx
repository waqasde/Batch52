import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuthLayout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="auth-content">{children}</div>
            <Footer />
        </div>
    );
};

export default AuthLayout;
