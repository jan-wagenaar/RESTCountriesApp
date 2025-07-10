<script lang="ts">
  import type { Option, OptionId } from "$lib/types/option";
  let {
    options = [] as Option[],
    selectedId = $bindable() as OptionId | null,
    label = "",
    name = "",
    disabled = false,
  } = $props();

  let isOpen = $state(false);
</script>

<div class="dropdown-container" class:open={isOpen}>
  <select
    class="dropdown-select"
    {name}
    bind:value={selectedId}
    {disabled}
    onfocus={() => (isOpen = true)}
    onblur={() => (isOpen = false)}
    onchange={() => (isOpen = false)}
  >
  {#if label}
    <option value="" selected >
      {label ? label : "Select an option"}
    </option>
  {/if}
    {#each options as option}
      <option value={option.id}>
        {option.value}
      </option>
    {/each}
  </select>
</div>

<style>
  .dropdown-container {
    position: relative;
    width: 200px;
    display: flex;
    flex-direction: column;
  }

  .dropdown-select {
    height: 100%;
    width: 100%;
    padding: var(--space-s);
    padding-left: var(--space-base);
    padding-right: var(--space-l); /* extra right padding for chevron */
    border: none;
    border-radius: var(--border-radius-base);
    background: var(--input-background);
    color: var(--color-text-primary);
    box-shadow: var(--box-shadow-base);
    font-size: 1rem;
    font-family: inherit;
    appearance: none;
    outline: none;
    cursor: pointer;
    transition: var(--animation-base);
    z-index: 1;
    position: relative;
    font-weight: 600;
  }

  .dropdown-select:focus {
    box-shadow:
      0 0 0 2px var(--focus-border-color),
      var(--box-shadow-base);
    border: 1px solid var(--focus-border-color);
  }

  .dropdown-select:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Chevron icon */
  .dropdown-container::after {
    content: "";
    position: absolute;
    top: 50%;
    right: var(--space-base);
    width: 1em;
    height: 1em;
    pointer-events: none;
    transform: translateY(-50%) rotate(0deg);
    z-index: 2;
    display: block;
    background: url("data:image/svg+xml;utf8,<svg fill='none' stroke='black' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M6 9l6 6 6-6'/></svg>")
      no-repeat center/contain;
    filter: var(--dropdown-chevron-filter, none);
    transition: transform 0.3s;
  }

  .dropdown-container.open::after {
    transform: translateY(-50%) rotate(180deg);
  }

  :global(:root.dark-mode) {
    --dropdown-chevron-filter: invert(1);
  }

  .dropdown-select option {
    padding: var(--space-s);
    background: var(--input-background);
    color: var(--color-text-primary);
  }
</style>
