<script lang="ts">
    import { _, locale } from "svelte-i18n";
    interface SkillCategory {
        name: string;
        skills: { name: string; logo: string }[];
    }

    let skillCategories: SkillCategory[] = [];
    $: {
        $locale;

        skillCategories = [
            {
                name: $_("techStack.categories.programming"),
                skills: [
                    { name: "Python", logo: "/logos/python.svg" },
                    { name: "TypeScript", logo: "/logos/typescript.svg" },
                ],
            },
            {
                name: $_("techStack.categories.frameworks"),
                skills: [
                    { name: "Django", logo: "/logos/django.svg" },
                    { name: "Vue.js", logo: "/logos/vue.svg" },
                    { name: "Svelte", logo: "/logos/svelte.svg" },
                    { name: "React", logo: "/logos/react.svg" },
                ],
            },
            {
                name: $_("techStack.categories.tools"),
                skills: [
                    { name: "Nginx", logo: "/logos/nginx.svg" },
                    { name: "Docker", logo: "/logos/docker.svg" },
                    { name: "VS Code", logo: "/logos/vscode.svg" },
                    { name: "Notion", logo: "/logos/notion.svg" },
                    { name: "Monday", logo: "/logos/monday.svg" },
                    { name: "LaTeX", logo: "/logos/latex.svg" },
                ],
            },
        ];
    }
</script>

<section id="skills" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">{$_("techStack.title")}</h2>
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each skillCategories as category}
                <div
                    class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-md"
                >
                    <h3 class="text-xl font-semibold mb-6 text-center">{$_(category.name)}</h3>
                    <div class="flex flex-col gap-4">
                        {#each category.skills as skill}
                            <div class="flex items-center gap-3 justify-center">
                                <img src={skill.logo} alt={skill.name} class="w-6 h-6" />
                                <span>{skill.name}</span>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
