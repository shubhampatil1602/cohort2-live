import { useState, useEffect } from 'react';

function App3() {
  const mousePointer = useMousePointer();
  return (
    <div>
      Your mouse position is x: {mousePointer.x} y: {mousePointer.y}
    </div>
  );
}

function useMousePointer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}

export default App3;
