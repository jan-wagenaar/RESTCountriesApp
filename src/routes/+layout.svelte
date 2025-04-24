<script>
  import Menu from "$lib/components/layout/menu.svelte";
  import { APP_TITLE } from "$lib/global";

  const { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
    rel="stylesheet"
  />
  <title>{APP_TITLE}</title>
</svelte:head>

<div class="layout">
  <Menu />
  <main class="main-content">
    {@render children?.()}
  </main>
</div>

<style>
  :global(:root) {
    font-family: "Nunito Sans", sans-serif;
    


    --space-xxs: 0.125rem;
    --space-xs: 0.25rem;
    --space-s: 0.5rem; 
    --space-base: 1rem;
    --space-m: 1.5rem;
    --space-l: 2rem;
    --space-xl: 4rem;
    --space-xxl: 6rem;

    
    --color-neutral-0: hsl(0, 0%, 100%);
    --color-neutral-1: hsl(0, 0%, 98%);
    --color-neutral-2: hsl(0, 0%, 52%);

    --color-background-color: var(--color-neutral-1);

    --color-text-primary: #000;

    --border-radius-base: 0.25rem;

    --box-shadow-base: 0 0 var(--space-s) hsla(0, 0%, 15%, 0.2);


    

    /* Add
    - border 
    - border-radius
    - font sizings
    - colors
    
    */
  }

  :global(body) {
    margin: 0;
    padding: 0;
    background-color: var(--color-background-color);
    color: var(--color-text-primary);
  }

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    padding: var(--space-base) var(--space-xl);
  }
</style>
