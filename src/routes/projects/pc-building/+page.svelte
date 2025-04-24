<script lang="ts">
    import type { Project } from "$lib/types";
    import { _, locale, json } from "svelte-i18n";
    import ProjectDetail from "../components/ProjectDetail.svelte";

    let project: Project;
    $: {
        $locale;

        project = {
            url: "/projects/pc-building",
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
        };
    }
</script>

<ProjectDetail {project} />
