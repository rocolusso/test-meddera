'use client';

import styles from '@/components/FloatingCallButton.module.css';

function pushPhoneClickEvent() {
  const w = window as Window & { dataLayer?: Array<Record<string, string>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'phone_click_fixed_1',
    button_name: 'animate_button',
    event_label: 'homepage',
  });
}

export default function FloatingCallButton() {
  const onClick = () => {
    pushPhoneClickEvent();
    window.location.href = 'tel:+37368550030';
  };

  return (
    <button
      aria-label="btn-call-trigger"
      onClick={onClick}
      type="button"
      className={styles.button}
      id="btnCallFixedTrigger"
    >
      <div className={styles.icon} aria-hidden>
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
          <path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1 1 0 01.98-.24c1.08.3 2.22.46 3.41.46a1 1 0 011 1V20a1 1 0 01-1 1C10.3 21 3 13.7 3 4a1 1 0 011-1h3.4a1 1 0 011 1c0 1.19.16 2.33.46 3.41a1 1 0 01-.24.98l-2 2.4z" />
        </svg>
      </div>
    </button>
  );
}
