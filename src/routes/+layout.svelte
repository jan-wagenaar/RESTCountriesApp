<script>
  import Menu from "../components/layout/menu.svelte";
   import { APP_TITLE } from "../lib/global";	

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
    padding: 1rem 5rem;
  }

  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 0.5rem;
  }
</style>
