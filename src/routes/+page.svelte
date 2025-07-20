<script>
  import Section from "$lib/components/layout/section.svelte";
  import CountryList from "$lib/components/content/country-list.svelte";
  import Search from "$lib/components/widgets/search-input.svelte";
  import Dropdown from "$lib/components/widgets/dropdown.svelte";
  import { page } from "$app/state";
  let { data } = $props();
  let searchTerm = $state("");
  let selectedRegionId = $state("");

  // Sync searchTerm and selectedRegionId from URL on navigation
  $effect(() => {
    const params = new URLSearchParams(page.url.search);
    const urlSearch = params.get("searchTerm") || "";
    const urlRegion = params.get("regionId") || "";
    if (searchTerm !== urlSearch) searchTerm = urlSearch;
    if (selectedRegionId !== urlRegion) selectedRegionId = urlRegion;
  });
</script>



<Section>
  <Search searchTerm={searchTerm} />
  <Dropdown
    name="region"
    label="Filter by Region"
    options={[
      { id: "africa", value: "Africa" },
      { id: "americas", value: "Americas" },
      { id: "asia", value: "Asia" },
      { id: "europe", value: "Europe" },
      { id: "oceania", value: "Oceania" },
    ]}
    selectedId={selectedRegionId}
  />

</Section>
<CountryList countries={data.countries} />
