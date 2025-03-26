"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";

const jobProjects = [
  {
    imagePath: "/tpp.webp",
    gifPath: "/TPP.gif" , 
    title: "The Product Platform - Edtech for PM",
    description:
      "The Product Platform is a learning hub for enhancing product management skills. Led a team of 3 developers, crafted multiple modules, made the app end to end and processes to launch flagship features like Porfolio, Interview questions, Loyalty tiers, Concept Cards, Live Project and Case study portal.",
    skills: [
      "ReactJs",
      "Redux",
      "Swiper",
      "JavaScript",
      "RestAPI",
      "Firebase",
    ],
    link: "https://theproductplatform.in/",
  },
  {
    imagePath: "/khambee.webp",
    gifPath: "/khambee.gif" ,
    title: "KhamBee - Website Builder",
    description:
      "KhamBee is a SaaS platform designed for creators to establish and manage their online presence. It offers tools to build personal websites, showcase work, and engage with audiences. Developed the core features, including user authentication, content management, payment gateways and firewall for paid and non paid users",

    skills: [
      "NextJs",
      "React Query",
      "OAuth",
      "Framer Motion",
      "GSAP",
      "NodeJs",
      "Shadcn/ui"
    ],
    link: "https://khambee.com/",
  },
  {
    imagePath: "/greetsu.webp",
    gifPath: "/greetsu.gif" ,
    title: "GreetsU - Video Messaging and Greetings Platform",
    description:
      "Greetsu is a platform for personalized video messaging, ideal for creating memorable event moments. It leverages Supabase for scalable data management, Google Authentication for secure logins, a card editor for easy customization, and unique link generation for seamless sharing of user-created wishes.",
    skills: [
      "React.js",
      "Framer",
      "Supabase",
      "Typescript",
    ],
    link: "https://greetsu.com/",
  }
];

export default function Projects() {
  const [isHover, setIsHover] = useState(-1)

  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer transition-all duration-300 ease-in-out"
            onMouseEnter={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(-1)}
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-red-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(239,68,68,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-red-200 transition-all duration-500 ease-in-out">
              <CardHeader className={`h-full w-full ${isHover === index ? "lg:w-[55%]" : "lg:w-1/2"} mb-4 p-0 transition-all duration-500 ease-in-out`}>
                <Image
                  src={ isHover === index ?  project.gifPath : project.imagePath }
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem] transition-all duration-500 ease-in-out"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-red-500 font-bold transition-colors duration-300 ease-in-out">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
