<script>
  import Link from "../widgets/link.svelte";
  import DarkModeToggle from "./dark-mode-toggle.svelte";
  import { APP_TITLE } from "../../lib/global";
</script>

<header class="header">
  <Link href="/">
    <h1 class="title">{APP_TITLE}</h1>
  </Link>
  <DarkModeToggle />
</header>

<style>
  header {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    background-color: white;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    z-index: 99;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
  }
</style>
