<template>
  <div class="container">
    <div class="title">
      <h1>Features</h1>
    </div>
    <div class="uk-child-width-1-3@m" uk-grid
      uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 200; repeat: false">
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Archive-powered EVM</h3>
          <hr class="uk-divider-small">
          <p>
            Historeum provides direct on-chain access to historical data through the EVM,
            by Archive Storage.
          </p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Solidity Extension</h3>
          <hr class="uk-divider-small">
          <p>
            With a Solidity compiler modifications,
            Historeum enables developers to seamlessly utilize historical data.
          </p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Versatile Applicability</h3>
          <hr class="uk-divider-small">
          <p>
            Historeum is applicable across various blockchain ecosystems,
            particullary for reputation and financial services.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
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

.uk-card-title {
  font-size: 2.3rem;
  font-weight: 200;
}
.uk-card {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px 20px 20px 0px;
  transition: all .3s ease-in-out;
}

.uk-card-body p{
  font-size: 1.1rem;
  font-weight: 400;
  padding-top: 50px;
  padding-bottom: 50px;
}

.uk-card:hover {
  transform: scale(1.02);
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
