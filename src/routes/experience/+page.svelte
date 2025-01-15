<script lang="ts">
    import type { Experience } from "$lib/types";
    import ExperienceTimeline from "./components/ExperienceTimeline.svelte";
    import { _, locale, json } from "svelte-i18n";

    let experiences: Experience[];
    $: {
        $locale;

        experiences = [
            {
                country: $_("experiences.itInternCesame.country"),
                company: "CESAME",
                role: $_("experiences.itInternCesame.role"),
                startDate: new Date("2023-02-01"),
                endDate: new Date("2023-02-28"),
                tasks: $json("experiences.itInternCesame.tasks") as string[],
                technologies: $json("experiences.itInternCesame.technologies") as string[],
                website: "https://www.ch-cesame-angers.fr/",
                logo: "/experiences/cesame-logo.png",
            },
            {
                country: $_("experiences.itTechnicianCesame.country"),
                company: "CESAME",
                role: $_("experiences.itTechnicianCesame.role"),
                startDate: new Date("2023-08-01"),
                endDate: new Date("2023-08-31"),
                tasks: $json("experiences.itTechnicianCesame.tasks") as string[],
                technologies: $json("experiences.itTechnicianCesame.technologies") as string[],
                website: "https://www.ch-cesame-angers.fr/",
                logo: "/experiences/cesame-logo.png",
            },
            {
                country: $_("experiences.developerInternCDS.country"),
                company: "Cognitive Design Systems",
                role: $_("experiences.developerInternCDS.role"),
                startDate: new Date("2024-06-01"),
                endDate: new Date("2024-08-31"),
                tasks: $json("experiences.developerInternCDS.tasks") as string[],
                technologies: $json("experiences.developerInternCDS.technologies") as string[],
                website: "https://www.cognitive-design-systems.com/cognitive-screening",
                logo: "/experiences/cds-logo.png",
            },
        ];
    }
</script>

<div class="flex items-center justify-center dark:bg-gray-900 overflow-hidden">
    <div class="px-4 py-8">
        <ExperienceTimeline {experiences} />
    </div>
</div>
