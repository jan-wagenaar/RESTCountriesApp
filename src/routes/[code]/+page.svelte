<script>
  import ButtonLink from "$lib/components/widgets/button-link.svelte";

  let { data } = $props();
</script>

<div>
  <button>Back</button> <!-- TODO: This button should navigate back to the previous page -->
</div>
<div class="container">
  <img src={data.flag} alt={`Flag of ${data.name}`} />
  <section>
    <h1>{data.name}</h1>
    <article>
      <p>Native name: {data.nativeName}</p>
      <p>Population: {data.population}</p>
      <p>Region: {data.region}</p>
      <p>Subregion: {data.subregion}</p>
      <p>Capital: {data.capital}</p>
      <p>Top Level Domain: {data.topLevelDomain}</p>
      <p>
        Currencies: {data.currencies
          ?.map((currency) => currency.name)
          .join(", ")}
      </p>
      <p>
        Languages: {data.languages?.map((language) => language.name).join(", ")}
      </p>
      <div class="list">
        {#if data.borders?.length}
          {#each data.borders as border}
            <ButtonLink href={`/${border}`}>
              {border}
            </ButtonLink>
          {/each}
        {/if}
      </div>
    </article>
  </section>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    gap: var(--space-xxxl);
  }

  img {
    width: 50%;
    max-width: 800px;
    height: auto;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 30%;
  }

  article {
    display: flex;
    flex-flow: column wrap;
  }

  .list {
    display: flex;
    gap: var(--space-base);
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    .container {
      flex-direction: column;
    }

    img {
      width: 100%;
    }
  }
</style>
