export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const revealViewport = {
  once: true,
  amount: 0.35,
} as const;

export function revealProps(
  shouldReduceMotion: boolean | null,
  options: {
    delay?: number;
    duration?: number;
    y?: number;
  } = {},
) {
  const { delay = 0, duration = 0.68, y = 28 } = options;

  return {
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    whileInView: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: revealViewport,
    transition: { duration, delay, ease: premiumEase },
  };
}

export const stackDefaults = {
  overlap: 48,
  incomingY: 40,
  outgoingY: -32,
  outgoingScale: 0.966,
  outgoingOpacity: 0.88,
  dimOpacity: 0.34,
  incomingEnd: "top 18%",
  outgoingEnd: "top 14%",
  scrub: 0.28,
} as const;
