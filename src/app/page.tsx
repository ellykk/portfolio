import { About } from "@/components/About";
import { CurrentFocus } from "@/components/CurrentFocus";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Highlights } from "@/components/Highlights";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4 pt-6 pb-4 sm:px-6 sm:pt-10">
      <main className="flex flex-col gap-5 sm:gap-6">
        <Header />

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-5 sm:gap-6">
            <About />
            <TechStack />
            <CurrentFocus />
          </div>
          <div className="flex flex-col gap-5 sm:gap-6">
            <Experience />
            <Highlights />
            <Projects />
          </div>
        </div>

        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
