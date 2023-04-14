'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { profile } from '../../../public';
import { skills, skillsLearning } from '@/utils/constants';
import SkillCard from '../UI/SkillCard';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '50px' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div className="w-full flex flex-col md:flex-row justify-between gap-10">
        {/* Introduction */}
        <div className="w-full md:max-w-[600px] flex flex-col items-center md:items-start">
          <h1 className="text-lightColor font-titleFont text-3xl lg:text-5xl  mt-4">
            Pham Trung Nghia
          </h1>
          <h3 className="text-darkColor font-titleFont text-xl lg:text-2xl">
            Front-end developer
          </h3>
          <p className="text-darkColor font-bodyFont text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            dolore? Alias provident tempore eveniet, omnis quod expedita ad nemo
            quia pariatur tempora a sed in consequuntur porro voluptatem
            necessitatibus esse.
          </p>
          <div className="w-max group overflow-hidden">
            <Link href={'/about'} className="text-primaryColor text-xl">
              More about me
            </Link>
            <div className="w-full h-[2px] bg-primaryColor -translate-x-[110%] transition-all duration-300 group-hover:translate-x-0 "></div>
          </div>
          <Link href={'/projects'} className="btn-primary text-xl mt-4">
            Check out my projects
          </Link>
        </div>

        {/* Profile Photo */}
        <div className="shrink-0 flex items-center justify-center">
          <Image
            src={profile}
            alt="my photo"
            className="w-[200px] h-[200px] rounded-full object-cover"
          />
        </div>
      </div>
      {/* Skills */}
      <div className="w-full mt-4">
        <p className="text-xl text-darkColor mb-2">My skills</p>
        <ul className="flex flex-wrap gap-4 lg:justify-between justify-center">
          {skills.map((skill) => {
            return <SkillCard {...skill} />;
          })}
        </ul>
      </div>
      {/* I'm diving into... */}
      <div className="w-full mt-4">
        <p className="text-xl text-darkColor mb-2">I'm diving into...</p>
        <ul className="flex gap-4 lg:justify-start justify-center">
          {skillsLearning.map((skill) => {
            return <SkillCard {...skill} />;
          })}
        </ul>
      </div>
    </motion.div>
  );
};
export default Introduction;