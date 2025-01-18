<script lang="ts">
    import { locale } from "svelte-i18n";

    function toggleLocale() {
        $locale = $locale === "en" ? "fr" : "en";
        localStorage.setItem("language", $locale);
    }
</script>

<button
    on:click={toggleLocale}
    class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
>
    {#if $locale === "en"}
        <img src="/logos/france-flag.svg" alt="Français" class="w-5 h-5" />
        <span>FR</span>
    {:else}
        <img src="/logos/united-kingdom-flag.svg" alt="English" class="w-5 h-5" />
        <span>EN</span>
    {/if}
</button>
