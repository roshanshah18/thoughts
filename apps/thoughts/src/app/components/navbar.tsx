'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathName = usePathname();

  if (pathName.includes('auth')) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-gray-600 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-10">
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy-and-policy"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
          </div>

          {/* <div className="hidden md:flex md:items-center md:gap-4">
            <Button variant="outline" asChild className="font-medium">
              <Link href="/auth/login">Log in</Link>
            </Button>
            <Button
              variant="default"
              asChild
              className="rounded-full font-medium"
            >
              <Link href="/auth/register">Get Started</Link>
            </Button>
          </div> */}

          {/* Mobile menu button */}
          {/* <div className="md:hidden">
            <Button
              variant="link"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="space-y-1 px-6 pb-4 pt-2">
            <Link
              href="/about"
              className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/70 hover:bg-muted hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/70 hover:bg-muted hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/70 hover:bg-muted hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/70 hover:bg-muted hover:text-foreground"
            >
              Privacy
            </Link>
            {/* <div className="flex flex-col gap-3 pt-4">
              <Button
                asChild
                className="w-full rounded-full font-medium bg-transparent g"
              >
                <Link href="/auth/login">Log in</Link>
              </Button>
              <Button asChild className="w-full rounded-full font-medium">
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
}
