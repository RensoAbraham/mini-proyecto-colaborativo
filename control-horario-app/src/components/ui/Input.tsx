import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, ...props }, ref) => {

        const baseStyles = 'w-full bg-slate-900 border border-slate-700 text-slate-50 rounded-lg px-4 py-2 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:bg-slate-800';
        const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';

        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`${baseStyles} ${errorStyles} ${className}`}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-red-500">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
