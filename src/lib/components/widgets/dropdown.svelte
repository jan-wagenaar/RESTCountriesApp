<script lang="ts">
  import type { Option } from "$lib/types/option";
  let {
    options = [] as Option[],
    selected = $bindable() as Option,
    label = "",
    name = "",
    disabled = false,
  } = $props();
</script>

<label>
  {#if label}
    <span>{label}</span>
  {/if}
  {#if selected}
  <select {name} bind:value={selected} {disabled}>
    <option value="" disabled selected={!selected}>Select an option</option>
    {#each options as option}
      <option value={option.id}>
        {option.value}
      </option>
    {/each}
  </select>
  {/if}
</label>
