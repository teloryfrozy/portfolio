<script lang="ts">
    import { _ } from "svelte-i18n";
    import About from "./components/About.svelte";
    import Skills from "./components/Skills.svelte";
    import Contacts from "./components/Contacts.svelte";
</script>

<div class="container mx-auto px-4">
    <section id="about" class="py-20">
        <About />
    </section>

    <section id="skills" class="py-20">
        <Skills />
    </section>

    <section id="contact" class="py-20">
        <Contacts />
    </section>
</div>
