import { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

import Icons from "./Icons";
import Name from "./Name";

export default function Head() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const ctx = canvas.getContext("2d");

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      }
    }

    const particles = [];
    const numParticles = 100;
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 150})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#0f1d30] text-white min-h-screen px-4 md:px-10 lg:px-20 flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="flex flex-col items-center text-center max-w-2xl">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto my-6 md:my-10">
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-700 via-teal-300 to-teal-700"
            style={{ transform: `rotate(${rotation}deg)` }}
          ></div>
          <div className="absolute top-1.5 left-1.5 right-1.5 bottom-1.5 rounded-full overflow-hidden bg-white">
            <img
              src="https://portfolio-omega-three-15.vercel.app/assets/profile-BeORmnjr.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <Name/>
          <p className="text-base md:text-lg font-medium text-gray-300 px-2">
            I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more <br className="hidden md:block" /> interactive with web animations.
          </p>
        </div>
        <div className="icons">
          <Icons/>
        </div>
        <div className="flex gap-2 items-center py-3 mt-10 animate-bounce">
          <FaArrowDown /> <span>SCROLL DOWN</span>
        </div>
      </div>
    </div>
  );
}
