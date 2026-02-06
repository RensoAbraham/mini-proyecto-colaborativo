import React, { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', fullWidth = false, ...props }, ref) => {

        const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary: 'bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700 focus:ring-indigo-400 rounded-lg',
            secondary: 'bg-slate-700 text-slate-50 hover:bg-slate-600 active:bg-slate-800 focus:ring-slate-500 rounded-lg',
            danger: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-400 rounded-lg',
            ghost: 'bg-transparent text-slate-400 hover:text-slate-50 hover:bg-slate-800 focus:ring-slate-500 rounded-lg',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg',
        };

        const widthClass = fullWidth ? 'w-full' : '';

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

        return (
            <button ref={ref} className={classes} {...props} />
        );
    }
);

Button.displayName = 'Button';

export { Button };
