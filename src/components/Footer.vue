<template>
  <div class="container">
    <div>
      <div>
        <h3>Resources.</h3>
        <div class="list">
          <p>Developer Docs</p>
          <p>Developer Docs</p>
        </div>
        <h3>Contact Us.</h3>
        <div class="logo"><img src="/logo.png" /></div>
        <div class="list">
          <p>Developer Docs</p>
          <p>Developer Docs</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  padding: 50px 50px 50px 100px;
  background-color: rgb(40, 40, 40);
}
.logo {
  width: 50px;
  filter: grayscale(100%);
  display: inline-block;
  position: relative;
  top: -15px;
  padding-right: 10px;
  transition: all .3s ease-in-out;
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
