<template>
  <div
    class="container"
    uk-scrollspy="cls: uk-animation-fade; target: td; delay: 100; repeat: false"
  >
    <div class="title"><h1>Roadmap</h1></div>

    <div>
      <table>
        <tbody>
          <tr>
            <td class="year active">2023</td>
            <td>1Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          </tr>
          <tr>
            <td></td>
            <td>2Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          </tr>
          <tr>
            <td></td>
            <td class="active">4Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          </tr>
          <tr>
            <td class="year">2024</td>
            <td>2Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          </tr>
          <tr>
            <td></td>
            <td>3Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          </tr>
        </tbody>
      </table>
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
h1 {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.89);
  padding-bottom: 50px;
}
table {
  margin: auto;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  line-height: 5rem;
}
.year {
  font-size: 3rem;
  padding-right: 20px;
}

.active {
  color: yellow;
}
</style>
