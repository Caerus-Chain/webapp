<script setup>
import Welcome from './Welcome.vue';
import ImageView from './ImageView.vue';
import ClockView from './ClockView.vue';
import CodeView from './CodeView.vue';
import About from './About.vue';
import Features from './Features.vue';
import Roadmap from './Roadmap.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div>
    <Welcome />
    <ImageView />
    <ClockView />
    <CodeView />
    <About />
    <Features />
    <Roadmap />
    <Footer />
  </div>
</template>

<style scoped>
.title {
    width: 100%;
    display: block;
    padding-top: 20vh;
    text-align: center;
}
.title button {
    border-radius: 15px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
}

.title button:hover {
    background-color: white;
    color: black;
}
h1 {
  color: white;
  font-weight: 800;
  font-size: 3.5rem;
  position: relative;
  top: -10px;
}
</style>
