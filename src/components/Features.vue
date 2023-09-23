<template>
  <div class="container">
    <div class="title"><h1>Features</h1></div>
    <div
      class="uk-child-width-1-3@m"
      uk-grid
      uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 200; repeat: false"
    >
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Feature 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem  ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Feature 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem  ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Feature 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem  ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Feature 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem  ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Feature 5</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem  ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Feature 6</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem  ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  min-height: 50vh;
  padding: 50px;
  background-color: rgb(40, 40, 40);
  text-align: center;
}
.title {
  text-align: center;
  border: 3px solid rgba(255, 255, 255, 0.505);
  /* background-color: rgba(255, 255, 255, 0.1); */
  display: inline-block;
  border-radius: 50px 50px 50px 50px;
  margin-bottom: 70px;
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
.uk-card {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20px 20px 20px 0px;
    transition: all .3s ease-in-out;
}
.uk-card:hover {
  transform: scale(1.02);
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
