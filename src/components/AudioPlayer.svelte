<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { songs } from "../lib/utils";

  let audioIndex = 0;
  let volume = 20;

  let audio = new Audio(songs[audioIndex]);
  $: audio.volume = volume / 100;

  function playNext() {
    audioIndex++;
    if (audioIndex >= songs.length) {
      audioIndex = 0;
    }
    if (audioIndex === 2 && volume >= 20) {
      volume -= 10;
    }

    audio.src = songs[audioIndex];
    audio.play()
  }

  onMount(() => {
    audio.play();
    audio.addEventListener("ended", playNext);
  });

  onDestroy(() => {
    audio.pause();
    audio.removeEventListener("ended", playNext);
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
    background: #ef4444;
    cursor: pointer;
    transition: background 0.15s ease-in-out;
  }
</style>
