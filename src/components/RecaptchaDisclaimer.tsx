export default function RecaptchaDisclaimer({ locale }: { locale: string }) {
  const isRu = locale === 'ru';
  return (
    <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground">
      {isRu ? (
        <>
          Этот сайт защищён reCAPTCHA. Действуют
          {' '}
          <a
            className="underline text-foreground/80 transition-colors hover:text-brand-gold"
            href="https://policies.google.com/privacy"
            rel="noopener noreferrer"
            target="_blank"
          >
            Политика конфиденциальности
          </a>
          {' '}
          и
          {' '}
          <a
            className="underline text-foreground/80 transition-colors hover:text-brand-gold"
            href="https://policies.google.com/terms"
            rel="noopener noreferrer"
            target="_blank"
          >
            Условия использования
          </a>
          {' '}
          Google.
        </>
      ) : (
        <>
          Acest site este protejat de reCAPTCHA. Se aplică
          {' '}
          <a
            className="underline text-foreground/80 transition-colors hover:text-brand-gold"
            href="https://policies.google.com/privacy"
            rel="noopener noreferrer"
            target="_blank"
          >
            Politica de confidențialitate
          </a>
          {' '}
          și
          {' '}
          <a
            className="underline text-foreground/80 transition-colors hover:text-brand-gold"
            href="https://policies.google.com/terms"
            rel="noopener noreferrer"
            target="_blank"
          >
            Termenii de utilizare
          </a>
          {' '}
          Google.
        </>
      )}
    </p>
  );
}
