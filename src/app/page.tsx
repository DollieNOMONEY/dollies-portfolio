"use client";
import '../lib/fontawesome';
import HomePage from "@/sections/HomePage";
import { ReactLenis, useLenis } from 'lenis/react'

export default function Home() {
  // const lenis = useLenis();
  useLenis();

  return (
    <>
      <ReactLenis root />
      <HomePage/>
    </>
  );
}