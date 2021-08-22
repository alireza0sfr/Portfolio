<template>
	<div id="portfolio">

		<!-- Hire Me Modal -->
		<div id="hire-me" class="modal">

			<!-- Modal content -->
			<div class="modal-content">
				<div class="contant-section px-3 px-lg-4">
					<h2 class="h3 text mb-1">Contact</h2>
					<div class="row">
						<div style="width:100%;" class="col-md-7 d-print-none">
							<div class="my-2">
								<form action="https://formspree.io/f/mnqlqjpn" method="POST">
									<div class="row contact-fields">
										<div class="col-6">
											<input class="form-control" type="text" id="name" name="name" placeholder="Your Name" required />
										</div>
										<div class="col-6">
											<input class="form-control" type="email" id="email" name="_replyto" placeholder="Your E-mail" required />
										</div>
									</div>
									<div class="form-group my-2">
										<textarea class="form-control" style="resize: none" id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
									</div>
									<button class="btn btn-primary mt-2 rounded-3" type="submit">Send</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Button trigger modal -->
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
			Sign Up
		</button>

		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<div class="column" id="main">
							<h1>Sign Up </h1>
							<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
							<form>
								<div class="form-group">
									<label for="exampleInputName">Name</label>
									<input type="name" class="form-control" id="exampleInputName" placeholder="Name">
								</div>
								<div class="form-group">
									<label for="exampleInputEmail1">E-mail </label>
									<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail">
								</div>
								<div class="form-group">
									<label for="exampleInputPassword1">Password</label>
									<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
								</div>
								<button type="submit" class="btn btn-primary">Sign Up</button>
							</form>
						</div>
						<div>
							<svg width="67px" height="578px" viewBox="0 0 67 578" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
								<title>Path</title>
								<desc>Created with Sketch.</desc>
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z" id="Path" fill="#F9BC35"></path>
								</g>
							</svg>
						</div>
						<div class="column" id="secondary">
							<div class="sec-content">
								<h2>Welcome Back!</h2>
								<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
								<button type="button" class="btn btn-primary">Login</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<body id="portfolio-english">
			<header class="d-print-none">
				<div class="container text-center text-lg-left mt-5">
					<div class="clearfix">
						<div class="site-nav">
							<nav role="navigation">
								<ul class="nav justify-content-center">
									<li class="nav-item">
										<a class="nav-link" href="https://twitter.com/Alireza0sfr" target="_blank" title="Twitter">
											<i class="fab fa-twitter"></i>
											<span class="menu-title sr-only">Twitter</span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="https://www.linkedin.com/in/alireza-safari-3b23231bb/" target="_blank" title="Linkedin">
											<i class="fab fa-linkedin"></i>
											<span class="menu-title sr-only">Linkedin</span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="https://www.instagram.com/alireza0sfr" target="_blank" title="Instagram">
											<i class="fab fa-instagram"></i>
											<span class="menu-title sr-only">Instagram</span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="https://github.com/alireza0sfr" target="_blank" title="Github">
											<i class="fab fa-github"></i>
											<span class="menu-title sr-only">Github</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<div class="page-content">
				<div class="container">
					<div class="cover shadow-lg bg-white">
						<div class="cover-bg p-3 p-lg-4 text-white">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<div class="avatar hover-effect bg-white shadow-sm p-1" style="margin-top: -20px;">
										<img src="../assets/images/avatar.jpg" width="200" height="200" />
									</div>
								</div>
								<div class="col-lg-8 col-md-7 text-center text-md-start">
									<h2 class="h1 mt-2" data-aos="fade-left" data-aos-delay="0">Alireza Safari</h2>
									<p data-aos="fade-left" data-aos-delay="100">Full Stack Developer</p>
									<div class="d-print-none btn-container" data-aos="fade-left" data-aos-delay="200">
										<a class="btn btn-light text-dark shadow-sm mt-1 me-1" href="../assets/alireza-safari-resume.pdf" target="_blank">Download CV</a>
										<a class="btn btn-success shadow-sm mt-1 hire" @click="showModal('hire-me')">Hire Me</a>
									</div>
								</div>
							</div>
						</div>
						<div class="about-section pt-4 px-3 px-lg-4 mt-1">
							<div class="row">
								<div class="col-md-6">
									<h2 class="h3 mb-3">About Me</h2>
									<p>
										Hi, I'm Alireza. I was born in July 25th, 2002 in my beautiful
										city, Shiraz. I'm a Full-stack Web Developer and a passionate
										automated bots designer. I'm also student of Software
										Engineering at Shiraz Azad University .
									</p>
								</div>
								<div class="col-md-5 offset-md-1">
									<div class="row mt-2">
										<div class="col-sm-4">
											<div class="pb-1">Age</div>
										</div>
										<div class="col-sm-8">
											<div class="pb-1 text-secondary">{{age}}</div>
										</div>
										<div class="col-sm-4">
											<div class="pb-1">Email</div>
										</div>
										<div class="col-sm-8">
											<div class="pb-1 text-secondary">alireza.safaree@gmail.com</div>
										</div>
										<div class="col-sm-4">
											<div class="pb-1">Phone</div>
										</div>
										<div class="col-sm-8">
											<div class="pb-1 text-secondary">+989034171190</div>
										</div>
										<div class="col-sm-4">
											<div class="pb-1">Address</div>
										</div>
										<div class="col-sm-8">
											<div class="pb-1 text-secondary">Shiraz, Fars, Iran</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr class="d-print-none" />
						<div class="skills-section px-3 px-lg-4">
							<h2 class="h3 mb-3">Professional Skills</h2>
							<div class="row">
								<div class="col-md-6">
									<div class="mb-2">
										<span>HTML / CSS</span>
										<div class="progress my-1">
											<div class="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="100" data-aos-anchor=".skills-section" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<div class="mb-2">
										<span>Bootstrap</span>
										<div class="progress my-1">
											<div class="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor=".skills-section" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<div class="mb-2">
										<span>JavaScript</span>
										<div class="progress my-1">
											<div class="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<div class="mb-2">
										<span>Vue.JS</span>
										<div class="progress my-1">
											<div class="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="100" data-aos-anchor=".skills-section" style="width: 80%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="mb-2">
										<span>Python</span>
										<div class="progress my-1">
											<div class="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay="400" data-aos-anchor=".skills-section" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<div class="mb-2">
										<span>Django</span>
										<div class="progress my-1">
											<div class="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay="400" data-aos-anchor=".skills-section" style="width: 80%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<div class="mb-2">
										<span>Git</span>
										<div class="progress my-1">
											<div class="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay="500" data-aos-anchor=".skills-section" style="width: 80%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<div class="mb-2">
										<span>Nuxt.js</span>
										<div class="progress my-1">
											<div class="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay="600" data-aos-anchor=".skills-section" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr class="d-print-none" />
						<div class="work-experience-section px-3 px-lg-4">
							<h2 class="h3 mb-4">Work Experience</h2>
							<div class="timeline">
								<pf-card v-for="(option, index) in workXPOptions" :key="index" :options="option" />
							</div>
						</div>
						<hr class="d-print-none" />
						<div class="page-break"></div>
						<div class="education-section px-3 px-lg-4 pb-4">
							<h2 class="h3 mb-4">Education</h2>
							<div class="timeline">
								<div class="timeline-card timeline-card-success card shadow-sm">
									<div class="card-body">
										<div class="h5 mb-1">
											Bachelor of Software Engineering
											<span class="text-muted h6">from Shiraz Azad University</span>
										</div>
										<div class="text-muted text-small mb-2">2020 - Present</div>
										<div>
											The systematic development and application of techniques
											which lead to the creation of correct and reliable computer
											software.
										</div>
									</div>
								</div>
								<div class="timeline-card timeline-card-success card shadow-sm">
									<div class="card-body">
										<div class="h5 mb-1">
											Diploma in Experimental Science
											<span class="text-muted h6">from Negaresh High Scool</span>
										</div>
										<div class="text-muted text-small mb-2">2017 - 2020</div>
										<div>
											I studied Experimental Science in Negaresh High School for 3
											years.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer class="pt-4 pb-4 text-muted text-center d-print-none">
				<div class="container">
					<div class="my-3">
						<div class="h4">Alireza Safari</div>
						<div class="footer-nav">
							<nav role="navigation">
								<ul class="nav justify-content-center">
									<li class="nav-item">
										<a class="nav-link" href="https://twitter.com/alireza0sfr" target="_blank" title="Twitter">
											<i class="fab fa-twitter"></i>
											<span class="menu-title sr-only">Twitter</span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="https://www.linkedin.com/in/alireza-safari-3b23231bb/" target="_blank" title="Linkedin">
											<i class="fab fa-linkedin"></i>
											<span class="menu-title sr-only">Linkedin</span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="https://www.instagram.com/alireza0sfr" target="_blank" title="Instagram">
											<i class="fab fa-instagram"></i>
											<span class="menu-title sr-only">Instagram</span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="https://github.com/alireza0sfr" target="_blank" title="Github">
											<i class="fab fa-github"></i>
											<span class="menu-title sr-only">Github</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="text-small">
						<div class="mb-1">&copy; All rights reserved.</div>
					</div>
				</div>
			</footer>
		</body>
	</div>
