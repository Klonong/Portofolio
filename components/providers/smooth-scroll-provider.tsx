"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Support hash link navigation
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor?.hash) {
        e.preventDefault();
        const el = document.querySelector(anchor.hash);
        if (el) lenis.scrollTo(el as HTMLElement, { offset: -80 });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <>{children}</>;
}
