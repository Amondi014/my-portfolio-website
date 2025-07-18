'use client';

import React, { useEffect } from 'react';
import { useAnimation, motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import SectionHeading from './sectionHeading';
import Skills from './skills';
// import Projects from '../components/projects/project';
import ShadowBlock from '../components/shadowBlock'
import ProjectsHeading from '../components/projectsHeading';
import Contact from '../components/contact/index';
import Article from './article';
import StickyNav from './chat/sticky-nav';

const Home = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    }
  }, [controls, inView]);

  return (
    <Article>
      <StickyNav />
      <div className="flex flex-col items-center md:flex-row my-8 md:my-14" id="header">
        <div className="self-start text-zinc-900 dark:text-zinc-100 transition duration-500 ease-in-out">
          <h2 className="text-3xl  font-semibold font-mplus">
            Edith Amondi
          </h2>
          <p> Digital Nomad; Software Developper; Blogger; Life-Long-Learner </p>
        </div>
        <div className=" flex flex-col ml-auto mt-4 md:mt-0 md:ml-6  ">
          <div className="border-teal-900/40 border-2 rounded-full w-24 h-24  inline-block overflow-hidden">
            <Image
              src="/me.jpg"
              alt="Edith Amondi"
              width={100}
              height={100}
            />
          </div>
        </div>

      </div>
      <section className="mt-6">
        <SectionHeading>Introduction</SectionHeading>
        <p className="mb-6 dark:text-zinc-100 text-zinc-900 transition duration-500 ease-in-out">
          &nbsp;&nbsp;&nbsp;I approach development the way I approach a good story—with intention, structure, and an eye for meaning. I care about clean, functional code, but I also care about how it feels to use what I build. Every product is a narrative: it has a purpose, a flow, and a user at its center. I'm drawn to thoughtful design, human-centered solutions, and the quiet elegance of things that just work.
        </p>
      </section>
      <section className="mt-6" id="works">
        <SectionHeading>Skills</SectionHeading>
        <Skills />
      </section>
       {/* <section className="mt-8">
        <ProjectsHeading />
        <Projects />
      </section>
      <motion.section
        id="contact"
        className="my-12 md:my-24"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.7, type: 'ease' }}
      >
         <div className="relative mb-3">
          <SectionHeading overlay className="text-5xl md:text-8xl text-center">Contact</SectionHeading>
          <ShadowBlock />
        </div>
        <div className="flex flex-col md:gap-3 justify-center text-center items-center text-zinc-900 dark:text-zinc-50 md:text-4xl font-semibold transition duration-500 ease-in-out">
          <p> And that&apos;s a wrap! </p>
          <p>
            <span> I look foward to </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-teal-400 to-teal-600 transition duration-500 ease-in-out">
              chatting with you soon.
            </span>
          </p>
          <Contact />
        </div>
      </motion.section>  */}
    </Article>
  );
};

export default Home;