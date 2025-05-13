<script>
    import { writable } from 'svelte/store';

    // Create a store to manage the theme
    export const darkMode = writable(false);

    // Toggle the dark mode
    function toggleDarkMode() {
        darkMode.update((current) => {
            const newMode = !current;
            document.documentElement.classList.toggle('dark-mode', newMode);
            return newMode;
        });
    }
</script>

<button class="toggle" on:click={toggleDarkMode}>
    <span>Toggle Dark Mode</span>
</button>

<style>
    .toggle {
        appearance: none;
        border: none;
        background: none;
        color: var(--color-text-primary);
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .toggle span {
        margin-left: 0.5rem;
    }

    .switch {
        position: relative;
        width: 40px;
        height: 20px;
        background-color: var(--color-bg-toggle);
        border-radius: 10px;
        transition: background-color 0.3s;
    }

    .switch::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        background-color: var(--color-bg-toggle-knob);
        border-radius: 50%;
        transition: transform 0.3s;
    }

    .dark .switch {
        background-color: var(--color-bg-toggle-dark);
    }

    .dark .switch::before {
        transform: translateX(20px);
    }
</style>