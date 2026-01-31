// src/components/Cursor.tsx
import React, { useEffect, useState } from "react";

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // On mount, place cursor at the center of the viewport
    if (typeof window !== "undefined") {
      setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) {
        setIsHovering(false);
        return;
      }

      // If hovering interactive elements, enlarge the outer ring
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Optional: keep center on resize until user moves mouse
    const handleResize = () => {
      // Only reposition to center if mouse hasn't moved from initial center yet.
      // If you want to always recenter on resize, uncomment the next line:
      // setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isHovering ? 1.5 : 1})`,
        }}
        className="fixed top-0 left-0 w-8 h-8 border border-[#E59173] rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-[#E59173] rounded-full cursor-blink" />
      </div>

      {/* Inner Dot */}
      <div
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
        className="fixed top-0 left-0 w-2 h-2 bg-[#E59173] rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
    </>
  );
};

export default Cursor;