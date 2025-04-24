<script>
  let { searchTerm = $bindable() } = $props();
</script>

<div class="search-container">
  <input
    type="text"
    bind:value={searchTerm}
    placeholder="Search for a country..."
  />
</div>

<style>

    .search-container {
        position: relative;
    color: red; 
    }


  input {
    position: relative;
    padding: var(--space-base);
    padding-left: calc(1rem + var(--space-base) * 2); /* Adjusted for icon */
    border: var(--space-xxs) solid #ccc;
    border-radius: var(--space-xs);
    font-size: 1rem;
    width: 100%;
  }

  .search-container::before {
    content: "";
   
    position: absolute;
    left: 1rem; 
    width: var(--space-m);
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32' d='M338.29 338.29L448 448'/%3E%3C/svg%3E");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
}

  input::placeholder {
    color: #aaa;
  }

  input:focus {
    outline: none;
    border-color: #333;
  }
</style>
