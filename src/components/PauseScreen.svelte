<div class="pause" on:click on:keydown role="button" tabindex="0">
  <h1>
    <span class="godsblessing">
      <span class="pink">God's </span>
      <span class="orange">Blessing</span>
    </span>
    <span class="smol">on<br /> this</span>
    <br />
    Wonder<span class="pink">ful </span>
    Site<span class="orange">!</span>
  </h1>
  <p>
    この<span class="pink">素</span><span class="orange">晴</span>らしい<span
      class="pink">サイ</span
    ><span class="orange">ト</span>に<span class="pink">祝</span><span
      class="orange">福</span
    >を<span class="pink">!</span>
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
    color: #fffbeb;
    font-size: 70px;
    text-align: center;
    line-height: 1.1;
    transition: scale 0.3s;
  }

  h1:hover {
    scale: 110%;
  }

  p {
    font-family: "Noto Sans JP";
    color: #fffbeb;
    font-size: 30px;
    text-align: center;
    margin-top: 14px;
    transition: scale 0.3s;
  }

  p:hover {
    scale: 110%;
  }

  .smol {
    position: absolute;
    font-size: 35px;
    line-height: 0.9;
    margin-top: 15px;
    margin-left: -55px;
  }

  .godsblessing {
    margin-right: 65px;
  }

  .pink {
    color: #ec4899;
  }

  .orange {
    color: #f97316;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 17px;
      margin-top: 9px;
    }

    .smol {
      position: absolute;
      font-size: 20px;
      line-height: 0.9;
      margin-top: 8px;
      margin-left: -35px;
    }

    .godsblessing {
      margin-right: 40px;
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
</style>
