<div class="pause" on:click on:keydown>
  <h1 class="blink">God's Blessing on this<br />Wonderful Site!</h1>
  <p>
    この<span class="pink">素</span><span class="orange">晴</span>らしい<span class="pink">サイ</span><span
      class="orange">ト</span
    >に<span class="pink">祝</span><span class="orange">福</span>を<span class="pink" style="font-family: Tiki Tropic;"
      >!</span
    >
  </p>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap");

  @font-face {
    font-family: "Tiki Tropic";
    src: url("../assets/TikiTropic.ttf") format("truetype");
  }

  h1 {
    font-family: "Tiki Tropic";
    color: #ef8400;
    font-size: 80px;
    text-align: center;
  }

  p {
    font-family: "Noto Sans JP";
    color: #ffccbd;
    font-size: 48px;
    text-align: center;
    margin-top: 20px;
  }

  .pink {
    color: #e8006d;
  }

  .orange {
    color: #ef8400;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }
  }

  .pause {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    cursor: pointer;
  }

  .blink {
    animation: blinking 1.2s infinite;
  }

  @keyframes blinking {
    0% {
      color: #e8006d;
    }
    49% {
      color: #e8006d;
    }
    60% {
      color: #ef8400;
    }
    99% {
      color: #ef8400;
    }
    100% {
      color: #e8006d;
    }
  }
</style>
