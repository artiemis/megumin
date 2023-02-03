<script lang="ts">
  import megumin from "../assets/megumin.png";
</script>

<img src={megumin} alt="Megumin" />

<style>
  img {
    position: fixed;
    z-index: -10;
    bottom: 0;
    left: 0;
    width: 200px;
    pointer-events: none;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 150px;
    }
  }
</style>
