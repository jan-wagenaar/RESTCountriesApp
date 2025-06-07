<script>
  import { writable } from "svelte/store";
  import DarkModeIcon from "./dark-mode-icon.svelte";

  // Create a store to manage the theme
  export const darkMode = writable(false);

  // Toggle the dark mode
  function toggleDarkMode() {
    darkMode.update((current) => {
      const newMode = !current;
      document.documentElement.classList.toggle("dark-mode", newMode);
      return newMode;
    });
  }
</script>

<button class="toggle" on:click={toggleDarkMode}>
  <DarkModeIcon enabled={$darkMode} />Toggle Dark Mode
</button>

<style>
  .toggle {
    appearance: none;
    border: none;
    background: none;
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    gap: var(--space-s);
    cursor: pointer;
  }
</style>
