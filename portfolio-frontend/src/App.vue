<template>
	<div id="app">

		<!-- Projects Modal -->
		<div id="projectsModal" class="modal">
			<!-- Modal content -->
			<div class="modal-content"></div>
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
							<li class="nav-item pb-1 pt-1 ms-2">
								<router-link to="/portfolio" class="navbar-brand nav-link">CV</router-link>
							</li>
							<li class="nav-item ms-2 pb-1 pt-1">
								<router-link to="/" class="navbar-brand nav-link">Projects</router-link>
							</li>
							<li class="nav-item pb-1 pt-1">
								<a @click="showModal()" style="cursor: pointer" class="navbar-brand nav-link d-none d-sm-inline">Hire Me</a>
								<!-- mobile view has its own button -->
								<a data-bs-toggle="collapse" data-bs-target="#navmenu" @click="showModal()" style="cursor: pointer" class="navbar-brand nav-link d-sm-none">Hire Me</a>
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
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
export default {
  name: 'App',
	watch:{
    $route (to, from){
			if(to.fullPath == '/') {
				this.loadFinished()
				$('.navbar').addClass('bg-trans')
			} else {
				$('.navbar').removeClass('bg-trans')
			}
    }
	},
  methods: {
		loadFinished() {
			setTimeout(() => {
      $('.loading-overlay').removeClass('show');
			$('.loading-overlay').remove();
    }, 3500);
		},
    showModal() {
      this.$router.push('/portfolio');
      this.overlayToggler();

      setTimeout(() => {
        $('#hire-me').removeClass('close'); // trigerring modal animation

        if ($('#hire-me').css('display') == 'none') {
          $('#hire-me').css('display', 'block');
        } else {
          $('#hire-me').addClass('close'); // trigerring modal animation
          setTimeout(() => {
            $('#hire-me').css('display', 'none'); // close the modal
            $('.hamburger-overlay').removeClass('is-active'); // remove the overlay
          }, 400);
        }
      }, 100);
    },
    overlayToggler() {
      $('.hamburger-overlay').toggleClass('is-active');
    },
  },
};
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import './assets/css/site.css';
@import './assets/css/spinner.css';
</style>
