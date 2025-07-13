// FootSpaceImageModal.jsx
import React, { useEffect } from 'react';
import '../style/Modal.css';
import logo from '../assets/Image/Black and White Modern Coming Soon Instagram Post.png';

const FootSpaceImageModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-button" 
          onClick={onClose} 
          aria-label="Fermer la modale"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path 
              d="M18 6L6 18M6 6L18 18" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
          </svg>
        </button>
        
        <div className="image-container">
          <img 
            src={logo}	 
            alt="Terrain FootSpace" 
            className="modal-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default FootSpaceImageModal;