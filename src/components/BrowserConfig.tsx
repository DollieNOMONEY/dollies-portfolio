"use client";
import { useEffect } from "react";
import { ReactLenis } from "lenis/react";

export default function BrowserConfig() {
  useEffect(() => {
    // CONTEXT: prevent Ctrl/Cmd +/- and Ctrl/Cmd + 0
    const handleKeydown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0")
      ) {
        e.preventDefault();
      }
    };

    // CONTEXT: we prevent Ctrl + Scroll Wheel or desktop zoom
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    // CONTEXT: prevent Pinch-to-Zoom (trackpads/mobile)
    const handleGesture = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("wheel", handleWheel, { passive: false });
    // CONTEXT: Safari and Chrome trackpad gestures
    document.addEventListener("gesturestart", handleGesture);
    document.addEventListener("gesturechange", handleGesture);
    document.addEventListener("gestureend", handleGesture);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("gesturestart", handleGesture);
      document.removeEventListener("gesturechange", handleGesture);
      document.removeEventListener("gestureend", handleGesture);
    };
  }, []);

  return <ReactLenis root />;
}
