<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { fetchMeguminImages, type DanbooruImage } from "../utils/api";
  import Loader from "./Loader.svelte";

  let images: DanbooruImage[];
  let scrollInterval: NodeJS.Timer;
  let refreshing = false;

  const autoScroll = () => {
    scrollInterval = setInterval(() => {
      window.scrollBy({ top: 50, behavior: "smooth" });
    }, 50);
  };

  const handleScroll = (_: Event) => {
    if (!refreshing) {
      const scrollTop = document.scrollingElement?.scrollTop;
      if (scrollTop) {
        const threshold = document.body.scrollHeight - 1500 - scrollTop <= 500;
        if (scrollTop && threshold) {
          refreshing = true;
          refresh();
        }
      }
    }
  };

  const refresh = async () => {
    if (!images) {
      images = await fetchMeguminImages(30);
    } else {
      const newImages = await fetchMeguminImages(30);
      images = [...images, ...newImages];
    }
    refreshing = false;
  };

  onMount(async () => {
    await refresh();
    autoScroll();
  });

  onDestroy(() => {
    clearInterval(scrollInterval);
  });
</script>

<svelte:window on:scroll={handleScroll} />

{#if images}
  <div class="gallery">
    <div class="placeholder" />
    {#each images as image, id (id)}
      <a
        href={`https://danbooru.donmai.us/posts/${image.id}`}
        target="_blank"
        rel="noreferrer"
        style:left={image.style.left}
        style:rotate={image.style.rotate}
      >
        <img src={image.large_file_url} alt={image.tag_string} />
      </a>
    {/each}
  </div>
{:else}
  <Loader />
{/if}

<style>
  .gallery {
    text-align: center;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    overflow: hidden;
  }

  a {
    max-width: 40vw;
  }

  img,
  .placeholder {
    width: 100%;
    margin-top: 5vh;
  }

  .placeholder {
    height: 1200px;
  }

  img {
    border-radius: 10px;
    border: 3px solid var(--megumin-crimson);
  }
</style>
