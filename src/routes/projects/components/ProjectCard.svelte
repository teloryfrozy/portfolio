<script lang="ts">
    import { _ } from "svelte-i18n";
    import ImageSlider from "./ImageSlider.svelte";
    import { Eye } from "lucide-svelte";
    import type { Project } from "$lib/types";
    import { locale } from "svelte-i18n";
    import { formatDate } from "$lib/utils/formatters";

    export let project: Project;
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

        <a href={project.url} class="flex items-center gap-2 text-white bg-primary rounded-lg">
            <div
                class="px-4 py-2 absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
                <Eye size={20} class="m-2" />
                {$_("projects.viewDetails")}
            </div>
        </a>
    </article>
</div>
