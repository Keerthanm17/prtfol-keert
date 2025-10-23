import { useCursor } from '@/hooks/use-cursor';

const CustomCursor = () => {
  const { position, isPointer } = useCursor();

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      
      {/* Cursor ring */}
      <div
        className="fixed w-8 h-8 rounded-full border-2 border-primary/30 pointer-events-none z-[9998] transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
