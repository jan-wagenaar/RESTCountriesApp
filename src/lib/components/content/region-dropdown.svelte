<script lang="ts">
    import Dropdown from "../widgets/dropdown.svelte";
    import type { Option } from "$lib/types/option"; 

    let {selectedRegion = $bindable() as Option } = $props();    
</script>

<Dropdown
    label="Select Region"
    options={[
        { id: "all", value: "All Regions" },
        { id: "africa", value: "Africa" },
        { id: "americas", value: "Americas" },
        { id: "asia", value: "Asia" },
        { id: "europe", value: "Europe" },
        { id: "oceania", value: "Oceania" }
    ]}
    bind:selected={selectedRegion}
    name="region"
    />
