<script lang="ts">
    import type { Project } from "$lib/types";
    import { _, locale, json } from "svelte-i18n";
    import ProjectDetail from "../components/ProjectDetail.svelte";

    let project: Project;
    $: {
        $locale;

        project = {
            url: "/projects/aomail",
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
            links: [
                { text: "Github", link: "https://github.com/aomail-ai" },
                { text: "Landing page", link: "https://aomail.ai" },
                { text: "Blog", link: "https://info.aomail.ai" },
            ],
        };
    }
</script>

<ProjectDetail {project} />
