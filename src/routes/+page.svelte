<script>
  import Section from "$lib/components/layout/section.svelte";
  import CountryList from "$lib/components/content/country-list.svelte";
  import Search from "$lib/components/widgets/search-input.svelte";

  let searchTerm = $state('');
</script>

<Section>
<Search bind:searchTerm={searchTerm}/>
<!-- Add dropdown w/ filter -->
</Section>
<CountryList searchTerm={searchTerm}/>
