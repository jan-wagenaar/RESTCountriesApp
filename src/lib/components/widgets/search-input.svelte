<script>
  import SearchIcon from "./search-icon.svelte";
  let { searchTerm = $bindable() } = $props();
</script>

<!-- TODO: make label the div box, add inline svg -->
<label for="list-search" class="search-container">
  <SearchIcon />
  <input
    id="list-search"
    type="text"
    bind:value={searchTerm}
    placeholder="Search for a country..."
  />
</label>

<style>
  .search-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-s);
    padding: var(--space-base);
    background-color: var(--input-background);
    border: var(--space-xxs) solid var(--color-neutral-2);
    color: var(--color-text-primary);
    border-radius: var(--space-xs);
    font-size: 1rem;
  }

  .search-container:focus-within,
  .search-container:active {
    border-color: var(--focus-border-color);
    box-shadow: 0 0 0 var(--space-xs) var(--focus-shadow-color);
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    color: inherit;
    font-size: inherit;
    width: 100%;
  }

  input::placeholder {
    color: var(--placeholder-color);
  }

  input:focus {
    outline: none;
    border-color: #333;
  }
</style>
