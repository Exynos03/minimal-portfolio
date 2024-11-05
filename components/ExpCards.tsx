"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardList,
  CardListItem,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "July 2023 — Present",
    currentPosition: "Software Development Engineer 1",
    place: "Lean Platform Technologies",
    previousPositions: ["Previous positions - Associate Software Engineer"],
    descriptionPoints: [
      "I drove key improvements for The Product Platform (3.5K MAU) and KhamBee, a creator-focused SaaS",
      "Redesigning account management cut drop-offs by 28% and optimizations like code-splitting reduced load times by 8%",
      "Using React Query and Framer Motion, I boosted conversions by 5% and reduced crashes by 48%",
      "In a two-member team, I built an A/B test tool in 4 weeks",
      "Led a 4-member team to deliver high-impact features, including Google Calendar integration for slot booking",
      "Also managed frontend deployments, ensuring stable and efficient system releases"
    ],
      // " , . . , enabled seamless PhonePe payments, and  I .",
    skills: [
      "React Query",
      "Framer Motion",
      "TypeScript",
      "NextJs",
      "AWS",
      "Linux",
      "Design Systems",
      "Team Leadership",
    ],
  },
  {
    timeline: "Apr 2023 — June 2023",
    currentPosition: "Full Stack Intern",
    place: "Lean Platform Technologies",
    previousPositions: [""],
    descriptionPoints:
      ["Launched a high-performance Next.js web app with Tailwind CSS and Redux", 
      "Integrated secure end-to-end payment processing",
      "Built a Node.js/MongoDB backend for a student community platform",
      "Created a helpline portal to  connect students with experts using google calendar, payment modules and made a dashboard to handle the same"
    ],
    skills: [
      "Redux",
      "NodeJs",
      "MongoDB",
      "NextJs",
      "ExpressJs",
      "VPS"
    ],
  }
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full lg:w-1/2 p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardList>
                {job.descriptionPoints.map( (points, index) => (
                  <CardListItem key={index} className="py-2 text-muted-foreground">
                    {points}
                  </CardListItem>
                ))}
              </CardList>
              {/* <CardDescription >
                {job.description}
              </CardDescription> */}
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-6 mt-12">
        <a
          href="/Sumit Ghosh Resume .pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
