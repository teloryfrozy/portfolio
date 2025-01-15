<script lang="ts">
    import { _ } from "svelte-i18n";

    const socialLinks = [
        {
            name: "Email",
            url: "mailto:augustin.rolet.pro@gmail.com",
            logo: "/logos/email.svg"
        },
        {
            name: "Discord",
            url: "https://discord.com/users/teloryfrozy",
            logo: "/logos/discord.svg"
        },
        {
            name: "GitHub",
            url: "https://github.com/teloryfrozy",
            logo: "/logos/github.svg"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/augustin-rolet/",
            logo: "/logos/linkedin.svg"
        }
    ];
</script>

<section id="contact" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">{$_("contact.title")}</h2>
        <div class="flex flex-wrap justify-center items-center gap-8">
            {#each socialLinks as link}
                <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                    <img src={link.logo} alt={link.name} class="w-8 h-8" />
                    <span>{link.name}</span>
                </a>
            {/each}
        </div>
    </div>
</section> 