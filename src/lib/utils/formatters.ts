export function formatDate(date: Date, language: string | null | undefined = "en"): string {
    switch (language) {
        case "fr":
            return date.toLocaleDateString("fr-FR", { year: "numeric", month: "short" });
        case "en":
            return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
        default:
            return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
    }
}
