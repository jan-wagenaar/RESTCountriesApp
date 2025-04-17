<script>
  const { href, children } = $props();
</script>

<a {href}>
  {@render children?.()}
</a>

<style>
  a {
    text-decoration: none;
    padding: var(--space-s) var(--space-base);
  }
</style>
