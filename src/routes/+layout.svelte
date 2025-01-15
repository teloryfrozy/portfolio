<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import "$lib/i18n/config";
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";

    onMount(() => {
        if (browser) {
            const theme = localStorage.getItem("theme") || "light";
            document.documentElement.classList.toggle("dark", theme === "dark");
        }
    });
</script>

<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Header />
    <main class="flex-grow pt-16">
        <slot />
    </main>
    <Footer />
</div>
