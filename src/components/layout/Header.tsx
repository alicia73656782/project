import React from 'react';
import { Accessibility } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

export function Header() {
  return (
    <header className="bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Accessibility className="h-8 w-8 text-light-accent dark:text-dark-accent" />
            <div>
              <h1 className="text-xl font-bold text-light-text dark:text-dark-text sm:text-2xl">
                Accessibility Audit Tool
              </h1>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary hidden sm:block">
                For Government Websites & Apps
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}