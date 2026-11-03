'use client';

import React, { useEffect, useState } from 'react';

function IpChecker() {
  const [ip, setIp] = useState('');

  useEffect(() => {
    fetch('/api/ip')
      .then((res) => res.json())
      .then((dataRes) => setIp(dataRes.ip));
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
