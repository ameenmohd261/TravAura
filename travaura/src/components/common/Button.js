import React from 'react';
import '../../styles/buttons.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  disabled = false,
  loading = false,
  as: Component = 'button',
  className = '',
  ...props 
}) => {
  const buttonClass = `
    btn 
    btn-${variant} 
    btn-${size} 
    ${fullWidth ? 'btn-full' : ''}
    ${disabled ? 'btn-disabled' : ''}
    ${loading ? 'btn-loading' : ''}
    ${className}
  `;

  return (
    <Component className={buttonClass.trim()} disabled={disabled || loading} {...props}>
      {loading && <span className="btn-spinner"></span>}
      {children}
    </Component>
  );
};

export default Button;