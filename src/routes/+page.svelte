<script>
  import Section from "$lib/components/layout/section.svelte";
  import CountryList from "$lib/components/content/country-list.svelte";
  import Search from "$lib/components/widgets/search-input.svelte";
  // import RegionDropdown from "$lib/components/content/region-dropdown.svelte";
  // import Dropdown from "$lib/components/widgets/dropdown.svelte";

  let searchTerm = $state('');
  // let selectedRegion = $state({id: 'all', value: 'All Regions'});
</script>

<Section>
<Search bind:searchTerm={searchTerm}/>
<!-- <RegionDropdown bind:selectedRegion={selectedRegion}/> -->
<!-- <Dropdown
    label="Select Region"
    options={[
        { id: "all", value: "All Regions" },
        { id: "africa", value: "Africa" },
        { id: "americas", value: "Americas" },
        { id: "asia", value: "Asia" },
        { id: "europe", value: "Europe" },
        { id: "oceania", value: "Oceania" }
    ]}
    selected={selectedRegion}
    name="region"
    /> -->
<!-- <span>{selectedRegion.id}</span> -->
<span>{searchTerm}</span>
</Section>
<CountryList searchTerm={searchTerm}/>
