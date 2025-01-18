<script lang="ts">
    import { _ } from "svelte-i18n";
    const currentYear = new Date().getFullYear();
</script>

<footer class="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8">
    <div class="container mx-auto px-4 text-center">
        <p>© {currentYear} {$_("footer.designedBy")} Augustin ROLET.</p>
    </div>
</footer>