</template>

<script>
	import AOS from 'aos'
	import 'aos/dist/aos.css'
	export default {
		name: 'Portfolio',
		mounted() {

			setTimeout(() => {
				$('.loading-overlay').addClass('collapsed')

				AOS.init({
				anchorPlacement: 'top-left',
				duration: 1000})

			}, 1);

			this.modalFunc('hire-me')
		},
			computed: {
				currentDate() {
					return {
					year: new Date().getFullYear(),
					month: new Date().getMonth(),
					day: new Date().getDate()
			}
				},
				age() {
					return this.currentDate.year - this.birthYear
				}
		},
		data() {
			return {
				birthYear: 2002,
				workXPOptions: [
					{
					position: {
						value: 'Frontend Developer'
					},
					place: {
						value: 'Nikan',
					},
					link: {
						value: 'https://nikansoft.com',
						target: '_blank'
					},
					startDate: {
						value: '5/1/2021'
					},
					endDate: {
						value: 'Present'
					},
					type: {
						value: 'Full-Time'
					},
					description: {
						value: "Nikan is a windows accounting software. Nikan develop team and I are currently working on the Nikan Web version Using Vue.js, .NET Core, Bootstrap."
					},
					color:{
						value: 'primary'
					}
					},
					{
					position: {
						value: 'Frontend Developer'
					},
					place: {
						value: 'Cafepay',
					},
					link: {
						value: 'https://cafepay.app/',
						target: '_blank'
					},
					startDate: {
						value: '4/1/2021'
					},
					endDate: {
						value: 'Present'
					},
					type: {
						value: 'Freelance'
					},
					description: {
						value: "Cafepay is a startup that helps people ordering and booking at popular Cafes.I'm helping the developer team to maintain the webapp and add new features to it using Vue.js, Nuxt,js, Bootstrap."
					},
					color:{
						value: 'primary'
					}
					},
					{
					position: {
						value: 'Automated Bots Developer'
					},
					place: {
						value: 'UtabPars',
					},
					link: {
						value: 'https://utabpars.com/',
						target: '_blank'
					},
					startDate: {
						value: '4/1/2021'
					},
					endDate: {
						value: '5/1/2021'
					},
					type: {
						value: 'Freelance'
					},
					description: {
						value: "At UtabPars I built several data scarping bots using Python to extract data from popular Persian sites and built a database out of it."
					},
					color:{
						value: 'primary'
					}
					},
					{
					position: {
						value: 'Automated Bots Developer'
					},
					place: {
						value: 'Artacode',
					},
					link: {
						value: 'https://artacode.ir/',
						target: '_blank'
					},
					startDate: {
						value: '4/1/2021'
					},
					endDate: {
						value: '5/1/2021'
					},
					type: {
						value: 'Freelance'
					},
					description: {
						value: "Built automated robots using python such as data scraper, social media scraper, telegram bots, stock trader bots and etc."
					},
					color:{
						value: 'primary'
					}
					},
					{
					position: {
						value: 'Full Stack Developer'
					},
					place: {
						value: 'Ponisha',
					},
					link: {
						value: 'https://ponisha.ir/profile/alireza.safari',
						target: '_blank'
					},
					startDate: {
						value: '8/1/2020'
					},
					endDate: {
						value: '5/1/2021'
					},
					type: {
						value: 'Freelance'
					},
					description: {
						value: "I started by translating and creating SEO friendly contents then continued by making automated bots and then Used to build and maintain websites using Django, Vue.js, Bootstrap"
					},
					color:{
						value: 'primary'
					}
					}
				],
			}
		},

		methods: {

			modalFunc(id) {
				// Get the modal
				var modal = document.getElementById(id)

				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function (event) {
					if (event.target == modal) {
						$(`#${id}`).addClass('close') // trigerring modal animation
						setTimeout(() => {
							$(`#${id}`).css('display', 'none') // close the modal 
							$('.hamburger-overlay').removeClass('is-active') // remove the overlay
						}, 400);
					}
				}
			},
			showModal(id) {
				$(`#${id}`).removeClass('close')
				if($(`#${id}`).css('display') == 'none') {
					$(`#${id}`).css('display', 'block')
				}else {
					$(`#${id}`).css('display', 'none')
				}
			},
			toLocalDigits(n) {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]

      return n.toString().replace(/\d/g, (x) => farsiDigits[x])
    },
		}
	}
</script>

<style scoped>
	@import "../assets/css/portfolio-styles/bootstrap.min.css";
	@import "../assets/css/portfolio-styles/portfolio.css";
	@import "../assets/css/font-awesome/css/all.min.css";
	@import "../assets/css/modal.css";
</style>