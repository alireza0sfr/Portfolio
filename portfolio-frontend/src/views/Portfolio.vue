<template>
<div id="portfolio">
	<!-- English Version -->

	<!-- Hire Me English Modal -->

	<div id="myModal" class="modal">
		<!-- Modal content -->
		<div class="modal-content">
			<div class="contant-section px-3 px-lg-4 pb-4">
				<h2 class="h3 text mb-3">Contact</h2>
				<div class="row">
					<div style="width:100%;" class="col-md-7 d-print-none">
						<div class="my-2">
							<form action="https://formspree.io/f/mnqlqjpn" method="POST">
								<div class="row contact-fields">
									<div class="col-6">
										<input
											class="form-control"
											type="text"
											id="name"
											name="name"
											placeholder="Your Name"
											required
										/>
									</div>
									<div class="col-6">
										<input
											class="form-control"
											type="email"
											id="email"
											name="_replyto"
											placeholder="Your E-mail"
											required
										/>
									</div>
								</div>
								<div class="form-group my-2">
									<textarea
										class="form-control"
										style="resize: none"
										id="message"
										name="message"
										rows="4"
										placeholder="Your Message"
										required
									></textarea>
								</div>
								<button class="btn btn-primary mt-2" type="submit">Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<body v-if="isPersian == false" id="portfolio-english">
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
									<a
										class="nav-link"
										href="https://www.linkedin.com/in/alireza-safari-3b23231bb/"
										target="_blank"
										title="Linkedin"
									>
										<i class="fab fa-linkedin"></i>
										<span class="menu-title sr-only">Linkedin</span>
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										href="https://www.instagram.com/alireza0sfr"
										target="_blank"
										title="Instagram"
									>
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
								<li class="nav-item">
									<a
										class="nav-link"
										@click="isPersian = !isPersian"
										title="Persian"
										style="cursor: pointer"
									>
										<i class="fas fa-language"></i>
										<span class="menu-title sr-only">Persian</span>
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
									<a
										class="btn btn-light text-dark shadow-sm mt-1 me-1"
										href="../assets/alireza-safari-resume.pdf"
										target="_blank"
									>Download CV</a>
									<a class="btn btn-success shadow-sm mt-1 hire" @click="showModal()">Hire Me</a>
								</div>
							</div>
						</div>
					</div>
					<div class="about-section pt-4 px-3 px-lg-4 mt-1">
						<div class="row">
							<div class="col-md-6">
								<h2 class="h3 mb-3">About Me</h2>
								<p>
									Hi, I'm Alireza. I was born in 2002 July, 25 in my beautiful
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
										<div class="pb-1 text-secondary">19</div>
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
										<div
											class="progress-bar bg-primary"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="100"
											data-aos-anchor=".skills-section"
											style="width: 90%"
											aria-valuenow="90"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>Bootstrap</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-primary"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="200"
											data-aos-anchor=".skills-section"
											style="width: 85%"
											aria-valuenow="85"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>JavaScript</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-primary"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="300"
											data-aos-anchor=".skills-section"
											style="width: 80%"
											aria-valuenow="80"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>Vue.JS</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-primary"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="100"
											data-aos-anchor=".skills-section"
											style="width: 80%"
											aria-valuenow="90"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="mb-2">
									<span>Python</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-success"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="400"
											data-aos-anchor=".skills-section"
											style="width: 90%"
											aria-valuenow="90"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>Django</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-success"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="400"
											data-aos-anchor=".skills-section"
											style="width: 80%"
											aria-valuenow="90"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>Git</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-success"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="500"
											data-aos-anchor=".skills-section"
											style="width: 80%"
											aria-valuenow="85"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>Nuxt.js</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-success"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="600"
											data-aos-anchor=".skills-section"
											style="width: 75%"
											aria-valuenow="75"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr class="d-print-none" />
					<div class="work-experience-section px-3 px-lg-4">
						<h2 class="h3 mb-4">Work Experience</h2>
						<div class="timeline">
							<div class="timeline-card timeline-card-primary card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										Frontend Developer
										<span class="text-muted h6">
											at
											<a href="https://nikansoft.com/" style="text-decoration: none" target="_blank">Nikan</a>
										</span>
									</div>
									<div class="text-muted text-small mb-2">June, 2021 - Present | Full-Time</div>
									<div>
										Nikan is a windows accounting software. I'm currently
										working on the Nikan Web version Using Vue.js, Bootstrap.
									</div>
								</div>
							</div>
							<div class="timeline-card timeline-card-primary card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										Frontend Developer
										<span class="text-muted h6">
											at
											<a href="https://cafepay.app/" style="text-decoration: none" target="_blank">Cafepay</a>
										</span>
									</div>
									<div class="text-muted text-small mb-2">April, 2021 - Present | Part-Time</div>
									<div>
										Cafepay is a startup that helps people ordering and booking
										at popular Cafes.I'm helping the developer team to maintain
										the webapp and add new features to it using Vue.js, Nuxt,js,
										Bootstrap.
									</div>
								</div>
							</div>
							<div class="timeline-card timeline-card-primary card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										Automated Bots Developer
										<span class="text-muted h6">
											at
											<a href="https://utabpars.com/" style="text-decoration: none" target="_blank">UtabPars</a>
										</span>
									</div>
									<div class="text-muted text-small mb-2">April, 2021 - June 2021 | Freelance</div>
									<div>
										At UtabPars I built several data scarping bots using Python
										to extract data from popular Persian sites and built a
										database out of it.
									</div>
								</div>
							</div>
							<div class="timeline-card timeline-card-primary card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										Automated Bots Developer
										<span class="text-muted h6">
											at
											<a href="https://artacode.ir" style="text-decoration: none" target="_blank">Artacode</a>
										</span>
									</div>
									<div class="text-muted text-small mb-2">September, 2020 - June, 2021 | Freelance</div>
									<div>
										Built automated robots using python such as data scraper,
										social media scraper, telegram bots, stock trader bots and
										etc.
									</div>
								</div>
							</div>
							<div class="timeline-card timeline-card-primary card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										Full Stack Developer
										<span class="text-muted h6">
											at
											<a
												href="https://ponisha.ir/profile/alireza.safari"
												style="text-decoration: none"
												target="_blank"
											>Ponisha</a>
										</span>
									</div>
									<div class="text-muted text-small mb-2">August, 2020 - May, 2021 | Freelance</div>
									<div>
										I started by translating and creating SEO friendly contents
										then continued by making automated bots and then Used to
										build and maintain websites using Django, Vue.js, Bootstrap
									</div>
								</div>
							</div>
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
									<a
										class="nav-link"
										href="https://www.linkedin.com/in/alireza-safari-3b23231bb/"
										target="_blank"
										title="Linkedin"
									>
										<i class="fab fa-linkedin"></i>
										<span class="menu-title sr-only">Linkedin</span>
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										href="https://www.instagram.com/alireza0sfr"
										target="_blank"
										title="Instagram"
									>
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

	<!-- Persian Version -->
	<body v-else id="top">
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
									<a
										class="nav-link"
										href="https://www.linkedin.com/in/alireza-safari-3b23231bb/"
										target="_blank"
										title="Linkedin"
									>
										<i class="fab fa-linkedin"></i>
										<span class="menu-title sr-only">Linkedin</span>
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										href="https://www.instagram.com/alireza0sfr"
										target="_blank"
										title="Instagram"
									>
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
								<li class="nav-item">
									<a
										class="nav-link"
										style="cursor: pointer"
										@click="isPersian = !isPersian"
										title="English"
									>
										<i class="fas fa-language"></i>
										<span class="menu-title sr-only">English</span>
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
								<h2 class="h1 mt-2" data-aos="fade-left" data-aos-delay="0">علیرضا صفری</h2>
								<p data-aos="fade-left" data-aos-delay="100">برنامه نویس فول استک</p>
								<div class="d-print-none" data-aos="fade-left" data-aos-delay="200">
									<a
										class="btn btn-light text-dark shadow-sm mt-1 me-1"
										href="../assets/alireza-safari-resume.pdf"
										target="_blank"
									>دانلود روزمه</a>
									<a class="btn btn-success shadow-sm mt-1" @click="showModal()">استخدام کنید</a>
								</div>
							</div>
						</div>
					</div>
					<div class="about-section pt-4 px-3 px-lg-4 mt-1">
						<div class="row">
							<div class="col-md-6">
								<h2 style="text-align: right" class="h3 mb-3">درباره من</h2>
								<p style="text-align: right">
									سلام من علیرضا هستم در ۳ مرداد ۱۳۸۱ در شهر زیبای شیراز متولد
									شدم یک برنامه نویس فول استک هستم و علاقه مند به طراحی ربات های
									اتوماتیک. همچنین در حال تحصیل مهندسی کامپیوتر گرایش نرم افزار
									در دانشگاه ازاد شیراز هستم
								</p>
							</div>
							<div class="col-md-5 offset-md-1">
								<div class="row mt-2">
									<div class="col-sm-4">
										<div class="pb-1">سن</div>
									</div>
									<div class="col-sm-8">
										<div class="pb-1 text-secondary">۱۹</div>
									</div>
									<div class="col-sm-4">
										<div class="pb-1">ایمیل</div>
									</div>
									<div class="col-sm-8">
										<div class="pb-1 text-secondary">alireza.safaree@gmail.com</div>
									</div>
									<div class="col-sm-4">
										<div class="pb-1">شماره</div>
									</div>
									<div class="col-sm-8">
										<div class="pb-1 text-secondary">۰۹۰۳۴۱۷۱۱۹۰</div>
									</div>
									<div class="col-sm-4">
										<div class="pb-1">آدرس</div>
									</div>
									<div class="col-sm-8">
										<div style="text-align: left" class="pb-1 text-secondary">فارس شیراز</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr class="d-print-none" />
					<div class="skills-section px-3 px-lg-4">
						<h2 style="text-align: right" class="h3 mb-3">مهارت های حرفه ای</h2>
						<div class="row">
							<div class="col-md-6">
								<div class="mb-2">
									<span>HTML / CSS</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-primary"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="100"
											data-aos-anchor=".skills-section"
											style="width: 90%"
											aria-valuenow="90"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>Bootstrap</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-primary"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="200"
											data-aos-anchor=".skills-section"
											style="width: 85%"
											aria-valuenow="85"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>JavaScript</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-primary"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="300"
											data-aos-anchor=".skills-section"
											style="width: 80%"
											aria-valuenow="75"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>Vue.JS</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-primary"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="100"
											data-aos-anchor=".skills-section"
											style="width: 80%"
											aria-valuenow="90"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="mb-2">
									<span>Python</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-success"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="400"
											data-aos-anchor=".skills-section"
											style="width: 90%"
											aria-valuenow="90"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>Django</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-success"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="400"
											data-aos-anchor=".skills-section"
											style="width: 80%"
											aria-valuenow="90"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>Git</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-success"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="500"
											data-aos-anchor=".skills-section"
											style="width: 80%"
											aria-valuenow="85"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
								<div class="mb-2">
									<span>Nuxt.js</span>
									<div class="progress my-1">
										<div
											class="progress-bar bg-success"
											role="progressbar"
											data-aos="zoom-in-right"
											data-aos-delay="600"
											data-aos-anchor=".skills-section"
											style="width: 75%"
											aria-valuenow="75"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr class="d-print-none" />
					<div class="work-experience-section px-3 px-lg-4">
						<h2 style="text-align: right" class="h3 mb-4">تجربه کاری</h2>
						<div style="text-align: right" class="timeline">
							<div class="timeline-card timeline-card-primary card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										برنامه نویس فرانت
										<span class="text-muted h6">
											در
											<a href="https://nikansoft.com/" style="text-decoration: none" target="_blank">نیکان</a>
										</span>
									</div>
									<div class="text-muted text-small mb-2">خرداد ۱۴۰۰ - حالا | تمام وقت</div>
									<div>
										نیکان یک برنامه ی ویندوزی برای حسابداری است و من در حال
										توسعه ورژن وب نیکان با استفاده از ویو, بوت استرپ هستم
									</div>
								</div>
							</div>
							<div class="timeline-card timeline-card-primary card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										برنامه نویس فرانت
										<span class="text-muted h6">
											در
											<a href="https://cafepay.app/" style="text-decoration: none" target="_blank">کافه پی</a>
										</span>
									</div>
									<div class="text-muted text-small mb-2">فروردین ۱۴۰۰ - حالا | پاره وقت</div>
									<div>
										کافه پی استارتاپی است که به افراد در سفارش و رزرو در کافه
										های معروف کمک می کند. من به تیم توسعه دهنده کمک می کنم تا وب
										اپ را حفظ کند و با استفاده از ویو ، ناکست ، بوت استرپ ویژگی
										های جدیدی به آن اضافه کند
									</div>
								</div>
							</div>
							<div class="timeline-card timeline-card-primary card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										طراح ربات های اتوماتیک
										<span class="text-muted h6">
											در
											<a
												href="https://utabpars.com/"
												style="text-decoration: none"
												target="_blank"
											>یوتاب پارس</a>
										</span>
									</div>
									<div class="text-muted text-small mb-2">فروردین ۱۴۰۰ - تیر ۱۴۰۰ | فریلنسری</div>
									<div>
										در یوتاب پارس من با استفاده از پایتون برای استخراج داده ها
										از سایت های معروف فارسی چندین ربات استخراج داده طراحی کردم و
										از آن پایگاه داده ساختم
									</div>
								</div>
							</div>
							<div class="timeline-card timeline-card-primary card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										طراح ربات های اتوماتیک
										<span class="text-muted h6">
											در
											<a href="https://artacode.ir" style="text-decoration: none" target="_blank">آرتاکد</a>
										</span>
									</div>
									<div class="text-muted text-small mb-2">مهر ۱۳۹۹ - خرداد ۱۴۰۰ | فریلنسری</div>
									<div>
										ساخت روبات های خودکار با استفاده از پایتون مانند: خزشگر شبکه
										های اجتماعی، ربات های تلگرامی، ربات های معامله گر سهام و
										غیره
									</div>
								</div>
							</div>
							<div class="timeline-card timeline-card-primary card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										برنامه نویس فول استک
										<span class="text-muted h6">
											در
											<a
												href="https://ponisha.ir/profile/alireza.safari"
												style="text-decoration: none"
												target="_blank"
											>پونیشا</a>
										</span>
									</div>
									<div class="text-muted text-small mb-2">شهریور ۱۳۹۹ - اردیبهشت ۱۴۰۰ | فریلنسری</div>
									<div>
										در ابتدا به تهیه و ترجمه محتوای سئو شده پرداختم و سپس به
										توسعه ربات های اتوماتیک و در آخر به ساخت و پشتیبانی وبسایت
										ها به وسیله ی: جنگو, ویو , بوت استرپ
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr class="d-print-none" />
					<div class="page-break"></div>
					<div class="education-section px-3 px-lg-4 pb-4">
						<h2 style="text-align: right" class="h3 mb-4">تحصیلات</h2>
						<div style="text-align: right" class="timeline">
							<div class="timeline-card timeline-card-success card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										کارشناسی مهندسی کامپیوتر گرایش نرم افزار
										<span class="text-muted h6">در دانشگاه آزاد شیراز</span>
									</div>
									<div class="text-muted text-small mb-2">۱۳۹۹ - حالا</div>
									<div>
										توسعه سیستماتیک و کاربرد تکنیک هایی که منجر به ایجاد نرم
										افزار صحیح و قابل اعتماد رایانه می شود
									</div>
								</div>
							</div>
							<div class="timeline-card timeline-card-success card shadow-sm">
								<div class="card-body">
									<div class="h5 mb-1">
										دیپلم علوم تجربی
										<span class="text-muted h6">در دبیرستان نگرش</span>
									</div>
									<div class="text-muted text-small mb-2">۱۳۹۶ - ۱۳۹۹</div>
									<div>سه سال در رشته ی علوم تجربی ر دبیرستان نگرش تحصیل کردم</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="pt-4 pb-4 text-muted text-center d-print-none" id="socials">
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
									<a
										class="nav-link"
										href="https://www.linkedin.com/in/alireza-safari-3b23231bb/"
										target="_blank"
										title="Linkedin"
									>
										<i class="fab fa-linkedin"></i>
										<span class="menu-title sr-only">Linkedin</span>
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										href="https://www.instagram.com/alireza0sfr"
										target="_blank"
										title="Instagram"
									>
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

			document.title = 'Alireza Safari'

			AOS.init({
				anchorPlacement: 'top-left',
				duration: 1000
			})

			this.modalFunc()
		},

		data() {
			return {
				isPersian: false,
			}
		},

		methods: {

			modalFunc() {
				// Get the modal
				var modal = document.getElementById("myModal")

				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function (event) {
					if (event.target == modal) {
						modal.style.display = "none"
					}
				}
			},
			showModal() {
				document.getElementById('myModal').style.display = 'block'
			}
		}
	}
</script>

<style scoped>
	@import "../assets/css/portfolio styles/bootstrap.min.css";
	@import "../assets/css/portfolio styles/portfolio.css";
	@import "../assets/css/font-awesome/css/all.min.css";
	@import "../assets/css/modal.css";
</style>