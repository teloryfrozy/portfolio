<script lang="ts">
    import type { Experience } from "$lib/types";
    import { formatDate } from "$lib/utils/formatters";
    import { Timeline, TimelineItem } from "flowbite-svelte";
    import { locale } from "svelte-i18n";

    export let experiences: Experience[];
</script>

<div class="py-4">
    <div class="flex space-x-8 min-w-max px-4">
        <Timeline order="vertical">
            {#each experiences as experience}
                <TimelineItem
                    title="{experience.company} - {experience.country}"
                    date="{formatDate(experience.startDate, $locale)} - {experience.endDate
                        ? formatDate(experience.endDate, $locale)
                        : 'Present'}"
                >
                    <svelte:fragment slot="icon">
                        <span
                            class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700"
                        >
                            <a href={experience.website} target="_blank">
                                <img
                                    src={experience.logo}
                                    alt={experience.logo}
                                    class="w-4 h-4 text-primary-600 dark:text-primary-400"
                                />
                            </a>
                        </span>
                    </svelte:fragment>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        <strong>{experience.role}</strong>
                    </p>
                    <ul class="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        {#each experience.tasks as task}
                            <li>{task}</li>
                        {/each}
                    </ul>
                    <div class="mt-2 grid grid-cols-4 gap-4">
                        {#each experience.technologies as tech}
                            <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-center">
                                {tech}
                            </span>
                        {/each}
                    </div>
                </TimelineItem>
            {/each}
        </Timeline>
    </div>
</div>
