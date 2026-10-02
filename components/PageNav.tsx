"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PAGES = [
  { href: "/", label: "1" },
  { href: "/course", label: "2" },
];

export default function PageNav({ current }: { current: 1 | 2 }) {
  const prev = current === 1 ? "/course" : "/";
  const next = current === 1 ? "/course" : "/";

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full bg-zinc-900 px-2 py-2 text-white shadow-xl">
      <Link
        href={prev}
        className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Link>

      <span className="min-w-10.5 text-center text-sm font-medium">
        {current} / 2
      </span>

      <Link
        href={next}
        className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}
