/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I&#39;m a passionate Frontend Engineer with a focus on creating intuitive and performant web applications. 
          Currently at <span className="dark:text-white text-customBlack">Kasplo</span>, I&#39;m leading the UI/UX revamp by developing a custom component library 
          that&#39;s improving design consistency by 40% and accelerating development velocity by 35% across teams.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          My journey in tech has been marked by significant achievements: at <span className="dark:text-white text-customBlack">Lean Platform Technologies</span>, 
          I drove key improvements for The Product Platform (3.5K MAU) and KhamBee, a creator-focused SaaS. 
          I&#39;ve optimized application performance, cutting API latency by 65% and boosting page load times by 28%. 
          I&#39;ve also led teams to deliver high-impact features, including Google Calendar integration and A/B testing tools.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Beyond coding, I&#39;m a <span className="dark:text-white text-customBlack">problem solver</span> who thrives on technical challenges. 
          I&#39;m passionate about creating efficient, scalable solutions and mentoring other developers. 
          When I&#39;m not immersed in code, you&#39;ll find me exploring new technologies or contributing to open-source projects.
        </p>
      </div>
    </section>
  );
}
