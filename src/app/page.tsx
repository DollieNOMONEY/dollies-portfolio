import Image from "next/image";
import HomePage from "@/sections/HomePage";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

export default function Home() {
  return (
    <HomePage/>
  );
}