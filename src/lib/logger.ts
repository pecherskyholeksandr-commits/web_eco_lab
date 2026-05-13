export function logError(message: string, context?: any) {
    console.error("[ERROR LOG]", {
        message,
        context,
        time: new Date().toISOString(),
    });
}