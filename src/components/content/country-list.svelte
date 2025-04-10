<script>
  import Grid from "../layout/grid.svelte";
  import data from "../../lib/data.json";
  import CountryCard from "./country-card.svelte";
</script>

<Grid>
    {#each data as country}
      <CountryCard {country} />
    {/each}
</Grid>
