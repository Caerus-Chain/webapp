<template>
  <div class="container">
    <div>
      <div>
        <h3>EXTERNAL LINKS</h3>
        <br />
        <div class="logo"><img src="/logo.png" /></div>
        <div class="list">
          <!-- <p><a href="https://caerus-1.gitbook.io/caerus" target="_blank">Document</a></p> -->
          <p>
            <a href="https://github.com/Caerus-Chain" target="_blank">GitHub</a>
          </p>
          <!-- <p><a href="https://t.me/CAERUS_CHAIN" target="_blank">Telegram</a></p> -->
        </div>
        <!-- <h3>Contact Us.</h3> -->
        <!-- <div class="list"> -->
        <!-- <p>Developer Docs</p> -->
        <!-- <p>Developer Docs</p> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.container {
  width: 100%;
  padding: 50px 50px 50px 100px;
  background-color: rgb(40, 40, 40);
}

.logo {
  width: 100px;
  filter: grayscale(100%);
  display: inline-block;
  position: relative;
  top: -30px;
  padding-right: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.logo:hover {
  filter: grayscale(0%);
}

.list {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  display: inline-block;
}

h3 {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
}

p {
  margin: 0px 0px 5px 0px;
}
</style>
