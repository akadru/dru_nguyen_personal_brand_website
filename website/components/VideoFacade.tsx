"use client";
import { useState } from "react";
import Image from "next/image";

type Props = {
  id: string;        // YouTube video id
  poster: string;    // self-hosted thumbnail
  kicker: string;    // event · format
  title: string;     // talk title
};

/**
 * Click-to-play video card ("facade"): shows a branded poster + lime play button,
 * and only loads the YouTube (privacy-enhanced) player on click — keeps the page
 * fast and on-brand. Used on the Press page for the Gradion stage talks.
 */
export default function VideoFacade({ id, poster, kicker, title }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <div
        className="relative aspect-video overflow-hidden rounded-2xl border"
        style={{ borderColor: "rgba(176,190,197,0.35)", background: "#000" }}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Play video: ${title}`}
          >
            <Image
              src={poster}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(10,27,36,0.12) 0%, rgba(10,27,36,0.5) 100%)" }}
            />
            <span
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110"
              style={{ background: "var(--brand-lime)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--brand-jungle)" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="mt-4 text-[10px] font-extrabold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>
        {kicker}
      </div>
      <h3 className="mt-2 text-lg font-extrabold leading-snug" style={{ color: "var(--brand-white)", letterSpacing: "-0.01em" }}>
        {title}
      </h3>
    </div>
  );
}
