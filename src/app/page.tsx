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
    <div className="bg-white">
    <Header/>

      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center">
          Coming Soon
        </h1>
        <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
        We're working on something awesome. Stay tuned!
        </p>
        <Image
          width={200}
          height={400}
          src="/Glass.png"
          alt="Glass"
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/5 w-300 z-20"
        />
      </WavyBackground>
    </div>
  );
}
