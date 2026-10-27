'use client';

/**
 * Animation of the pink "book" button. Rendered by every instance of BookCtaButton;
 * styled-jsx keeps one copy of identical global CSS.
 */
export function CtaAnimationStyles() {
  return (
    <style jsx global>{`
      @keyframes ctaFloat {
        0% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
        100% { transform: translateY(0); }
      }
      @keyframes ctaShine {
        0% { transform: translateX(0); }
        100% { transform: translateX(200px); }
      }
      @keyframes primaryCtaShineLoop {
        0% {
          transform: skewX(-25deg) translate3d(-180%, 0, 0);
          opacity: 0;
        }
        12% { opacity: 1; }
        42% {
          transform: skewX(-25deg) translate3d(320%, 0, 0);
          opacity: 0;
        }
        100% {
          transform: skewX(-25deg) translate3d(320%, 0, 0);
          opacity: 0;
        }
      }
      .primary-cta-button {
        animation: ctaFloat 4s ease-in-out infinite;
      }
      .primary-cta-shine-loop .primary-cta-shine-sweep {
        position: absolute;
        top: 0;
        left: 0;
        width: 55%;
        height: 100%;
        background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.42) 50%, rgba(255,255,255,0) 100%);
        transform: skewX(-25deg) translate3d(-180%, 0, 0);
        transform-origin: 0 50%;
        animation: primaryCtaShineLoop 2.5s ease-in-out infinite;
        pointer-events: none;
        will-change: transform, opacity;
      }
      .group:hover .animate-shine,
      .group:focus-visible .animate-shine {
        animation: ctaShine 0.8s ease forwards;
      }
      @keyframes dockCallPulse {
        0% { box-shadow: 0 0 0 0 rgba(0, 170, 45, 0.55); }
        70% { box-shadow: 0 0 0 14px rgba(0, 170, 45, 0); }
        100% { box-shadow: 0 0 0 0 rgba(0, 170, 45, 0); }
      }
      @keyframes dockCallShake {
        0%, 50%, 100% { transform: rotate(0deg); }
        10% { transform: rotate(-25deg); }
        20% { transform: rotate(14deg); }
        30% { transform: rotate(-9deg); }
        40% { transform: rotate(6deg); }
      }
      @keyframes ctaGlow {
        0%, 100% { box-shadow: 0 10px 28px rgba(236, 72, 153, 0.55), 0 0 0 0 rgba(236, 72, 153, 0.35); }
        50% { box-shadow: 0 10px 36px rgba(236, 72, 153, 0.8), 0 0 0 9px rgba(236, 72, 153, 0); }
      }
      /* Reception is closed: the book button glows stronger, the call button calms down. */
      .primary-cta-shine-loop[data-reception='closed'] {
        animation: ctaGlow 2.4s ease-in-out infinite;
      }
      .primary-cta-button.primary-cta-shine-loop[data-reception='closed'] {
        animation: ctaFloat 4s ease-in-out infinite, ctaGlow 2.4s ease-in-out infinite;
      }
      .dock-call[data-reception='closed'],
      .dock-call[data-reception='closed'] svg {
        animation: none;
      }
      .dock-call {
        animation: dockCallPulse 1.4s ease-out infinite;
      }
      .dock-call svg {
        animation: dockCallShake 1.2s ease infinite;
        transform-origin: 50% 50%;
      }
      @media (prefers-reduced-motion: reduce) {
        .dock-call,
        .dock-call svg {
          animation: none;
        }
        .primary-cta-shine-loop[data-reception='closed'],
        .primary-cta-button.primary-cta-shine-loop[data-reception='closed'] {
          animation: none;
          box-shadow: 0 10px 28px rgba(236, 72, 153, 0.55);
        }
        .primary-cta-button {
          animation: none;
        }
        .primary-cta-shine-loop .primary-cta-shine-sweep,
        .animate-shine {
          animation: none;
        }
      }
    `}</style>
  );
}
