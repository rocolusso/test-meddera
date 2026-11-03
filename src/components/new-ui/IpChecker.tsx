'use client';

import React, { useEffect, useState } from 'react';

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
    if ((window as any)?.gtag) {
      (window as any).gtag('event', `ClientIP: ${ip}`, {
        action: 'firstVisit',
      });
    }
  }, [ip]);
  return (
    <div />
  );
}

export default IpChecker;
