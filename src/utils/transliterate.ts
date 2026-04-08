/**
 * Транслитерация румынских диакритических символов для URL.
 * Используется только для slugRo, чтобы избежать проблем с Next.js/Vercel.
 * 
 * Румынские диакритические символы:
 * ă → a
 * â → a  
 * î → i
 * ș → s
 * ț → t
 * 
 * Заглавные:
 * Ă → A
 * Â → A
 * Î → I
 * Ș → S
 * Ț → T
 */

const ROMANIAN_DIACRITICS_MAP: Record<string, string> = {
  'ă': 'a',
  'â': 'a',
  'î': 'i',
  'ș': 's',
  'ț': 't',
  'Ă': 'A',
  'Â': 'A',
  'Î': 'I',
  'Ș': 'S',
  'Ț': 'T',
};

/**
 * Транслитерирует румынские диакритические символы в ASCII для использования в URL.
 * 
 * @param text - Текст с румынскими диакритическими символами
 * @returns Транслитерированный текст без диакритики
 * 
 * @example
 * transliterateRomanian('botox-sarcină-alăptare-balti') // 'botox-sarcina-alaptare-balti'
 * transliterateRomanian('botox-bărbați-particularități-balti') // 'botox-barbati-particularitati-balti'
 */
export function transliterateRomanian(text: string): string {
  return text.replace(/[ăâîșțĂÂÎȘȚ]/g, (char) => ROMANIAN_DIACRITICS_MAP[char] || char);
}

/**
 * Проверяет, содержит ли текст румынские диакритические символы.
 * 
 * @param text - Текст для проверки
 * @returns true, если текст содержит румынские диакритические символы
 */
export function hasRomanianDiacritics(text: string): boolean {
  return /[ăâîșțĂÂÎȘȚ]/.test(text);
}
