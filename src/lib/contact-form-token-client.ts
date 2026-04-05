/**
 * User-facing copy when GET /api/form-token fails (Vercel env, Redis, secret).
 */

export function getFormTokenUnavailableMessage(
  locale: string,
  httpStatus: number,
): string {
  const ru = locale === 'ru';

  if (httpStatus === 429) {
    return ru
      ? 'Слишком много запросов к сервису. Подождите минуту и обновите страницу.'
      : 'Prea multe cereri. Așteptați un minut și reîmprospătați pagina.';
  }

  if (httpStatus === 503) {
    return ru
      ? 'Форма не настроена на сервере: в Vercel нужны переменные UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN и FORM_TOKEN_SECRET (от 16 символов). См. .env.example в проекте.'
      : 'Formularul nu e configurat pe server: în Vercel sunt necesare UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN și FORM_TOKEN_SECRET (min. 16 caractere). Vezi .env.example.';
  }

  if (httpStatus === 403) {
    return ru
      ? 'Запрос к сервису отклонён. Обновите страницу и попробуйте снова.'
      : 'Cererea a fost respinsă. Reîmprospătați pagina și încercați din nou.';
  }

  return ru
    ? 'Сервис временно недоступен. Попробуйте позже.'
    : 'Serviciul este temporar indisponibil. Încercați mai târziu.';
}
