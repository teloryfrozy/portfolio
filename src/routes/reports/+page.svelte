<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import type { Report } from "$lib/types";
    import ReportCard from "./components/ReportCard.svelte";

    let reports: Report[] = [];
    $: {
        $locale; // subscribes to locale changes

        reports = [
            {
                title: $_("reports.items.ai.title"),
                date: new Date(2023, 1, 1),
                description: $_("reports.items.ai.description"),
                filename: "AI-report-01-2023.pdf",
            },
            {
                title: $_("reports.items.trigonometry.title"),
                date: new Date(2023, 12, 1),
                description: $_("reports.items.trigonometry.description"),
                filename: "proof-trigonometric-formulas-12-2023.pdf",
            },
            {
                title: $_("reports.items.latvia.title"),
                date: new Date(2023, 7, 1),
                description: $_("reports.items.latvia.description"),
                filename: "summer-camp-latvia-07-2023.pdf",
            },
            {
                title: $_("reports.items.network.title"),
                date: new Date(2023, 9, 1),
                description: $_("reports.items.network.description"),
                filename: "basic-network-toolkit-09-2023.pdf",
            },
        ];
    }
</script>

<div class="px-4 py-8">
    <h3 class="text-xl text-center text-gray-700 dark:text-gray-300 mb-8">
        {$_("reports.description")}
    </h3>
    <div class="grid gap-8 md:grid-cols-2">
        {#each reports as report}
            <ReportCard {report} />
        {/each}
    </div>
</div>
