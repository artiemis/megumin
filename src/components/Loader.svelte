<script lang="ts">
  import chibimegu from "../assets/chibimegu.png";
</script>

<div class="chibimegu">
  <img src={chibimegu} alt="Chibimegu Loader" />
</div>

<style>
  .chibimegu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    transform: scale(1);
    animation: chibimegu 1s infinite;
    z-index: 10;
  }

  img {
    width: 200px;
    pointer-events: none;
  }

  @keyframes chibimegu {
    50% {
      opacity: 0.5;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
