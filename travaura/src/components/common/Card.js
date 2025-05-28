import React from 'react';
import '../../styles/card.css';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '',
  hoverable = false,
  ...props 
}) => {
  const cardClass = `
    card
    card-${variant}
    ${hoverable ? 'card-hoverable' : ''}
    ${className}
  `;

  return (
    <div className={cardClass.trim()} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-header ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardBody = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-body ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-footer ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt = '', aspectRatio = '16/9', className = '', ...props }) => {
  return (
    <div 
      className={`card-image ${className}`}
      style={{ '--aspect-ratio': aspectRatio }}
      {...props}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default Card;