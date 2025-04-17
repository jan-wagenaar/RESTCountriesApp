<section>
  <slot></slot>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: var(--space-xl);
    overflow: hidden;
  }
</style>
