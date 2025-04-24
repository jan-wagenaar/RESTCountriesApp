<script>
    import Link from "../widgets/link.svelte";
  const { children, imageUrl, altText, href } = $props();
</script>

<Link href={href} style="max-width: 30rem;">
  <!-- TODO fix max width for single result -->
  <article>
    <figure>
      <img src={imageUrl} alt={altText} />
    </figure>
    <section>
      {@render children?.()}
    </section>
  </article>
</Link>

<style>
  article {
    display: flex;
    flex-direction: column;
    border-radius: var(--space-s);
    overflow: hidden;
    box-shadow: 0 var(--space-xxs) var(--space-xs) rgba(0, 0, 0, 0.1);
  }

  figure {
    margin: 0;
    width: 100%;
    height: 15rem;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  section {
    padding: var(--space-m);
    background-color: #fff;
  }
</style>
