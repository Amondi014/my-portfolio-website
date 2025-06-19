'use client';

import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import ThemeToggle from './themeToggleButton';
import { Github } from 'lucide-react';
import DropdownMenu from './dropdownmenu';

const Header = () => (
  <header className="fixed w-full py-2 px-5 z-[100] md:p-4 backdrop-blur-md dark:text-zinc-50">
    <div className="mx-auto max-w-5xl">
      <nav className="flex items-center text-base relative">
        {/* Left/center content */}
        <div className="flex items-center gap-5">
          <ScrollLink to="header" spy smooth offset={-200}>
           
          </ScrollLink>
          <div className="items-center gap-6 hidden md:flex">
             <ScrollLink to="achievements" spy smooth>
              <button type="button" className="hover:underline underline-offset-4">
               Projects
              </button>  
            </ScrollLink>
            
             <ScrollLink to="blog" spy smooth>
              <button type="button" className="hover:underline underline-offset-4">
                Blog
              </button>  
            </ScrollLink>
            
             <ScrollLink to="achievements" spy smooth>
              <button type="button" className="hover:underline underline-offset-4">
                Achievements
              </button>  
            </ScrollLink>
        
            <Link
              href="https://github.com/XsidX/sid-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span className="hover:underline underline-offset-4">Source</span>
            </Link>
          </div>
          <DropdownMenu
            tags={['About', 'Contact', 'Projects', 'Resume', 'View Source']}
          />
        </div>

        {/* Only the ThemeToggle goes here and is pushed far right */}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
