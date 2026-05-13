export function trackEvent(event: string, data?: any) {
    console.log("[ANALYTICS EVENT]", event, data ?? {});
}