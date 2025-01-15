<script lang="ts">
    import type { Education } from "$lib/types";
    import { formatDate } from "$lib/utils/formatters";
    import { locale } from "svelte-i18n";
    import {
        Timeline,
        TimelineItem,
        TimelineSeparator,
        TimelineDot,
        TimelineConnector,
        TimelineContent,
        TimelineOppositeContent,
    } from "svelte-vertical-timeline";

    export let educations: Education[];
</script>

<Timeline position="alternate">
    {#each educations as education}
        <TimelineItem>
            <TimelineOppositeContent slot="opposite-content">
                <p>{formatDate(education.startDate, $locale)} - {formatDate(education.endDate, $locale)}</p>
                <p style="font-weight: bold; margin-bottom: 4px;">{education.organization}</p>
                <p style="font-style: italic; color: #555; font-weight: bold;">{education.degree}</p>
                <p style="font-style: italic; color: #888;">{education.country}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot
                    style={"width: 45px; height: 45px; background-color: #fff; border: none; display: flex; justify-content: center; align-items: center;"}
                >
                    <a href={education.website} target="_blank">
                        <img
                            src={education.logo}
                            alt={education.logo}
                            style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;"
                        />
                    </a>
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={"height: 150px;"}>
                <ul>
                    {#each education.courses as course}
                        <li>{course}</li>
                    {/each}
                </ul>
            </TimelineContent>
        </TimelineItem>
    {/each}
</Timeline>
