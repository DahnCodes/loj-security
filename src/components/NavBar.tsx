"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
      if (event.key !== "Tab" || !menu.current) return;
      const items = Array.from(
        menu.current.querySelectorAll<HTMLElement>("a, button"),
      );
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    menuButton.current?.focus();
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f8f5ed] text-[#252923]">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-14"
      >
        <Link
          href="#home"
          aria-label="Lion of Judah Security, home"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aa8748]"
        >
          <Image
            src="/images/lojlogo.png"
            alt="Lion of Judah Security"
            width={160}
            height={54}
            priority
            className="h-auto w-[132px] sm:w-[156px]"
          />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-[#927139] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aa8748]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href="tel:+2348036262536"
          className="hidden items-center gap-2 border border-[#aa8748] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#aa8748] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aa8748] sm:inline-flex"
        >
          Call +234 803 626 2536 <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          ref={menuButton}
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(true)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[#cfc7b6] lg:hidden"
        >
          <Menu size={23} aria-hidden="true" />
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            aria-hidden="true"
            onClick={closeMenu}
            className="absolute inset-0 bg-[#171d19]/70"
          />
          <div
            id="mobile-navigation"
            ref={menu}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="absolute right-0 top-0 flex h-full w-[min(86vw,390px)] flex-col bg-[#f8f5ed] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#ded7c8] pb-6">
              <span className="text-sm font-bold uppercase tracking-[0.16em]">
                Menu
              </span>
              <button
                ref={closeButton}
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="flex h-11 w-11 items-center justify-center border border-[#cfc7b6]"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col gap-1 py-7">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-[#e5dfd2] py-4 text-xl font-medium focus-visible:outline-2 focus-visible:outline-[#aa8748]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href="tel:+2348036262536"
              onClick={closeMenu}
              className="mt-auto bg-[#aa8748] px-5 py-4 text-center text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aa8748]"
            >
              Call +234 803 626 2536
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
