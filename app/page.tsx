import Nav from "@/components/Nav";
import ExpCard from "@/components/ExpCards";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import ClientAura from "@/components/ClientAura";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = 'force-static';

export const metadata = {
  title: 'Britney Chinag',
  description: 'Personal portfolio website of Britney Chinag',
};

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-23 lg:py-0">
      <ClientAura />
      <div className="lg:flex lg:justify-between lg:gap-5">
        <Nav />
        <main className="flex flex-col pt-6 lg:pt-24 lg:w-full lg:py-24 gap-8">
          <About />
          <ExpCard />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
