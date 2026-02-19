"use client";
import { useEffect } from 'react';
import '../lib/fontawesome';
import HomePage from "@/sections/HomePage";
import { ReactLenis, useLenis } from 'lenis/react'

export default function Home() {
  
  useEffect(() => {
    // 1. Prevent Ctrl/Cmd + or - and Ctrl/Cmd + 0
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && 
          (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
        e.preventDefault();
      }
    };

    // 2. Prevent Ctrl + Scroll Wheel (Desktop Zoom)
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    // 3. Prevent Pinch-to-Zoom (Trackpads/Mobile)
    const handleGesture = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('wheel', handleWheel, { passive: false });
    // This targets Safari and Chrome trackpad gestures specifically
    document.addEventListener('gesturestart', handleGesture);
    document.addEventListener('gesturechange', handleGesture);
    document.addEventListener('gestureend', handleGesture);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('gesturestart', handleGesture);
      document.removeEventListener('gesturechange', handleGesture);
      document.removeEventListener('gestureend', handleGesture);
    };
  }, []);

  // const lenis = useLenis();
  useLenis();

  return (
    <>
      <ReactLenis root />
      <HomePage/>
    </>
  );
}