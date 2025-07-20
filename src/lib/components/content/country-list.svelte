<script>
  let { countries } = $props();
  import Grid from "../layout/grid.svelte";
  import CountryCard from "./country-card.svelte";
</script>

<Grid>
  {#each countries as country}
    <CountryCard {country} />
  {/each}
</Grid>
