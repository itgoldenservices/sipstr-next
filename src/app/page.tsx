import Header from "@/components/ui/Header";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      <Header />

      <WavyBackground className="max-w-4xl mx-auto pb-40 flex flex-col items-center">
        <h1 className="transform -translate-y-1/2 w-xl text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center text-orange-600">
          Coming Soon
        </h1>
        <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
          We're working on something awesome. Stay tuned!
        </p>
      </WavyBackground>

      {/* Image outside the wavy div, positioned at bottom */}
      <Image
        width={400}
        height={300} // or whatever fits your image’s aspect ratio
        src="/Glass.png"
        alt="Glass"
        className="fixed top-90 bottom-0 left-1/2 transform -translate-x-1/2 z-20"
      />

    </div>
  );
}

