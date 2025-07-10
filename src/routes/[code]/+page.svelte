<script>
  import BackIcon from "$lib/assets/back-icon.svelte";
import ButtonLink from "$lib/components/widgets/button-link.svelte";
import InlineButtonLink from "$lib/components/widgets/inline-button-link.svelte";

  let { data } = $props();
</script>

<div class="margin-y-xl">
  <ButtonLink href="./"><BackIcon /> Back</ButtonLink> <!-- TODO: This button should navigate back to the previous page -->
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
      <p>Border countries:</p>
      <div class="list">
        {#if data.borders?.length}
          {#each data.borders as border}
            <InlineButtonLink href={`/${border}`}>
              {border}
            </InlineButtonLink>
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
    object-fit: contain;
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

  .margin-y-xl {
    margin: var(--space-xl) 0;
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
