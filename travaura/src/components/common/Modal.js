import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../../styles/modal.css';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  size = 'medium',
  closeOnClickOutside = true,
  showCloseButton = true,
  className = ''
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (closeOnClickOutside && modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, closeOnClickOutside]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div 
        className={`modal modal-${size} ${className}`}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          {title && <h2 id="modal-title" className="modal-title">{title}</h2>}
          {showCloseButton && (
            <button 
              className="modal-close-button"
              onClick={onClose}
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;