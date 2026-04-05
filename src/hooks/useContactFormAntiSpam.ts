'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type BehaviorPayload = {
  mousemove: number;
  keydown: number;
  touchstart: number;
  pointerdown: number;
};

export function useContactFormAntiSpam() {
  const [website, setWebsite] = useState('');
  const [formEl, setFormEl] = useState<HTMLFormElement | null>(null);
  const mousemove = useRef(0);
  const keydown = useRef(0);
  const touchstart = useRef(0);
  const pointerdown = useRef(0);
  const firstInteractAt = useRef<number | null>(null);

  const markFirst = useCallback(() => {
    if (firstInteractAt.current == null) {
      firstInteractAt.current = Date.now();
    }
  }, []);

  const formRef = useCallback((node: HTMLFormElement | null) => {
    setFormEl(node);
  }, []);

  useEffect(() => {
    if (!formEl) {
      return;
    }
    const onMove = () => {
      markFirst();
      mousemove.current += 1;
    };
    const onKey = () => {
      markFirst();
      keydown.current += 1;
    };
    const onTouch = () => {
      markFirst();
      touchstart.current += 1;
    };
    const onPtr = () => {
      markFirst();
      pointerdown.current += 1;
    };
    formEl.addEventListener('mousemove', onMove);
    formEl.addEventListener('keydown', onKey);
    formEl.addEventListener('touchstart', onTouch, { passive: true });
    formEl.addEventListener('pointerdown', onPtr);
    return () => {
      formEl.removeEventListener('mousemove', onMove);
      formEl.removeEventListener('keydown', onKey);
      formEl.removeEventListener('touchstart', onTouch);
      formEl.removeEventListener('pointerdown', onPtr);
    };
  }, [formEl, markFirst]);

  const getSubmitTimeMs = useCallback(() => {
    const start = firstInteractAt.current ?? Date.now();
    return Date.now() - start;
  }, []);

  const getBehavior = useCallback((): BehaviorPayload => ({
    mousemove: mousemove.current,
    keydown: keydown.current,
    touchstart: touchstart.current,
    pointerdown: pointerdown.current,
  }), []);

  return {
    formRef,
    website,
    setWebsite,
    getSubmitTimeMs,
    getBehavior,
  };
}
