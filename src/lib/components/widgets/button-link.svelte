<script>
  const { href, children } = $props();
</script>

<a {href}>
  {@render children?.()}
</a>

<style>
  a {
    text-decoration: none;
    padding: var(--space-s) var(--space-xl);
    color: var(--color-text-primary);
    background-color: var(--color-neutral-0);
    border-radius: var(--border-radius-base);
    box-shadow: var(--box-shadow-base);
  }
</style>
