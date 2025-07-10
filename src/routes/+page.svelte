<script>
  import Section from "$lib/components/layout/section.svelte";
  import CountryList from "$lib/components/content/country-list.svelte";
  import Search from "$lib/components/widgets/search-input.svelte";
  import RegionDropdown from "$lib/components/content/region-dropdown.svelte";
  import { goto } from '$app/navigation';
  import { page } from "$app/state" ;

  let { data } = $props();

  let searchTerm = $state("");
  let selectedRegionId = $state();

//   function updateFilters() {
//     const params = new URLSearchParams(page.url.search);

//     if (searchTerm) {
//         params.set('searchTerm', searchTerm);
//     } else {
//         params.delete('searchTerm');
//     }

//     if (selectedRegionId) {
//         params.set('regionId', selectedRegionId);
//     } else {
//         params.delete('regionId');
//     }
//     console.log(params.toString());

//     goto(`?${params.toString()}`, { replaceState: true});
// }

// $effect(() => {
//     const params = new URLSearchParams(page.url.search);

//     if (searchTerm) {
//         params.set('searchTerm', searchTerm);
//     } else {
//         params.delete('searchTerm');
//     }

//     if (selectedRegionId) {
//         params.set('regionId', selectedRegionId);
//     } else {
//         params.delete('regionId');
//     }
//     console.log(params.toString());

//     goto(`/?${params.toString()}`);
// })
$effect(() => {
  console.log("searchTerm:", searchTerm);
  console.log("selectedRegionId:", selectedRegionId);
})

</script>

<Section>
  <Search bind:searchTerm />
  <RegionDropdown
  bind:selectedRegionId={selectedRegionId}
  ></RegionDropdown>
  <span>{searchTerm}</span>
  <span>{selectedRegionId}</span>
</Section>
<CountryList {searchTerm} countries={data.countries} />
