'use client'
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { useRouter } from 'next/navigation'
const About: React.FC = () => {
    const router = useRouter()
    return (
        
       
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    <h1>this is About Page</h1>
                    <button type="button" onClick={() => router.push('/')}>
                        Back to home
                    </button>
                </div>
              
                </main>
       
    );
};

export default About;
