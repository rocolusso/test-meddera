/*eslint-disable*/

declare global {
    interface Window {
        // @ts-ignore
        dataLayer?: object[];
    }
}

/**
 * Универсальный трекер событий для GTM → GA4
 * @param event - название события
 * @param params - любые параметры (action, target, label и т.д.)
 */
export function trackEvent(event: string, params: Record<string, any> = {}) {
    if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event,
            ...params,
        });
    }
}
