<script lang="ts">
    import { _ } from "svelte-i18n";
    import { browser } from "$app/environment";
    import LanguageSwitcher from "./LanguageSwitcher.svelte";
    import { MoonIcon, SunIcon } from "lucide-svelte";

    let currentSection = "about";

    function setCurrentSection(section: string) {
        currentSection = section;
        closeMenu();
    }

    function toggleTheme() {
        if (browser) {
            const isDark = document.documentElement.classList.toggle("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
        }
    }

    let isMenuOpen = false;

    const closeMenu = () => {
        isMenuOpen = false;
    };
</script>

<header class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
    <div class="px-4 py-4 flex items-center justify-between w-full">
        <!-- Left section - Profile picture -->
        <div class="flex-none pl-0">
            <a href="/">
                <img src="/profil.png" alt="Augustin ROLET" class="w-12 h-12 rounded-md" />
            </a>
        </div>

        <!-- Center section - Navigation -->
        <nav class="hidden md:flex items-center gap-6 flex-grow justify-center">
            <a
                href="/#about"
                class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary {currentSection ===
                'about'
                    ? 'bg-gray-200 dark:bg-gray-700 rounded-md p-2'
                    : ''}"
                on:click={() => setCurrentSection("about")}
            >
                {$_("nav.about")}
            </a>
            <a
                href="/#skills"
                class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary {currentSection ===
                'skills'
                    ? 'bg-gray-200 dark:bg-gray-700 rounded-md p-2'
                    : ''}"
                on:click={() => setCurrentSection("skills")}
            >
                {$_("nav.skills")}
            </a>
            <a
                href="/projects"
                class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary {currentSection ===
                'projects'
                    ? 'bg-gray-200 dark:bg-gray-700 rounded-md p-2'
                    : ''}"
                on:click={() => setCurrentSection("projects")}
            >
                {$_("nav.projects")}
            </a>
            <a
                href="/experience"
                class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary {currentSection ===
                'experience'
                    ? 'bg-gray-200 dark:bg-gray-700 rounded-md p-2'
                    : ''}"
                on:click={() => setCurrentSection("experience")}
            >
                {$_("nav.experience")}
            </a>
            <a
                href="/education"
                class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary {currentSection ===
                'education'
                    ? 'bg-gray-200 dark:bg-gray-700 rounded-md p-2'
                    : ''}"
                on:click={() => setCurrentSection("education")}
            >
                {$_("nav.education")}
            </a>
            <a
                href="/reports"
                class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary {currentSection ===
                'reports'
                    ? 'bg-gray-200 dark:bg-gray-700 rounded-md p-2'
                    : ''}"
                on:click={() => setCurrentSection("reports")}
            >
                {$_("nav.reports")}
            </a>
            <a
                href="/#contact"
                class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary {currentSection ===
                'contact'
                    ? 'bg-gray-200 dark:bg-gray-700 rounded-md p-2'
                    : ''}"
                on:click={() => setCurrentSection("contact")}
            >
                {$_("nav.contact")}
            </a>
        </nav>

        <!-- Right section - Controls -->
        <div class="flex items-center gap-4 flex-none pr-0">
            <LanguageSwitcher />
            <button
                on:click={toggleTheme}
                class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label={$_("theme.toggle")}
            >
                <div class="dark:hidden" title={$_("theme.dark")}>
                    <MoonIcon class="w-5 h-5" />
                </div>
                <div class="hidden dark:block" title={$_("theme.light")}>
                    <SunIcon class="w-5 h-5" />
                </div>
            </button>
            <a
                href="/resume-Augustin-ROLET.pdf"
                class="hidden md:block bg-primary dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                download
            >
                {$_("nav.downloadCV")}
            </a>
        </div>

        <!-- Mobile menu button -->
        <button
            class="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            on:click={() => (isMenuOpen = !isMenuOpen)}
            aria-label="Toggle menu"
        >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {#if isMenuOpen}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                {:else}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                {/if}
            </svg>
        </button>
    </div>

    <!-- Mobile menu -->
    {#if isMenuOpen}
        <nav class="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <div class="container mx-auto px-4 py-4 flex flex-col gap-4">
                <a
                    href="/#about"
                    class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary"
                    on:click={() => setCurrentSection("about")}
                >
                    {$_("nav.about")}
                </a>
                <a
                    href="/#skills"
                    class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary"
                    on:click={() => setCurrentSection("skills")}
                >
                    {$_("nav.skills")}
                </a>
                <a
                    href="/projects"
                    class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary"
                    on:click={() => setCurrentSection("projects")}
                >
                    {$_("nav.projects")}
                </a>
                <a
                    href="/experience"
                    class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary"
                    on:click={() => setCurrentSection("experience")}
                >
                    {$_("nav.experience")}
                </a>
                <a
                    href="/education"
                    class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary"
                    on:click={() => setCurrentSection("education")}
                >
                    {$_("nav.education")}
                </a>
                <a
                    href="/reports"
                    class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary"
                    on:click={() => setCurrentSection("reports")}
                >
                    {$_("nav.reports")}
                </a>
                <a
                    href="/#contact"
                    class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 hover:text-primary"
                    on:click={() => setCurrentSection("contact")}
                >
                    {$_("nav.contact")}
                </a>
                <a
                    href="/resume-Augustin-ROLET.pdf"
                    class="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    download
                    on:click={closeMenu}
                >
                    {$_("nav.downloadCV")}
                </a>
            </div>
        </nav>
    {/if}
</header>
