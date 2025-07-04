import React, { useEffect } from 'react';
import { useAnimation, motion, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';



const variants = {
  hidden: { opacity: 0, x: 0, y: 80 },
  enter: { opacity: 1, x: 0, y: 0 },
};

interface ProjectProps {
  project: {
    title: string;
    description: string;
    thumbnail: string;
    thumbnail2?: string;
    theme: string;
    type: string;
    sourceUrl?: string;
    liveUrl: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="relative grid grid-cols-6 grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:h-project rounded-md overflow-hidden"
      variants={variants}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.7, type: 'tween', ease: easeInOut }}
    >
      <div className={`absolute inset-0  opacity-75 z-10`} />
      <Image
        src="https://framerusercontent.com/images/0u1KOKQqa7zWlOeQzGyjGsYTIEU.png"
        alt = "image"
        fill
        objectFit="cover"
      />
      <div className="row-span-1 col-span-6 md:col-span-1 z-40 px-6 flex flex-col justify-between my-5 md:my-10 text-zinc-50 font-mplus">
        <h2 className="font-semibold md:text-lg mb-6 md:mb-0">Project Title</h2>
        <div className="flex flex-col">
          
          
          <p className="font-mplus md:text-lg mb-4 md:mb-8">{project.description}</p>
          <Link href={project.sourceUrl ? project.sourceUrl : project.liveUrl} target="_blank">
            <button className={`relative self-start bg-zinc-50  font-semibold p-3 text-xs rounded-lg text-center shadow-md hover:shadow-zinc-200/20 hover:shadow-lg transition ease-in duration-100`} type="button">
              {
                project.sourceUrl ? 'View Source Code' : 'View Live Project'
              }
            </button>
          </Link>
        </div>
      </div>
      <div className="relative row-span-1 col-start-2 col-span-5 md:col-span-1 z-20 rounded-tl-md overflow-hidden mt-3 md:mt-14">
        {
          project.type === 'default' && (
            <Image
              src={`/images/works/${project.thumbnail}`}
              alt={project.title}
              fill
              objectFit="cover"
            />
          )
        }
        {
          project.type === 'absolute' && (
            <Image
              src={`/images/works/${project.thumbnail}`}
              alt={project.title}
              width={600}
              height={800}
              className="absolute -bottom-8 md:-bottom-10 -right-8 md:r-0 object-cover drop-shadow-md"
            />
          )
        }
        {
          project.type === 'split' && (
            <div className="grid grid-rows-6 h-full gap-1">
              <div className="relative row-span-5 md:row-span-4">
                <Image
                  src={`/images/works/${project.thumbnail}`}
                  alt={project.title}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="relative row-span-1 md:row-span-2">
                <Image
                  src={`/images/works/${project.thumbnail2}`}
                  alt={project.title}
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          )
        }
      </div>
    </motion.div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    thumbnail2: PropTypes.string,
    theme: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string,
    liveUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;