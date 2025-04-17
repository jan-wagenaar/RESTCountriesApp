<script>
  import Section from "$lib/components/layout/section.svelte";
  import CountryList from "$lib/components/content/country-list.svelte";
  import Search from "$lib/components/widgets/search.svelte";

  let searchTerm = $state('');
</script>

<Section>
<Search bind:searchTerm={searchTerm}/><span>{searchTerm}</span>
</Section>
<CountryList searchTerm={searchTerm}/>
