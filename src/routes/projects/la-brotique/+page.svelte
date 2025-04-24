<script lang="ts">
    import type { Project } from "$lib/types";
    import { _, locale, json } from "svelte-i18n";
    import ProjectDetail from "../components/ProjectDetail.svelte";

    let project: Project;
    $: {
        $locale;

        project = {
            url: "/projects/la-brotique",
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
        };
    }
</script>

<ProjectDetail {project} />
