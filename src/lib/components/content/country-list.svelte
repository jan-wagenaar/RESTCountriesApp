<script>
  import Grid from "../layout/grid.svelte";
  import data from "$lib/data.json";
  import CountryCard from "./country-card.svelte";

  const { searchTerm } = $props();
  let filteredCountries = $state(data);

  $effect(() => {
    const query = searchTerm.toLowerCase();
    if (searchTerm) {
      filteredCountries = data.filter((country) => {
        return (
          country.name.toLowerCase().includes(query) ||
          (country.alpha2Code &&
            country.alpha2Code.toLowerCase().includes(query)) ||
          (country.alpha3Code &&
            country.alpha3Code.toLowerCase().includes(query)) ||
          (country.region &&
            country.region.toLowerCase().includes(query)) ||
          (country.subregion &&
            country.subregion.toLowerCase().includes(query)) ||
          (country.capital &&
            country.capital.toLowerCase().includes(query))
        );
      });
    } else {
      filteredCountries = data;
    }
  });
</script>

<Grid>
  {#each filteredCountries as country}
    <CountryCard {country} />
  {/each}
</Grid>
