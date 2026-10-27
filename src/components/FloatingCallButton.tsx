'use client';

import { usePathname } from 'next/navigation';

import ReceptionDot, { hasReceptionDot } from '@/components/cta/ReceptionDot';
import { useReceptionIndicator } from '@/components/cta/useReceptionIndicator';
import { getLocaleFromPath } from '@/components/lead/leadFormConstants';
import { CLINIC_TEL_HREF } from '@/lib/cta/keys';

/**
 * Desktop (≥md) green call button. A real tel: link: the click is counted once by TelClickTracker
 * from the data-cta-* attributes (event phone_click_fixed_1, source float_call). On phones the
 * call button is part of BottomDock.
 */
export default function FloatingCallButton() {
  const locale = getLocaleFromPath(usePathname() ?? '/');
  const reception = useReceptionIndicator();

  return (
    <a
      aria-label="btn-call-trigger"
      href={CLINIC_TEL_HREF}
      className="btn-call"
      id="btnCallFixedTrigger"
      aria-describedby={hasReceptionDot(reception) ? 'floatCallHours' : undefined}
      data-reception={reception ?? undefined}
      data-cta-event="phone_click_fixed_1"
      data-cta-source="float_call"
    >
      <div className="btn-call__ico" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
          <path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1 1 0 01.98-.24c1.08.3 2.22.46 3.41.46a1 1 0 011 1V20a1 1 0 01-1 1C10.3 21 3 13.7 3 4a1 1 0 011-1h3.4a1 1 0 011 1c0 1.19.16 2.33.46 3.41a1 1 0 01-.24.98l-2 2.4z" />
        </svg>
      </div>
      <ReceptionDot state={reception} locale={locale} hoursId="floatCallHours" className="right-[3px] top-[3px]" />
      <style jsx>{`
        .btn-call {
          background: #00aa2d;
          border: 2px solid #00aa2d;
          border-radius: 50%;
          box-shadow: 0 8px 10px rgba(0, 154, 22, 0.3);
          cursor: pointer;
          height: 70px;
          width: 70px;
          text-align: center;
          position: fixed;
          right: 50px;
          bottom: 100px;
          z-index: 999;
          transition: background-color 0.3s ease, border-color 0.3s ease;
          isolation: isolate;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
        }
        @media (max-width: 767px) {
          .btn-call {
            display: none;
          }
        }
        .btn-call::after {
          content: '';
          position: absolute;
          inset: -14px;
          border-radius: 9999px;
          border: 2px solid rgba(0, 170, 45, 0.35);
          opacity: 0;
          transform: scale(0.85);
          will-change: transform, opacity;
          pointer-events: none;
          animation: btnCallPulse 1400ms ease-out infinite;
        }
        /* Reception is closed: no pulse, no shaking. */
        .btn-call[data-reception='closed']::after {
          animation: none;
          opacity: 0;
        }
        .btn-call[data-reception='closed'] .btn-call__ico {
          animation: none;
          -webkit-animation: none;
        }
        .btn-call__ico {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: 1200ms ease 0s normal none 1 running shake;
          animation-iteration-count: infinite;
          -webkit-animation: 1200ms ease 0s normal none 1 running shake;
          -webkit-animation-iteration-count: infinite;
          color: white;
          font-size: 30px;
          padding-top: 5px;
          transition: color 0.3s ease;
        }
        .btn-call:hover {
          background-color: #fff;
        }
        .btn-call:hover .btn-call__ico {
          color: #38a3fd;
        }
        @media (prefers-reduced-motion: reduce) {
          .btn-call::after {
            animation: none;
          }
          .btn-call__ico {
            animation: none;
            -webkit-animation: none;
          }
        }
        @keyframes btnCallPulse {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          15% {
            opacity: 0.55;
          }
          100% {
            opacity: 0;
            transform: scale(1.35);
          }
        }
        @keyframes shake {
          0% {
            transform: rotateZ(0deg);
          }
          10% {
            transform: rotateZ(-30deg);
          }
          20% {
            transform: rotateZ(15deg);
          }
          30% {
            transform: rotateZ(-10deg);
          }
          40% {
            transform: rotateZ(7.5deg);
          }
          50% {
            transform: rotateZ(-6deg);
          }
          60% {
            transform: rotateZ(5deg);
          }
          70% {
            transform: rotateZ(-4.28571deg);
          }
          80% {
            transform: rotateZ(3.75deg);
          }
          90% {
            transform: rotateZ(-3.33333deg);
          }
          100% {
            transform: rotateZ(0deg);
          }
        }
      `}</style>
    </a>
  );
}
