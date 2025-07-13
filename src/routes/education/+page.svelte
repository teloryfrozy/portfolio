<script lang="ts">
    import type { Education } from "$lib/types";
    import { _, locale, json } from "svelte-i18n";
    import EducationTimeline from "./components/EducationTimeline.svelte";

    let educations: Education[];

    $: {
        $locale;

        educations = [
            {
                country: "France",
                organization: "ESAIP",
                degree: "Software Engineering",
                startDate: new Date("2022-09-01"),
                endDate: new Date("2027-09-01"),
                duration: "5 years",
                courses: [
                    "Abstract and Challenging Mathematics",
                    "Network",
                    "Linux Environment",
                    "Python & Java programming",
                    "Database and UML",
                ],
                website: "https://www.esaip.org",
                logo: "/educations/esaip-logo.png",
            },
            {
                country: "Lithuania",
                organization: "VILNIUS TECH",
                degree: "ERASMUS, Computer Software Engineering",
                startDate: new Date("2024-02-01"),
                endDate: new Date("2024-06-01"),
                duration: "4 months",
                courses: ["Java programming", "OOP principles", "Introduction to Statistics", "Database"],
                website: "https://vilniustech.lt/",
                logo: "/educations/vilnius-tech-logo.jpg",
            },
            {
                country: "Latvia",
                organization: "Riga Technical University",
                degree: "Computer Science Summer School",
                startDate: new Date("2023-07-01"),
                endDate: new Date("2023-07-31"),
                duration: "1 month",
                courses: ["First time studying abroad", "Discovery of Machine Learning"],
                website: "https://www.rtu.lv",
                logo: "/educations/rtu-logo.jpg",
            },
            {
                country: $_("educations.saintBenoit.country"),
                organization: $_("educations.saintBenoit.organization"),
                degree: $_("educations.saintBenoit.degree"),
                startDate: new Date("2019-09-01"),
                endDate: new Date("2022-06-01"),
                duration: "3 years",
                courses: $json("educations.saintBenoit.courses") as string[],
                website: "https://saintbenoitangers.org/",
                logo: "/educations/saint-benoit-logo.png",
            },
        ];
    }
</script>

<div class="flex items-center justify-center dark:bg-gray-900 overflow-hidden">
    <div class="px-4 py-8">
        <EducationTimeline {educations} />
    </div>
</div>
