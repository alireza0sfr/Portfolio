<template>
	<div class="home">
		<div id="particles-js"></div>
		<div class="loading-overlay loading-show"></div>
		<div class="welcome-card p-1 text-center">
			<div>
				<img class="image hover-effect" src="../assets/images/avatar.jpg" width="200" height="200" />
			</div>
			<div class="w-100 text-white">
				<h2 class="h1 mt-2">Hi! I'm Alireza Safari</h2>
				<span style="border-right: 2px solid; padding-right: 10px;">Full Stack Developer</span>
			</div>
			<div class="buttons">
				<a class="nav-link" href="https://twitter.com/Alireza0sfr" target="_blank" title="Twitter">
					<i class="fab fa-twitter"></i>
					<span class="menu-title sr-only">Twitter</span>
				</a>
				<a class="nav-link" href="https://www.linkedin.com/in/alireza-safari-3b23231bb/" target="_blank" title="Linkedin">
					<i class="fab fa-linkedin"></i>
					<span class="menu-title sr-only">Linkedin</span>
				</a>
				<a class="nav-link" href="https://www.instagram.com/alireza0sfr" target="_blank" title="Instagram">
					<i class="fab fa-instagram"></i>
					<span class="menu-title sr-only">Instagram</span>
				</a>
				<a class="nav-link" href="https://github.com/alireza0sfr" target="_blank" title="Github">
					<i class="fab fa-github"></i>
					<span class="menu-title sr-only">Github</span>
				</a>
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
