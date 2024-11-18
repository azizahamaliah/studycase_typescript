"use client";
import React from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'error' | 'success';
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children }: ButtonProps) => {
    const variantClasses: Record<string, string> = {
        primary: 'bg-blue-500 hover:bg-blue-600',
        secondary: 'bg-gray-500 hover:bg-gray-600',
        error: 'bg-red-500 hover:bg-red-600',
        success: 'bg-green-500 hover:bg-green-600'
    };

    const buttonClass = `${variantClasses[variant]} py-2 px-4 rounded-full text-white transition-colors duration-300 ease-in-out`;

    return (
        <button className={buttonClass}>
            {children}
        </button>
    );
};

export default Button;
