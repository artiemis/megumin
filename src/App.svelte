<script lang="ts">
  import AudioPlayer from "./components/AudioPlayer.svelte";
  import PauseScreen from "./components/PauseScreen.svelte";
  import Gallery from "./components/Gallery.svelte";
  import Megumin from "./components/Megumin.svelte";
  import { preloadAudio, printExplosion, songs } from "./lib/utils";
  import { onMount } from "svelte";

  let paused = true;

  const handleUnpause = () => {
    paused = false;
  };

  onMount(() => {
    printExplosion();
    songs.forEach(preloadAudio);
  });
</script>

{#if paused}
  <PauseScreen on:click={handleUnpause} on:keydown={handleUnpause} />
{:else}
  <AudioPlayer />
  <Gallery />
{/if}
<Megumin />
