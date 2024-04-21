import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Layout {
    children?: React.ReactNode;
}
const MainLayout: React.FC<Layout> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
