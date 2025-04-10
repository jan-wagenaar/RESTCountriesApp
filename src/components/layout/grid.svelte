<section>
  <slot></slot>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 4rem;
    overflow: hidden;
  }
</style>
