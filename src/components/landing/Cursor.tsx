import { useEffect, useRef, useState } from "react";
import kenshoMark from "@/assets/kensho-mark.png";

export function Cursor() {
  const markRef = useRef<HTMLImageElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    let rx = 0, ry = 0, dx = 0, dy = 0;
    const onMove = (e: MouseEvent) => {
      dx = e.clientX; dy = e.clientY;
    };
    const loop = () => {
      // smooth trailing follow
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (markRef.current) {
        markRef.current.style.left = `${rx}px`;
        markRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    let raf = requestAnimationFrame(loop);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hover = t.closest("a, button, [data-cursor='hover']");
      markRef.current?.classList.toggle("is-hovering", !!hover);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;
  return <img ref={markRef} src={kenshoMark} alt="" aria-hidden className="cursor-mark" />;
}
