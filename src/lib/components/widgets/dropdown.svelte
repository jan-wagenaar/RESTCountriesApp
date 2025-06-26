<script lang="ts">
  import type { Option } from "$lib/types/option";
  let {
    options = [] as Option[],
    selectedId = $bindable() as Option | null,
    label = "",
    name = "",
    disabled = false,
  } = $props();
</script>

<label>
  {#if label}
    <span>{label}</span>
  {/if}

    <select
      {name}
      bind:value={selectedId}
      {disabled}
    >
      <!-- <option value="" disabled selected={!selected}>Select an option</option> -->
      {#each options as option}
        <option value={option.id}>
          {option.value}
        </option>
      {/each}
    </select>
</label>
