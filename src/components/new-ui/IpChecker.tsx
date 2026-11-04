'use client';

import React, { useEffect, useState } from 'react';

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

function IpChecker() {
  const [ip, setIp] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/ip', { signal: controller.signal })
      .then((res) => res.json())
      .then((dataRes) => setIp(dataRes.ip))
      .catch(() => {});
    return () => controller.abort();
  }, []);

  useEffect(() => {
    (window as GtagWindow).gtag?.('event', `ClientIP: ${ip}`, {
      action: 'firstVisit',
    });
  }, [ip]);
  return (
    <div />
  );
}

export default IpChecker;
