<script>
  const { href, style, children } = $props();
</script>

<a {href}>
  {@render children?.()}
</a>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
