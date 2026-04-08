"use client";

import Image from "next/image";
import { LazyVideo } from "lazyvid";
import { useEffect } from "react";

/** `lazyvid` keeps an internal ref; we target the element by id for playback-rate hooks. */
const VIDEO_HERO_DOM_ID = "solidcode-hero-video";

/** Same band height as home hero — keep pages visually aligned. Uses svh/dvh for mobile browser chrome. */
export const VIDEO_HERO_BAND_CLASS =
  "relative h-[min(78svh,820px)] min-h-[380px] max-h-[920px] w-full overflow-hidden sm:min-h-[460px] md:min-h-[520px]";

/** Matches `Header` bar + safe-area. Pulls the band under the transparent bar so video shows through. */
export const VIDEO_HERO_HEADER_OVERLAP_CLASS =
  "-mt-[calc(4rem+env(safe-area-inset-top,0px))] md:-mt-[calc(5rem+env(safe-area-inset-top,0px))]";

export const DEFAULT_VIDEO_PLAYBACK_RATE = 0.3;

type VideoHeroMediaProps = {
  videoSrc: string;
  posterSrc: string;
  /** Defaults to {@link DEFAULT_VIDEO_PLAYBACK_RATE}. */
  playbackRate?: number;
  prefersReducedMotion: boolean;
};

export function VideoHeroMedia({
  videoSrc,
  posterSrc,
  playbackRate = DEFAULT_VIDEO_PLAYBACK_RATE,
  prefersReducedMotion,
}: VideoHeroMediaProps) {
  useEffect(() => {
    if (prefersReducedMotion) return;
    const v = document.getElementById(
      VIDEO_HERO_DOM_ID,
    ) as HTMLVideoElement | null;
    if (!v) return;

    const applyRate = () => {
      v.defaultPlaybackRate = playbackRate;
      v.playbackRate = playbackRate;
    };

    applyRate();

    const enforceRate = () => {
      if (Math.abs(v.playbackRate - playbackRate) > 0.001) {
        applyRate();
      }
    };

    v.addEventListener("loadedmetadata", applyRate);
    v.addEventListener("loadeddata", applyRate);
    v.addEventListener("canplay", applyRate);
    v.addEventListener("playing", applyRate);
    v.addEventListener("ratechange", enforceRate);

    return () => {
      v.removeEventListener("loadedmetadata", applyRate);
      v.removeEventListener("loadeddata", applyRate);
      v.removeEventListener("canplay", applyRate);
      v.removeEventListener("playing", applyRate);
      v.removeEventListener("ratechange", enforceRate);
    };
  }, [prefersReducedMotion, playbackRate]);

  if (prefersReducedMotion) {
    return (
      <Image
        src={posterSrc}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    );
  }

  return (
    <LazyVideo
      key={videoSrc}
      id={VIDEO_HERO_DOM_ID}
      className="absolute inset-0 h-full w-full object-cover object-center"
      sources={[{ type: "video/mp4", src: videoSrc }]}
      autoPlay
      muted
      loop
      playsInline
      poster={posterSrc}
      preload="none"
      aria-hidden
    />
  );
}

/** Gradient + grid overlay — match home hero. */
export function VideoHeroDecorativeLayers() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25 md:from-black/75 md:via-black/40 md:to-black/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden
        style={{
          backgroundImage: `linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.06) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />
    </>
  );
}
