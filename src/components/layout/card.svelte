<script>
    import Link from "../widgets/link.svelte";
  const { children, imageUrl, altText, href } = $props();
</script>

<Link href={href}>
  <article>
    <figure>
      <img src={imageUrl} alt={href} />
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
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
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
    padding: 1rem;
    background-color: #fff;
  }
</style>
