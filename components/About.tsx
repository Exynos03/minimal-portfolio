"use client";
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
          I&#39;m a 23 year old tech enthusiast with a guiding belief :  
          <span className="dark:text-white text-customBlack">
            {" "} technology should feel natural and intuitive.
          </span>{" "}
          That idea has shaped my work at <span className="dark:text-white text-customBlack">Lean Platform Technologies</span>, 
          where I&#39;ve built an EdTech platform &#40;<span className="dark:text-white text-customBlack">TPP</span>&#41; from scratch and led the creation of <span className="dark:text-white text-customBlack">KhamBee</span>, 
          a SaaS platform for creators. I love seeing complex ideas come together seamlessly and have managed projects end to end, 
          handling performance improvements single handedly &#40;and enjoying every bit of the challenge&#41;.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          In college, my roommates and I took a leap and co-founded <span className="dark:text-white text-customBlack">Harbour Stitch</span> an aspirational t-shirt brand that turned a tidy profit. 
          I also played co-lead for the technical writing team at <span className="dark:text-white text-customBlack">Ingenium</span>, our college magazine, 
          and worked as a developer for its website. Organizing college events? Been there, 
          done that stress included, free of charge. 
          {/* <a
            className="no-wrap text-primary dark:text-white"
            href="https://vela.exchange"
            target="blank"
            rel="noopener noreferrer"
          >
            Vela Exchange
          </a> */}
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
        Outside of code, I&#39;m a <span className="dark:text-white text-customBlack">serial traveler</span> with a soft spot for road trips on my bike, 
        and that friend who&#39;s always up for a good hangout. 
        When I&#39;m not immersed in tech, I&#39;m either sketching something or on an adventure somewhere.
        </p>
      </div>
    </section>
  );
}
