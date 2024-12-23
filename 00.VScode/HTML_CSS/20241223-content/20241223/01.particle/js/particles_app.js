/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 158,
        density: {
          enable: true,
          value_area: 710.2328774690454,
        },
      },
      color: {
        value: "#00ffd1",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 2,
          color: "#57ff0e",
        },
        polygon: {
          nb_sides: 4,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1.695407866692501,
          opacity_min: 0.08073370793773814,
          sync: false,
        },
      },
      size: {
        value: 59.85061287027583,
        random: true,
        anim: {
          enable: false,
          speed: 36.33016857198216,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 335.1634320735447,
        color: "#ffffff",
        opacity: 0.4,
        width: 0.7980081716036779,
      },
      move: {
        enable: true,
        speed: 6.294157448348566,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 3461.7865965917113,
          rotateY: 3461.7865965917113,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5,
          },
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
);
