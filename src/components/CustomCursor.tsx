import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX - 14,
        y: e.clientY - 14,
        duration: 0.3,
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.2 });
      gsap.to(follower, { scale: 0.8, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, { scale: 1, duration: 0.2 });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "var(--color-electric-cyan)",
        duration: 0.3,
      });
      gsap.to(follower, {
        scale: 1.5,
        borderColor: "var(--color-electric-cyan)",
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "var(--color-hot-pink)",
        duration: 0.3,
      });
      gsap.to(follower, {
        scale: 1,
        borderColor: "var(--color-hot-pink)",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const interactiveElements = document.querySelectorAll(
      "a, button, .interactive",
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} className="hidden lg:block"></div>
      <div
        id="custom-cursor-follower"
        ref={followerRef}
        className="hidden lg:block"
      ></div>
    </>
  );
};

export default CustomCursor;
