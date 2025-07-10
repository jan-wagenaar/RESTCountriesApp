<script>
  const { href, children } = $props();
</script>

<a {href}>
  {@render children?.()}
</a>

<style>
  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-s);
    text-decoration: none;
    padding: var(--space-base);
    color: var(--color-text-primary);
    background-color: var(--color-neutral-0);
    border-radius: var(--border-radius-base);
    box-shadow: var(--box-shadow-base);
  }

  a:hover,
  a:focus-visible {
    background-color: var(--color-neutral-1);
    box-shadow: 0 0 0 2px var(--focus-border-color), var(--box-shadow-base);
    color: var(--color-text-primary);
    text-decoration: none;
    outline: none;
    transition: var(--animation-base);
  }

  a:active {
    background-color: var(--color-neutral-2);
    color: var(--color-text-primary);
    box-shadow: 0 0 0 2px var(--focus-border-color), var(--box-shadow-base);
    transition: var(--animation-base);
  }
</style>
