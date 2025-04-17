<script>
  import Menu from "$lib/components/layout/menu.svelte";
   import { APP_TITLE } from "$lib/global";	

  const { children } = $props()
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
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
  <footer>
    <p>&copy; {new Date().getFullYear()} Jan Wagenaar</p>
  </footer>
</div>

<style>
  :global(:root) {
    font-family: "Nunito Sans", sans-serif;
    --color-background-color: hsl(0, 0%, 98%);


    --space-xxs: 0.125rem;
    --space-xs: 0.25rem;
    --space-s: 0.5rem; 
    --space-base: 1rem;
    --space-m: 2rem;
    --space-l: 4rem;
    --space-xl: 6rem;
    --space-xxl: 8rem;

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

  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: var(--space-s);
  }
</style>
