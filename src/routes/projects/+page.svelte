<script lang="ts">
    import type { Project } from "$lib/types";
    import ProjectCard from "./components/ProjectCard.svelte";
    import { _, locale, json } from "svelte-i18n";

    let projects: Project[] = [];
    $: {
        $locale; // subscribes to locale changes

        projects = [
            {
                title: $_("projects.items.aomail.title"),
                startDate: new Date("2024-01-01"),
                description: $_("projects.items.aomail.description"),
                advancedDescription: $_("projects.items.aomail.advancedDescription"),
                tasks: $json("projects.items.aomail.tasks") as string[],
                details: $json("projects.items.aomail.details") as string[],
                skills: $json("projects.items.aomail.skills") as string[],
                images: [
                    "/projects/aomail/aomail-landing.png",
                    "/projects/aomail/admin-dashboard.png",
                    "/projects/aomail/aomail-inbox.png",
                    "/projects/aomail/aomail-info.png",
                ],
                githubLink: "https://github.com/aomail-ai",
            },
            {
                title: $_("projects.items.server.title"),
                startDate: new Date("2023-10-01"),
                description: $_("projects.items.server.description"),
                advancedDescription: $_("projects.items.server.advancedDescription"),
                tasks: $json("projects.items.server.tasks") as string[],
                details: $json("projects.items.server.details") as string[],
                skills: $json("projects.items.server.skills") as string[],
                images: [
                    "/projects/local-server/duplicati-home.png",
                    "/projects/local-server/minecraft-server-config.png",
                    "/projects/local-server/server-disks.jpg",
                    "/projects/local-server/server-front.jpg",
                    "/projects/local-server/server-inside.jpg",
                    "/projects/local-server/server-port-forward.png",
                    "/projects/local-server/static-server-ipv4.png",
                ],
            },
            {
                title: $_("projects.items.pcBuilding.title"),
                startDate: new Date("2018-6-01"),
                description: $_("projects.items.pcBuilding.description"),
                advancedDescription: $_("projects.items.pcBuilding.advancedDescription"),
                tasks: $json("projects.items.pcBuilding.tasks") as string[],
                details: $json("projects.items.pcBuilding.details") as string[],
                skills: $json("projects.items.pcBuilding.skills") as string[],
                images: [
                    "/projects/pc-building/pc-1.jpg",
                    "/projects/pc-building/pc-2-1.jpg",
                    "/projects/pc-building/pc-2-2.jpg",
                    "/projects/pc-building/pc-3.jpg",
                    "/projects/pc-building/pc-4.jpg",
                ],
            },
            {
                title: $_("projects.items.laBrotique.title"),
                startDate: new Date("2022-10-01"),
                endDate: new Date("2023-9-01"),
                description: $_("projects.items.laBrotique.description"),
                advancedDescription: $_("projects.items.laBrotique.advancedDescription"),
                tasks: $json("projects.items.laBrotique.tasks") as string[],
                details: $json("projects.items.laBrotique.details") as string[],
                skills: $json("projects.items.laBrotique.skills") as string[],
                images: [
                    "/projects/la-brotique/consoles.jpg",
                    "/projects/la-brotique/games.jpg",
                    "/projects/la-brotique/console-repair.jpg",
                    "/projects/la-brotique/chargers.jpg",
                    "/projects/la-brotique/turnover.png",
                ],
            },
        ];
    }
</script>

<div class="px-4 py-8">
    <div class="grid gap-8 md:grid-cols-2">
        {#each projects as project}
            <ProjectCard {project} />
        {/each}
    </div>
</div>
