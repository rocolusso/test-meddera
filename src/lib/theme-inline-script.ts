/** Key for light/dark persistence; must match ThemeToggle. */
export const THEME_STORAGE_KEY = 'meddera-theme' as const;

/** Inline script: apply `dark` on <html> before paint (matches ThemeToggle). */
export function getThemeBootstrapScript(): string {
  const k = JSON.stringify(THEME_STORAGE_KEY);
  return `(function(){try{if(localStorage.getItem(${k})==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;
}
