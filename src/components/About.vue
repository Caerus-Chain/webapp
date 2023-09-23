<template>
  <div class="container">
    <div class="title"><h1>About Caerus</h1></div>
    <div
      class="uk-child-width-1-3@m"
      uk-grid
      uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: false"
    >
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Feature 1</h3>
          <img src="/img2.jpeg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div>
        <div
          class="uk-card uk-card-default uk-card-body"
          uk-scrollspy-class="uk-animation-slide-bottom"
        >
          <h3 class="uk-card-title">Feature 2</h3>
          <img src="/img3.jpeg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Feature 3</h3>
          <img src="/img4.jpeg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
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
  background-color: rgb(81, 81, 81);
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
.uk-card {
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  /*border: 1px solid rgba(255, 255, 255, 0.505);*/
  border-radius: 30px 30px 30px 0px;
  transition: all .3s ease-in-out;
}

.uk-card:hover {
  transform: scale(1.02);
  background-color: rgba(255, 255, 255, 0.8);
}

.uk-card p {
  /*color: rgba(255, 255, 255, 0.744);*/
  color: rgba(0, 0, 0, 0.852);
  font-size: 1rem;
  font-weight: 300;
}
.uk-card-title {
  /*color: rgba(255, 255, 255, 0.9);*/
  color: rgba(0, 0, 0, 0.852);
}
</style>
