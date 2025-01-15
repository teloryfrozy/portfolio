<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { _ } from "svelte-i18n";

    export let images: string[];
    export let autoPlay = true;

    let currentIndex = 0;
    let interval: NodeJS.Timeout;

    function next() {
        currentIndex = (currentIndex + 1) % images.length;
    }

    onMount(() => {
        if (autoPlay) {
            interval = setInterval(next, 5000);
        }
    });

    onDestroy(() => {
        if (interval) clearInterval(interval);
    });
</script>

<div class="relative w-full h-64 overflow-hidden rounded-lg">
    {#each images as image, i}
        <img
            src={image}
            alt="Project screenshot"
            class="absolute w-full h-full object-cover transition-opacity duration-500"
            style="opacity: {i === currentIndex ? '1' : '0'}"
        />
    {/each}
</div>
