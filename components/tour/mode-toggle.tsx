'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-xl bg-background p-3 text-sm font-medium text-brand drop-shadow hover:bg-brand-light hover:text-brand lg:justify-start lg:px-3 lg:py-0"
        >
          <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:hidden dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="hidden h-6 w-6 rotate-90 scale-0 transition-all dark:block dark:rotate-0 dark:scale-100" />
          <span className="hidden sm:block">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
