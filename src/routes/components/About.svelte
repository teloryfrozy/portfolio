<script lang="ts">
    import { _, locale, json } from "svelte-i18n";

    let descriptions: string[] = [];
    $: {
        $locale; // subscribes to locale changes

        descriptions = $json("about.description") as string[];
    }
</script>

<section id="about" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto p-6">
        <div class="flex justify-center items-center p-4">
            <img src="/profil.png" alt="Augustin ROLET" class="w-[200px] h-[200px] rounded-md" />
        </div>
        <h2 class="text-3xl font-bold text-center mb-8">{$_("about.hi")} 👋</h2>
        <div class="max-w-3xl mx-auto text-lg text-center space-y-6">
            {#each descriptions as desc}
                <p>{desc}</p>
            {/each}
        </div>
    </div>
</section>
