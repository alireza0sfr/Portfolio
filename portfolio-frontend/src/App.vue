<template>
	<div id="app">
		<div id="nav">
			<!-- Navbar -->
			<nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
				<div class="container">
					<router-link to="/" class="navbar-brand">Alireza Safari</router-link>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navmenu"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navmenu">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item ms-2">
								<router-link to="/" class="navbar-brand">Projects</router-link>
							</li>
							<li class="nav-item">
								<a @click="showModal()" style="cursor: pointer" class="navbar-brand">Hire Me</a>
							</li>
							<li class="nav-item">
								<a
									href="../assets/alireza-safari-resume.pdf"
									target="_blank"
									class="navbar-brand"
								>Download CV</a>
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
				this.$router.push('/')
				document.getElementById('myModal').style.display = 'block'
			}
		}
	}
</script>

<style>
	@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
