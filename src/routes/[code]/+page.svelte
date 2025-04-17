<script lang="ts">
  import ButtonLink from "$lib/components/widgets/button-link.svelte";

  import type { PageProps } from "./$types";
  import type { Country, Currency, Language, Border } from "$lib/types/country";

  let { data }: PageProps = $props();
</script>

<div class="container">
  <figure>
    <img src={data.flag} alt={`Flag of ${data.name}`} />
  </figure>
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
          ?.map((currency: Currency) => currency.name)
          .join(", ")}
      </p>
      <p>
        Languages: {data.languages
          ?.map((language: Language) => language.name)
          .join(", ")}
      </p>
      {#if data.borders?.length}
        {#each data.borders as border (border.code)}
          <ButtonLink href={`/${border.code}`} class="border-button">
            {border.name}
          </ButtonLink>
        {/each}
      {:else}
        <p>No bordering countries</p>
      {/if}
    </article>
  </section>
</div>

<style>
  .container {
    display: flex;
    gap: var(--space-xl);
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  article {
    display: flex;
    flex-flow: column wrap;
  }
</style>
