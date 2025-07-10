<script lang="ts">
  import Dropdown from "../widgets/dropdown.svelte";
  let { selectedRegionId = $bindable() as string } = $props();
</script>

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
  bind:selectedId={selectedRegionId}
/>
