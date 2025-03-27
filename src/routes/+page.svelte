<script>
	import data from '../lib/data.json';
    import CountryCard from '../components/country-card.svelte';
</script>

<header>
  <h1>Where in the world</h1>
</header>
<section>
    {#each data as country}
		<CountryCard country />
	{/each}
</section>