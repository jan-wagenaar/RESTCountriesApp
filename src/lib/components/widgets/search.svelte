<script>
    let { searchTerm = $bindable() } = $props();
</script>

<input type="text" bind:value={searchTerm} placeholder="Search for a country..." />

<style>
    input {
        padding: var(--space-base);
        border: var(--space-xxs) solid #ccc;
        border-radius: var(--space-xs);
        font-size: 1rem;
    }

    input::placeholder {
        color: #aaa;
    }

    input:focus {
        outline: none;
        border-color: #333;
    }
</style>