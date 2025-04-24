<script lang="ts">
    import { _ } from "svelte-i18n";
    import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-svelte";
    import { onDestroy, onMount } from "svelte";
    import type { Project } from "$lib/types";
    import { locale } from "svelte-i18n";
    import { formatDate } from "$lib/utils/formatters";

    export let project: Project;

    let currentIndex = 0;
    export let autoPlay = true;
    let interval: NodeJS.Timeout;

    function nextImage() {
        currentIndex = (currentIndex + 1) % project.images.length;
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    }

    onMount(() => {
        if (autoPlay) {
            interval = setInterval(nextImage, 5000);
        }
    });

    onDestroy(() => {
        if (interval) clearInterval(interval);
    });
</script>

<div class="fixed inset-0 bg-black/50 z-40 overflow-y-auto">
    <div class="bg-white dark:bg-gray-900 min-h-screen mt-16">
        <div class="px-4 py-8 bg-white dark:bg-gray-900 rounded-lg">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-3xl font-bold text-black dark:text-white">{project.title}</h2>
                <a
                    href="/projects/"
                    class="text-black hover:text-black/75 dark:text-white dark:hover:text-white/75 p-2 text-2xl"
                >
                    <X size={24} />
                </a>
            </div>

            <div class="max-w-6xl mx-auto">
                <!-- Image Slider -->
                <div class="relative aspect-video mb-8 bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <img
                            src={project.images[currentIndex]}
                            alt="Project screenshot"
                            class="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <!-- Navigation Buttons -->
                <div class="flex justify-between items-center mt-4">
                    <button
                        class="bg-white/75 hover:bg-white dark:bg-black/50 dark:hover:bg-black/75 text-black dark:text-white p-2 rounded-full transition-colors duration-300"
                        on:click={prevImage}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <div class="text-sm text-black dark:text-white">
                        {currentIndex + 1} / {project.images.length}
                    </div>
                    <button
                        class="bg-white/75 hover:bg-white dark:bg-black/50 dark:hover:bg-black/75 text-black dark:text-white p-2 rounded-full transition-colors duration-300"
                        on:click={nextImage}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div class="grid md:grid-cols-3 gap-8 mt-8">
                    <div class="md:col-span-2">
                        <h3 class="text-xl font-semibold mb-4 text-black dark:text-white">{$_("projects.details")}</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-2">{project.advancedDescription}</p>
                        {#each project.details as detail}
                            <p class="mb-4 text-black dark:text-white">{detail}</p>
                        {/each}
                    </div>

                    <div>
                        <div class="sticky top-4">
                            <p class="text-lg text-black dark:text-white mb-6">
                                {formatDate(project.startDate, $locale)} - {project.endDate
                                    ? formatDate(project.endDate, $locale)
                                    : "Present"}
                            </p>

                            {#if project.links}
                                <div class="mb-4 rounded-lg space-y-2">
                                    {#each project.links as link}
                                        <a
                                            href={link.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
                                        >
                                            <ExternalLink />
                                            <span>{link.text}</span>
                                        </a>
                                    {/each}
                                </div>
                            {/if}

                            <h3 class="text-xl font-semibold mb-4 text-black dark:text-white">
                                {$_("projects.skills")}
                            </h3>
                            <div class="flex flex-wrap gap-2 mb-8">
                                {#each project.skills as skill}
                                    <span
                                        class="bg-gray-200 dark:bg-gray-700 px-3 py-1.5 rounded-full text-black dark:text-white"
                                    >
                                        {skill}
                                    </span>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
