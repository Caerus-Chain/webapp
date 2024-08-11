<template>
  <div class="container">
    <div class="title">
      <h1>Meet Historeum (Prev. Caerus)</h1>

      <div class="video-container">
        <video width="800" src="/compile.mp4" controls autoplay muted></video>
      </div>

      <br />

      <div>
        <a href="https://github.com/Caerus-Chain" target="_blank">
          <button class="uk-button">Time Travel with Historeum</button>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
.title {
  width: 100%;
  display: block;
  text-align: center;
  padding-top: 25vh;
}
.title button {
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  padding: 10px 20px 10px 20px;
}
.title button:hover {
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
}

h1 {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  font-size: 3.5rem;
  position: relative;
  top: -10px;
}

.video-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  position: relative;
}
video {
  max-width: 100%;
  height: auto;
  border: none; /* Removes any default border */
}
</style>
