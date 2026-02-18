import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars =
      "MZIWELANGA01アイウエオカキクケコサシスセソMZIWELANGA01タチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(5, 10, 20, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradient effect - brighter at the front
        const gradient = ctx.createLinearGradient(x, y - 20, x, y);
        gradient.addColorStop(0, "rgba(0, 212, 255, 0.1)");
        gradient.addColorStop(0.8, "rgba(0, 212, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 1)");

        ctx.fillStyle = gradient;
        ctx.fillText(char, x, y);

        // Draw trailing characters
        for (let j = 1; j < 20; j++) {
          const trailY = y - j * fontSize;
          const opacity = 1 - j / 20;
          ctx.fillStyle = `rgba(0, 180, 230, ${opacity * 0.3})`;
          const trailChar =
            charArray[Math.floor(Math.random() * charArray.length)];
          ctx.fillText(trailChar, x, trailY);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default MatrixRain;
