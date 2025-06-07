<script>
  let { enabled } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 24 24"
  height="1.5rem"
  width="1.5rem"
  class:enabled
>
  <defs>
    <clipPath id="icon-mask">
      <circle cx="12" cy="12" r="12" />
    </clipPath>
  </defs>
  <g clip-path="url(#icon-mask)">
    <circle cx="12" cy="12" r="12" class="sun" />
    <circle cx="12" cy="12" r="12" class="moon" />
  </g>
</svg>

<style>
  svg,
  .sun,
  .moon {
    transition: all 0.2s ease-in-out;
  }

  svg .sun {
    fill: var(--color-yellow);
  }

  svg .moon {
    fill: var(--color-neutral-2);
    transform: translate(100%, calc(100% * -1));
  }

  svg.enabled .moon {
    transform: translate(20%, calc(20% * -1));
  }

  svg:hover .moon {
    transform: translate(40%, calc(40% * -1));
  }

  svg.enabled:hover .moon {
    transform: translate(30%, calc(30% * -1));
  }
</style>
