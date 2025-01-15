<script lang="ts">
    import { theme } from "$lib/stores/theme";
    import { MoonIcon, SunIcon } from "lucide-svelte";

    function toggleTheme() {
        $theme = $theme === "light" ? "dark" : "light";
    }
</script>

<button
    on:click={toggleTheme}
    class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    aria-label="Toggle theme"
>
    {#if $theme === "light"}
        <MoonIcon class="w-5 h-5" />
    {:else}
        <SunIcon class="w-5 h-5" />
    {/if}
</button>
