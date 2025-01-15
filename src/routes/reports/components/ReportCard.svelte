<script lang="ts">
    import type { Report } from "$lib/types";
    import { formatDate } from "$lib/utils/formatters";
    import { _, locale } from "svelte-i18n";

    export let report: Report;
</script>

<article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <div class="p-6">
        <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-semibold">{report.title}</h3>
            <span class="text-sm text-gray-600 dark:text-gray-400">{formatDate(report.date, $locale)}</span>
        </div>
        <p class="text-gray-700 dark:text-gray-300 mb-4">{report.description}</p>
        <a
            href={`/reports/${report.filename}`}
            class="inline-flex items-center gap-2 text-primary hover:underline"
            download
        >
            {$_("reports.downloadButton")}
        </a>
    </div>
</article>
