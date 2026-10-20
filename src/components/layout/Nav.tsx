"use client";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { profile } from "@/data/profile";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const ids = ["work", "research", "experience", "contact"];
      const found = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < 140 && rect.bottom > 140;
      });
      setActive(found ?? "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-colors",
        scrolled && "border-ink-line bg-ink/85 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex max-w-site items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="display text-sm tracking-[0.18em] text-mist focus-ring">
          AVN
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-mist-muted transition hover:text-signal focus-ring",
                active === item.id && "text-signal",
              )}
            >
              {item.label}
            </Link>
          ))}
          <span className="text-xs text-mist-faint">⌘K</span>
          <ThemeToggle />
          <a
            href={`mailto:${profile.emails.professional}`}
            className="rounded-full border border-ink-line px-3 py-1.5 text-sm text-mist hover:border-signal hover:text-signal focus-ring"
          >
            Email
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line focus-ring"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-ink-line bg-ink px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-mist"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
