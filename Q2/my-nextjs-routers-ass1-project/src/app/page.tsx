import Image from "next/image";
import HomePage from './pages/index'; // Import the index.tsx component
import Products from "./products";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <HomePage /> {/* Render the index.tsx component */}
        <Products></Products>
      </div>
    </main>
  );
}
