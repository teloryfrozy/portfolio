<script lang="ts">
    import { _ } from "svelte-i18n";
    import ImageSlider from "./ImageSlider.svelte";
    import ProjectDetail from "./ProjectDetail.svelte";
    import { Eye } from "lucide-svelte";
    import type { Project } from "$lib/types";
    import { locale } from "svelte-i18n";
    import { formatDate } from "$lib/utils/formatters";

    export let project: Project;

    let showDetails = false;
</script>

<div class="relative group">
    <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full">
        <ImageSlider images={project.images} autoPlay={true} />

        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {formatDate(project.startDate, $locale)} - {project.endDate
                    ? formatDate(project.endDate, $locale)
                    : "Present"}
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

            <ul class="list-disc list-inside mb-4">
                {#each project.tasks as task}
                    <li class="text-gray-700 dark:text-gray-300">{task}</li>
                {/each}
            </ul>
        </div>

        <button class="flex items-center gap-2 text-white bg-primary rounded-lg" on:click={() => (showDetails = true)}>
            <div
                class="px-4 py-2 absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
                <Eye size={20} class="m-2" />
                {$_("projects.viewDetails")}
            </div>
        </button>
    </article>
</div>

{#if showDetails}
    <div class="fixed inset-0 bg-black/50 z-40 overflow-y-auto">
        <div class="bg-white dark:bg-gray-900 min-h-screen mt-16">
            <ProjectDetail {project} onClose={() => (showDetails = false)} />
        </div>
    </div>
{/if}
