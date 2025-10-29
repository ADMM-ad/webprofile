import React, { useEffect, useState } from 'react';

/**
 * CustomCursor Component
 * Menampilkan kursor custom yang mengikuti pergerakan mouse
 * dengan efek hover yang halus pada elemen interaktif
 */
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    /**
     * Handler untuk mengupdate posisi kursor
     * @param {MouseEvent} e - Event mouse
     */
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    /**
     * Handler untuk mendeteksi hover pada elemen interaktif
     */
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    // Tambahkan event listener
    document.addEventListener('mousemove', updateCursorPosition);
    
    // Seleksi elemen interaktif untuk efek hover
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], .project-card, .skill-item'
    );
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <>
      {/* Dot cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Follower cursor */}
      <div 
        className={`cursor-follower ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default CustomCursor;