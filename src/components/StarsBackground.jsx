// import { useEffect, useRef } from "react";

// export default function StarsBackground() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let w = (canvas.width = window.innerWidth);
//     let h = (canvas.height = window.innerHeight);

//     const stars = Array.from({ length: 150 }, () => ({
//       x: Math.random() * w,
//       y: Math.random() * h,
//       r: Math.random() * 1.5,
//       s: Math.random() * 0.3 + 0.1,
//     }));

//     function animate() {
//       ctx.clearRect(0, 0, w, h);
//       ctx.fillStyle = "white";

//       stars.forEach((star) => {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
//         ctx.fill();

//         star.y += star.s;
//         if (star.y > h) {
//           star.y = 0;
//           star.x = Math.random() * w;
//         }
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     window.addEventListener("resize", () => {
//       w = canvas.width = window.innerWidth;
//       h = canvas.height = window.innerHeight;
//     });
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 -z-10 pointer-events-none"
//     />
//   );
// }
import { useEffect } from "react";

export default function StarsBackground() {
  useEffect(() => {
    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5,
      s: Math.random() * 0.5 + 0.2,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.s;
        if (star.y > canvas.height) star.y = 0;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas id="stars" className="fixed inset-0 -z-10   pointer-events-none" />
  );
}
