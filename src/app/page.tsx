import Header from "@/components/ui/Header";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      <Header />

      {/* 💬 Headline & Text OUTSIDE the wavy background */}
      <div className="text-center mt-40 z-30 relative">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-orange-600">
          Coming Soon
        </h1>
        <p className="text-base md:text-lg mt-4 text-black font-normal inter-var">
          We're working on something awesome. Stay tuned!
        </p>
      </div>

      {/* 🌊 Wavy background underneath */}
      <WavyBackground className="max-w-4xl mx-auto pb-40 flex flex-col items-center z-10" />

      {/* 🍺 Beer mug image at the bottom center */}
      <Image
        width={400}
        height={300}
        src="/Glass.png"
        alt="Glass"
        className="fixed bottom-0 top-100 left-1/2 transform -translate-x-1/2 z-20"
      />
    </div>
  );
}
