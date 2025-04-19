import Header from "@/components/ui/Header";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import { SparklesCore } from "../components/ui/sparkles";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />

      <div className="h-[40rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Coming Soon
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="#FFFFFF"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#EA580C"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <Image
          width={200}
          height={400}
          src="/Glass.png"
          alt="Glass"
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 z-20"
        />
    </div>
  );
}
