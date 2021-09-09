<template>
	<div id="home">
		<div class="loading-overlay show"></div>
		<div id="particles-js"></div>
		<div class="welcome-card p-1">
			<div>
				<img class="image hover-effect" src="../assets/images/avatar.jpg" width="200" height="200" />
			</div>
			<div class="w-100">
				<div class="col-lg-8 col-md-7 text-center text-md-start text-white">
					<h2 class="h1 mt-2">Alireza Safari</h2>
					<p>Full Stack Developer</p>
				</div>
				<div class="buttons">
					<router-link to="/portfolio" class="btn btn-main shadow-sm mt-1">CV</router-link>
					<router-link to="/portfolio" class="btn btn-main shadow-sm mt-1">Projects</router-link>
					<router-link to="/portfolio" class="btn btn-main shadow-sm mt-1">Hire Me</router-link>
					<router-link to="/portfolio" class="btn btn-main shadow-sm mt-1">CV</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.initParticles();
  },
  data() {
    return {
      particlesOptions: {
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
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
      },
    };
  },
  methods: {
    initParticles() {
      window.particlesJS('particles-js', this.particlesOptions);
    },
  },
};
</script>

<style>
@import '../assets/css/home.css';
</style>
