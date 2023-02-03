<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let src: string;

  let volume = 10;

  let audio = new Audio(src);
  audio.loop = true;

  $: audio.volume = volume / 100;

  onMount(() => {
    audio.play();
  });

  onDestroy(() => {
    audio.pause();
  });
</script>

<input type="range" class="slider" bind:value={volume} />

<style>
  .slider {
    position: fixed;
    top: 50px;
    right: 50px;
    z-index: 10;
    appearance: none;
    height: 8px;
    border-radius: 8px;
    background: var(--megumin-crimson);
    cursor: pointer;
    transition: background 0.15s ease-in-out;
  }
</style>
