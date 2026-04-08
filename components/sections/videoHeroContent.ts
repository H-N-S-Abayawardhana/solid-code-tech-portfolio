/**
 * Shared copy layout + typography for Home / About / Services video heroes.
 * Keep these in sync so headlines, subcopy, and CTAs align across pages.
 */

export const VIDEO_HERO_HEADLINE_CLASS =
  "mt-0 text-left font-display text-[clamp(1.625rem,4.5vw+0.75rem,3.15rem)] font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.15rem]";

export const VIDEO_HERO_SUBTEXT_CLASS =
  "mt-5 max-w-2xl text-left text-[0.9375rem] leading-relaxed text-stone-200 sm:mt-6 sm:text-lg";

/** Outer band: vertical center, header offset, consistent bottom padding. */
export const VIDEO_HERO_CONTAINER_CLASS =
  "relative z-10 flex h-full min-h-0 items-center pt-[calc(4.5rem+env(safe-area-inset-top,0px))] pb-10 sm:pb-12 md:pt-24 md:pb-16 lg:pb-20";

/** Max width + left alignment for hero copy block. */
export const VIDEO_HERO_COPY_WRAP_CLASS =
  "relative w-full max-w-2xl text-left xl:max-w-3xl";

export const VIDEO_HERO_CTA_ROW_CLASS =
  "mt-16 flex w-full flex-col gap-3 sm:mt-20 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-24";

export const VIDEO_HERO_PRIMARY_BTN_CLASS =
  "inline-flex w-full min-h-11 min-w-0 justify-center !bg-white !text-[#000035] px-6 py-2.5 text-sm font-semibold shadow-sm hover:!bg-stone-100 hover:!text-[#000068] focus-visible:!ring-[#000068] focus-visible:ring-offset-stone-950 sm:w-auto sm:min-w-[10.5rem]";

export const VIDEO_HERO_SECONDARY_BTN_CLASS =
  "inline-flex w-full min-h-11 min-w-0 justify-center border-white/35 bg-white/5 px-6 py-2.5 text-sm font-medium text-white shadow-none backdrop-blur-[2px] hover:border-white/55 hover:bg-white/12 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 sm:w-auto sm:min-w-[10.5rem]";
