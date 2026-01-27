"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Menu, X } from "lucide-react";
import useActiveSection from "@/hooks/useActiveSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "contact"
  ])

  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-primary transition-all ${isActive
        ? "active w-16 bg-foreground h-2"
        : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
        }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${isActive
        ? "text-foreground"
        : "text-muted-foreground group-hover:text-foreground"
        }`,
    };
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-100 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0">
        <div className="w-full flex items-center justify-between lg:justify-start">
          <Avatar className="w-24 lg:w-36 h-auto border-2 border-primary bg-secondary">
            <AvatarImage src="./avatar.webp" />
            <AvatarFallback className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-1 border-primary">
              SG
            </AvatarFallback>
          </Avatar>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <h1 className="text-[42px] font-bold lg:text-start">
          Hi, i&#39;m Sumit 👋
        </h1>
        <h2 className="text-xl lg:text-start">
          Adaptable Dev with a Team-Building Superpower!
        </h2>
        <p className="text-lg lg:text-start text-muted-foreground ">
          {/* Outside of programming, you&#39;ll find me scoring screamers in FIFA &#40;because my thumbs have dreams too&#41; or chasing the horizon on my bike probably thinking I&#39;m in a Fast & Furious scene, minus the explosions */}
          Outside of programming, you&#39;ll find me scoring goals in FIFA or chasing the horizon on my bike
        </p>
      </div>

      {/* Desktop Nav */}
      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {navItems.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(
              item.href
            );
            return (
              <li key={item.name} className="group">
                <a href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="flex flex-row gap-6 mt-6 lg:mt-0" >
        <Button variant="outline" size="icon" title="Github">
          <a
            href="https://github.com/Exynos03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon" title="LinkedIn">
          <a
            href="https://www.linkedin.com/in/sumit-ghosh01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>

      </ul>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm lg:hidden flex flex-col items-center justify-center gap-8"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 text-primary"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-8 w-8" />
            </Button>

            <nav>
              <ul className="flex flex-col items-center gap-8 text-2xl font-bold uppercase">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex gap-6 mt-8">
              <Button variant="outline" size="lg" title="Github">
                <a
                  href="https://github.com/Exynos03"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="outline" size="lg" title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/sumit-ghosh01/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
