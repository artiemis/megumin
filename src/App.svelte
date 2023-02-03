<script lang="ts">
  import AudioPlayer from "./components/AudioPlayer.svelte";
  import PauseScreen from "./components/PauseScreen.svelte";
  import Gallery from "./components/Gallery.svelte";
  import Megumin from "./components/Megumin.svelte";
  import { isSafari, printEgg } from "./utils/funcs";
  import chiisanaMp3 from "./assets/chiisana_boukensha.mp3";
  import chiisanaOgg from "./assets/chiisana_boukensha.ogg";

  let paused = true;

  const handleUnpause = () => {
    paused = false;
  };

  printEgg();
</script>

{#if paused}
  <PauseScreen on:click={handleUnpause} on:keydown={handleUnpause} />
{:else}
  {#if isSafari()}
    <AudioPlayer src={chiisanaMp3} />
  {:else}
    <AudioPlayer src={chiisanaOgg} />
  {/if}
  <Gallery />
{/if}
<Megumin />