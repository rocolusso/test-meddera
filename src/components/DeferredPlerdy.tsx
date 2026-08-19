'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

/**
 * Plerdy's own install snippet (from the GTM Custom HTML tag it used to run
 * through) — kept byte-for-byte faithful to what Plerdy generates, including
 * the unused `_protocol` variable, so it stays comparable if ever re-checked
 * against Plerdy's dashboard-generated snippet.
 */
const PLERDY_BOOTSTRAP = `
var _protocol = "https:" == document.location.protocol ? "https://" : "http://";
_site_hash_code = "5b2cd96b263cdefd0364c9f80f3e4830", _suid = 75886, plerdyScript = document.createElement("script");
plerdyScript.setAttribute("defer", ""), plerdyScript.dataset.plerdymainscript = "plerdymainscript",
plerdyScript.src = "https://a.plerdy.com/public/js/click/main.js?v=" + Math.random();
var plerdymainscript = document.querySelector("[data-plerdymainscript='plerdymainscript']");
plerdymainscript && plerdymainscript.parentNode.removeChild(plerdymainscript);
try { document.head.appendChild(plerdyScript) } catch (t) { console.log(t, "unable add script tag") }
`;

/**
 * Loads Plerdy directly (no longer via GTM) after the browser is idle (or
 * first user interaction, or a timeout), so it does not compete with LCP/TBT.
 * See PLAN-PERF-02 — this replaces the GTM Custom HTML tag that used to load
 * Plerdy, letting gtm.js be dropped from RootShell entirely.
 */
export default function DeferredPlerdy() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId: number | undefined;
    let fallbackId: number | undefined;
    let interactionHandler: (() => void) | undefined;

    const cleanupInteraction = () => {
      if (!interactionHandler) return;
      window.removeEventListener('pointerdown', interactionHandler, true);
      window.removeEventListener('keydown', interactionHandler, true);
      window.removeEventListener('touchstart', interactionHandler, true);
      interactionHandler = undefined;
    };

    const run = () => {
      cleanupInteraction();
      setReady(true);
    };

    interactionHandler = () => run();
    window.addEventListener('pointerdown', interactionHandler, true);
    window.addEventListener('keydown', interactionHandler, true);
    window.addEventListener('touchstart', interactionHandler, true);

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 9500 });
    } else {
      fallbackId = window.setTimeout(run, 9500);
    }

    return () => {
      cleanupInteraction();
      if (idleId != null && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      }
      if (fallbackId != null) {
        window.clearTimeout(fallbackId);
      }
    };
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <Script
      id="plerdy-init"
      strategy="lazyOnload"
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: PLERDY_BOOTSTRAP }}
    />
  );
}
