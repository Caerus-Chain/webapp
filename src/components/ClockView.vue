<script>
import moment from "moment-timezone";
/*
 *  Main function to set the clock times
 */

export default {
  created() {},
  mounted() {
    (function () {
      // Initialise the locale-enabled clocks
      initInternationalClocks();
      // Initialise any local time clocks
      initLocalClocks();
      // Start the seconds container moving
      moveSecondHands();
      // Set the intial minute hand container transition, and then each subsequent step
      setUpMinuteHands();
    })();
  },
};
/*
 *  Set up an entry for each locale of clock we want to use
 */
function getTimes() {
  moment.tz.add([
    "Eire|GMT IST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
    "Asia/Tokyo|JST|-90|0|",
    "America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0",
  ]);
  var now = new Date();
  // Set the time manually for each of the clock types we're using
  var times = [
    {
      jsclass: "js-tokyo",
      jstime: moment.tz(now, "Asia/Tokyo"),
    },
    {
      jsclass: "js-london",
      jstime: moment.tz(now, "Eire"),
    },
    {
      jsclass: "js-new-york",
      jstime: moment.tz(now, "America/New_York"),
    },
  ];
  return times;
}

/*
 * Set up the clocks that use moment.js
 */
function initInternationalClocks() {
  // Initialise the clock settings and the three times
  var times = getTimes();
  for (let i = 0; i < times.length; ++i) {
    var hours = times[i].jstime.format("h");
    var minutes = times[i].jstime.format("mm");
    var seconds = times[i].jstime.format("ss");

    var degrees = [
      {
        hand: "hours",
        degree: hours * 30 + minutes / 2,
      },
      {
        hand: "minutes",
        degree: minutes * 6,
      },
      {
        hand: "seconds",
        degree: seconds * 6,
      },
    ];
    for (var j = 0; j < degrees.length; j++) {
      var elements = document.querySelectorAll(
        ".active ." + times[i].jsclass + " ." + degrees[j].hand
      );
      for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = "rotateZ(" + degrees[j].degree + "deg)";
        elements[k].style.transform = "rotateZ(" + degrees[j].degree + "deg)";
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (degrees[j].hand === "minutes") {
          elements[k].parentNode.setAttribute("data-second-angle", degrees[j + 1].degree);
        }
      }
    }
  }
  // Add a class to the clock container to show it
  var elements = document.querySelectorAll(".clock");
  for (var l = 0; l < elements.length; l++) {
    elements[l].className = elements[l].className + " show";
  }
}

/*
 * Starts any clocks using the user's local time
 */
function initLocalClocks() {
  // Get the local time using JS
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: "hours",
      angle: hours * 30 + minutes / 2,
    },
    {
      hand: "minutes",
      angle: minutes * 6,
    },
    {
      hand: "seconds",
      angle: seconds * 6,
    },
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll(".local ." + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
      elements[k].style.transform = "rotateZ(" + hands[j].angle + "deg)";
      // If this is a minute hand, note the seconds position (to calculate minute position later)
      if (hands[j].hand === "minutes") {
        elements[k].parentNode.setAttribute("data-second-angle", hands[j + 1].angle);
      }
    }
  }
}

/*
 * Move the second containers
 */
function moveSecondHands() {
  var containers = document.querySelectorAll(".bounce .seconds-container");
  setInterval(function () {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = "rotateZ(" + containers[i].angle + "deg)";
      containers[i].style.transform = "rotateZ(" + containers[i].angle + "deg)";
    }
  }, 1000);
  for (var i = 0; i < containers.length; i++) {
    // Add in a little delay to make them feel more natural
    var randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    containers[i].style.transitionDelay = "0.0" + randomOffset + "s";
  }
}

/*
 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
 */
function setUpMinuteHands() {
  // More tricky, this needs to move the minute hand when the second hand hits zero
  var containers = document.querySelectorAll(".minutes-container");
  var secondAngle = containers[containers.length - 1].getAttribute("data-second-angle");
  //console.log(secondAngle);
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = ((360 - secondAngle) / 6 + 0.1) * 1000;
    //console.log(delay);
    setTimeout(function () {
      moveMinuteHands(containers);
    }, delay);
  }
}

/*
 * Do the first minute's rotation, then move every 60 seconds after
 */
