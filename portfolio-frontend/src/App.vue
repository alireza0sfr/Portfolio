<template>
	<div id="app">
		<div class="loading-overlay">
			<div class="loading-spinner">
				<!-- Spinner -->

				<div class="sk-chase">
					<div class="sk-chase-dot"></div>
					<div class="sk-chase-dot"></div>
					<div class="sk-chase-dot"></div>
					<div class="sk-chase-dot"></div>
				</div>
			</div>
		</div>
		<div class="hamburger-overlay" data-bs-toggle="collapse" data-bs-target="#navmenu" @click="overlayToggler()"></div>
		<div id="nav">
			<!-- Navbar -->
			<nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-1">
				<div class="container">
					<router-link to="/" class="navbar-brand">Alireza Safari</router-link>
					<button @click="overlayToggler()" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navmenu">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item ms-2 pb-1 pt-1">
								<router-link to="/" class="navbar-brand nav-link">Projects</router-link>
							</li>
							<li class="nav-item pb-1 pt-1">
								<a @click="showModal()" style="cursor: pointer" class="navbar-brand nav-link d-none d-sm-inline">Hire Me</a> <!-- mobile view has its own button -->
								<a data-bs-toggle="collapse" data-bs-target="#navmenu" @click="showModal()" style="cursor: pointer" class="navbar-brand nav-link d-sm-none">Hire Me</a>
							</li>
							<li class="nav-item pb-1 pt-1">
								<a href="../assets/alireza-safari-resume.pdf" target="_blank" class="navbar-brand nav-link">Download CV</a>
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
		mounted() {

		},
		methods: {
			showModal() {
				this.overlayToggler()
				this.$router.push('/')
				
				$(`#myModal`).removeClass('close')
				$(`#myModal`).css('display', 'block')
				
			},
			overlayToggler() {
				$('.hamburger-overlay').toggleClass('is-active')
			}
		},
	}
</script>

<style>
	@import "../node_modules/bootstrap/dist/css/bootstrap.css";
	@import './assets/css/site.css';
	@import './assets/css/spinner.css';
</style>
