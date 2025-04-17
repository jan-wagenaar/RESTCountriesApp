<script>
  const { children } = $props();
</script>

<section>
  {@render children?.()}
</section>

<style>
    section {
        display: flex;
        justify-content: space-between;
        padding: var(--space-l) 0;

    }
</style>