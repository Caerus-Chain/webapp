<template>
  <div class="container">
    <div class="title"><h1>#Caerus</h1></div>
    <h1>Layer-2 Chain with a Time-aware EVM</h1>
    <div>
      <div class="right" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
        <img class="infographic" src="/right.png" />
        <span>{ Block: Past, Data: "Hello," }</span>
      </div>
      <img class="infographic" src="/blocks2.png" />
      <div class="left" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
        <span>{ Block: Now, Data: "World!" }</span>
        <img class="infographic" src="/left.png" />
      </div>
      <p>
        A Time-aware EVM is an extension of the Ethereum Virtual Machine,<br />
        with added functionalities that allow it to interact with <span class="primary">historical on-chain data</span> directly.
      </p>
    </div>
    <!--div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
      <div>
        <div>
          <img class="infographic" src="/blockchain_white.png" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div>
        <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
          <h2>{ Timestamp: 1695441975 Data: "Hello, Caerus" }</h2>
        </div>
      </div>
    </div-->
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  min-height: 50vh;
  padding: 50px;
  text-align: center;
}
.left, .right {
  font-family: "Merriweather", serif;
  font-size: 1.7rem;
  font-weight: 800;
  color: yellow;
  padding-bottom:20px;
  padding-top:20px;
}
.left img {
  position: relative;
  width: 100px;
  top: -22px;
  filter: sepia(100%) saturate(3207%) hue-rotate(5deg)
}
.right img {
  position: relative;
  width: 100px;
  top: 18px;
  filter: sepia(100%) saturate(3207%) hue-rotate(5deg)
}
.infographic {
  width: 90vh;
  /*filter: invert(100%) sepia(0%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);*/
}
.title {
  text-align: center;
  border: 3px solid rgba(255, 255, 255, 0.505);
  /* background-color: rgba(255, 255, 255, 0.1); */
  display: inline-block;
  border-radius: 50px 50px 50px 50px;
}
.title h1 {
  position: relative;
  top: 10px;
  line-height: 2rem;
  padding: 0px 20px 0px 20px;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.89);
}
h1 {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.89);
  padding-bottom: 50px;
}
h2 {
  font-family: "Merriweather", serif;
  font-size: 2rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.89);
  padding-bottom: 30px;
}
p {
  color: rgba(255, 255, 255, 0.89);
  font-size: 1.3rem;
}
p .primary {
  color: yellow;
}
</style>
