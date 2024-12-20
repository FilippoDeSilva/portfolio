import { Metadata } from "next";
import Hero from "./components/Hero";
import Socials from "./components/Socials"

export const metadata: Metadata = {
  title: "Filippo | Full Stack Developer & AI Innovator",
  description: "Professional portfolio of Filippo showcasing expertise in Full Stack Development, Mobile Apps, and AI solutions.",
  icons: { icon: "/favicon.ico" },
};


export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 row-start-2 sm:items-start overflow-x-hidden">
        <Hero/>
        <Socials/>
    </div>
  );
}