function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = "rotateZ(6deg)";
    containers[i].style.transform = "rotateZ(6deg)";
  }
  // Then continue with a 60 second interval
  setInterval(function () {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = "rotateZ(" + containers[i].angle + "deg)";
      containers[i].style.transform = "rotateZ(" + containers[i].angle + "deg)";
    }
  }, 60000);
}
</script>

<template>
  <div class="container">
    <h1>Layer-2 chain with a time-aware EVM</h1>
    <div
      uk-scrollspy="cls: uk-animation-fade; target: p, .demo-container; delay: 200; repeat: false"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div class="demo-container clocks active bounce ios7">
        <article class="clock station js-new-york">
          <section class="hours-container">
            <section class="hours"></section>
          </section>
          <section class="minutes-container">
            <section class="minutes"></section>
          </section>
          <section class="seconds-container">
            <section class="seconds"></section>
          </section>
        </article>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  min-height: 50vh;
  padding: 50px;
  padding-bottom: 0px;
  text-align: center;
  background-color: rgb(40, 40, 40);
}
.left,
.right {
  font-family: "Merriweather", serif;
  font-size: 1.7rem;
  font-weight: 800;
  color: yellow;
  padding-bottom: 20px;
  padding-top: 20px;
}
.left img {
  position: relative;
  width: 100px;
  top: -22px;
  filter: sepia(100%) saturate(3207%) hue-rotate(5deg);
}
.right img {
  position: relative;
  width: 100px;
  top: 18px;
  filter: sepia(100%) saturate(3207%) hue-rotate(5deg);
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
  font-size: 2rem;
}

body {
  margin: 0;
}

.demo-container.clocks {
  position: relative;
  background: transparent;
  padding: 0;
  width: 100%;
  height: calc(70vh - 300px);
  overflow: hidden;
  margin: 0;
}

.clock {
  border-radius: 50%;
  background: radial-gradient(#000, #000 0.1em, #ffffffda 0.1em, #ffffffda), #ffffffda;
  display: inline-block;
  margin: 1%;
  padding-bottom: 41%;
  position: absolute;
  left: 0;
  top: 95%;
  width: 41%;
  opacity: 0;
  transform: translateY(-40%);
}
.clock.show {
  opacity: 1;
  transform: translateY(-50%);
  transition: all 2.5s 0.5s cubic-bezier(0.12, 1.03, 0.34, 1);
}

.clock::after {
  background: red;
  border-radius: 50%;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4%;
  height: 4%;
  z-index: 10;
}

.minutes-container,
.hours-container,
.seconds-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hours-container {
  animation: rotate 43200s infinite linear;
}

.linear {
  .minutes-container {
    animation: rotate 3600s infinite linear;
  }
  .seconds-container {
    animation: rotate 60s infinite linear;
  }
}

.steps {
  .minutes-container {
    animation: rotate 3600s infinite steps(60);
  }
  .seconds-container {
    animation: rotate 60s infinite steps(60);
  }
}

.local.steps {
  .minutes-container {
    animation: none;
  }
}

.bounce {
  .minutes-container {
    transition: transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
  .seconds-container {
    transition: transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44);
  }
}

.hours {
  background: #000;
  width: 3.5%;
  height: 40%;
  position: absolute;
  left: 48.25%;
  top: 22%;
  transform-origin: 50% 71%;
}

.minutes {
  background: #000;
  width: 3.5%;
  height: 55%;
  position: absolute;
  left: 48.25%;
  top: 7%;
  transform-origin: 50% 78.5%;
}

.seconds {
  background: red;
  width: 1.5%;
  height: 42%;
  position: absolute;
  left: 49.25%;
  top: 20%;
  transform-origin: 50% 71%;
  z-index: 8;
}

.label {
  background: #ffffffda;
  border-radius: 0.25em;
  color: #000;
  font-family: MyriadPro-Regular, "Myriad Pro Regular", MyriadPro, "Myriad Pro", Helvetica,
    Arial, sans-serif;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5em 0.75em 0.25em;
  position: absolute;
  top: -4em;
  left: 50%;
  transform: translate(-50%, 0);
}

@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}

.clock.station {
  background: #ffffffda no-repeat center;
  background-size: 95%;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2) inset;
}

.clock.station .seconds::before {
  background: red;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: -9%;
  left: -200%;
  height: 18%;
  width: 500%;
}

.hours.angled {
  transform: rotateZ(-40deg);
}

.minutes.angled {
  transform: rotateZ(40deg);
}
</style>
