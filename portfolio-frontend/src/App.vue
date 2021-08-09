<template>
	<div id="app">
		<div id="nav">
			<!-- Navbar -->
			<div class="hamburger-overlay" data-bs-toggle="collapse" data-bs-target="#navmenu" @click="overlayToggler()"></div>
			<nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top p-1">
				<div class="container">
					<router-link to="/" class="navbar-brand">Alireza Safari</router-link>
					<button @click="overlayToggler()" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navmenu">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item ms-2 pb-1 pt-1">
								<router-link to="/" class="navbar-brand">Projects</router-link>
							</li>
							<li class="nav-item pb-1 pt-1">
								<a data-bs-toggle="collapse" data-bs-target="#navmenu" @click="showModal()" style="cursor: pointer" class="navbar-brand">Hire Me</a>
							</li>
							<li class="nav-item pb-1 pt-1">
								<a href="../assets/alireza-safari-resume.pdf" target="_blank" class="navbar-brand">Download CV</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<router-view />
	</div>
</template>

<script>
	import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
	export default {
		name: 'App',
		methods: {
			showModal() {
				this.overlayToggler()
				this.$router.push('/')
				
				$(`#myModal`).removeClass('close')
				document.getElementById('myModal').style.display = 'block'
				
			},
			overlayToggler() {
				$('.hamburger-overlay').toggleClass('is-active')
			}
		},
	}
</script>

<style>
	@import "../node_modules/bootstrap/dist/css/bootstrap.css";
	
	.hamburger-overlay {
	background: hsl(218deg 13% 34% / 38%);
  display: none;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.hamburger-overlay.is-active {
  display: block;
}
</style>
