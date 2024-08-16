import React, { ReactNode, useRef } from 'react';

interface TiltCardProps {
    style?: React.CSSProperties;
    children?: ReactNode;
    classNames?: string;
  }
  
  const TiltCard: React.FC<TiltCardProps> = ({ style, children, classNames }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  let bounds: DOMRect;

  const rotateToMouse = (e: MouseEvent) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    card.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    const glow = card.querySelector('.glow') as HTMLDivElement;
    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      bounds = cardRef.current.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      document.removeEventListener('mousemove', rotateToMouse);
      cardRef.current.style.transform = '';
    //   cardRef.current.querySelector('.glow')!.style.backgroundImage = '';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`card flex items-center justify-center relative p-4 ${classNames}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div className="glow"></div>
      {children}
    </div>
  );
};

export default TiltCard;
