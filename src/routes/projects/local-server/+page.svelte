<script lang="ts">
    import type { Project } from "$lib/types";
    import { _, locale, json } from "svelte-i18n";
    import ProjectDetail from "../components/ProjectDetail.svelte";

    let project: Project;
    $: {
        $locale;

        project = {
            url: "/projects/local-server",
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
        };
    }
</script>

<ProjectDetail {project} />
