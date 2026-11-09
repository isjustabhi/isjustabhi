"use client";

import { BrandMark } from "@/components/layout/BrandMark";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { profile } from "@/data/profile";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Battery, Menu, Search, Wifi, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const menus = {
  File: [
    { label: "Home", href: "/" },
    { label: "Email", href: `mailto:${profile.emails.professional}` },
  ],
  Edit: [{ label: "Command palette", href: "palette" }],
  Go: [
    { label: "Work", href: "/projects" },
    { label: "Writing", href: "/writing" },
    { label: "Research", href: "/research" },
    { label: "Beyond the code", href: "/beyond-code" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<keyof typeof menus | null>(null);
  const [clock, setClock] = useState("—");
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      setClock(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!bar.current?.contains(event.target as Node)) setMenu(null);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  const openPalette = () => {
    window.dispatchEvent(new Event("isjustabhi:palette"));
    setMenu(null);
    setOpen(false);
  };

  return (
    <header className="fixed left-1/2 top-2 z-[100] w-[calc(100%-1rem)] max-w-7xl -translate-x-1/2 pt-[env(safe-area-inset-top,0px)] sm:top-4 sm:w-[calc(100%-2rem)]">
      <div className="island" ref={bar}>
        <div className="flex h-full items-center justify-between px-3 sm:px-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center gap-2 focus-ring rounded-md">
              <BrandMark size={18} className="rounded-md" />
              <span className="text-sm font-bold tracking-tight text-mist">Abhi</span>
            </Link>
            <div className="hidden items-center lg:flex">
              {(Object.keys(menus) as Array<keyof typeof menus>).map((label) => (
                <div key={label} className="relative">
                  <button
                    type="button"
                    className={cn(
                      "rounded-md px-3 py-1 text-[13px] font-medium text-mist transition hover:bg-black/[0.06] dark:hover:bg-white/[0.08]",
                      menu === label && "bg-black/[0.06] dark:bg-white/[0.08]",
                    )}
                    onClick={() => setMenu((value) => (value === label ? null : label))}
                  >
                    {label}
                  </button>
                  {menu === label ? (
                    <div className="absolute left-0 top-[calc(100%+10px)] min-w-[180px] overflow-hidden rounded-xl border border-ink-line bg-ink-elevated py-1 shadow-lg">
                      {menus[label].map((item) =>
                        item.href === "palette" ? (
                          <button
                            key={item.label}
                            type="button"
                            className="flex w-full items-center justify-between px-3 py-2 text-left text-[13px] text-mist hover:bg-black/[0.05] dark:hover:bg-white/[0.06]"
                            onClick={openPalette}
                          >
                            {item.label}
                            <span className="text-[10px] text-mist-faint">⌘K</span>
                          </button>
                        ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-3 py-2 text-[13px] text-mist hover:bg-black/[0.05] dark:hover:bg-white/[0.06]"
                            onClick={() => setMenu(null)}
                          >
                            {item.label}
                          </Link>
                        ),
                      )}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <nav className="mr-1.5 hidden items-center md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-transparent px-2.5 py-1 text-[13px] font-medium text-mist transition hover:border-ink-line hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <button
              type="button"
              className="hidden h-8 w-8 items-center justify-center rounded-lg text-mist hover:bg-black/5 dark:hover:bg-white/10 sm:flex"
              aria-label="Search"
              onClick={openPalette}
            >
              <Search size={15} />
            </button>
            <span className="hidden items-center gap-2 px-1 text-mist sm:flex" aria-hidden="true">
              <Wifi size={16} />
              <Battery size={18} />
            </span>
            <span className="ml-1 hidden cursor-default select-none text-[13px] font-medium tabular-nums tracking-tight text-mist sm:inline">
              {clock}
            </span>
            <button
              type="button"
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-lg bg-black/[0.08] text-mist transition hover:bg-black/[0.12] dark:bg-white/[0.12] dark:hover:bg-white/[0.18] md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="mt-2 overflow-hidden rounded-2xl border border-ink-line bg-ink-elevated p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-base text-mist"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/beyond-code" className="rounded-lg px-3 py-2 text-base text-mist" onClick={() => setOpen(false)}>
              Beyond
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
