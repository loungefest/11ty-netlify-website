// noinspection JSVoidFunctionReturnValueUsed

jQuery(function ($) {
    'use strict';

		// Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "1199"
        });

		// Others Option For Responsive JS
		$(".others-option-for-responsive .dot-menu").on("click", function(){
			$(".others-option-for-responsive .container .container").toggleClass("active");
		});

		// Button Hover JS
		$('.default-btn')
		.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});

		// Home Slides
		$('.home-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			autoplayHoverPause: false,
            autoplay: false,
			autoHeight:true,
            items: 1,
            navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ]
        });
        $(".home-slides").on("translate.owl.carousel", function(){
            $(".main-slides-content h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-slides-content p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-slides-content .slides-btn .default-btn").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-slides-content .slides-btn .optional-btn").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function(){
            $(".main-slides-content h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-slides-content p").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-slides-content .slides-btn .default-btn").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-slides-content .slides-btn .optional-btn").addClass("animated fadeInUp").css("opacity", "1");
		});

		// Expect Slides
		$('.expect-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			margin: 25,
			autoplayHoverPause: true,
			autoplay: true,
			autoHeight:true,
			navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 2
				},
				768: {
					items: 3
				},
				1200: {
					items: 5
				}
			}
		});

		// Testimonial Slides
		$('.testimonial-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			margin: 25,
			autoplayHoverPause: true,
			autoplay: true,
			autoHeight:true,
			navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 2
				},
				768: {
					items: 2
				},
				1200: {
					items: 4
				}
			}
		});
		$('.testimonial-slides-two').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			margin: 25,
			autoplayHoverPause: true,
			autoplay: true,
			autoHeight:true,
			navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 1
				},
				768: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});

		// Partner Slides
		$('.partner-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			smartSpeed: 500,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			autoHeight:true,
			navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 2
				},
				768: {
					items: 3
				},
				1200: {
					items: 5
				}
			}
		});

		// Count Time
		function makeTimer() {
			var endTime = new Date("September 30, 2024 17:00:00 PDT");
			var endTime = (Date.parse(endTime)) / 1000;
			var now = new Date();
			var now = (Date.parse(now) / 1000);
			var timeLeft = endTime - now;
			var days = Math.floor(timeLeft / 86400);
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }
			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");
		}
		setInterval(function() { makeTimer(); }, 300);

		// Odometer JS
        $('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		// Count Time
		function makeTimer() {
			var endTime = new Date("December 30, 2024 17:00:00 PDT");
			var endTime = (Date.parse(endTime)) / 1000;
			var now = new Date();
			var now = (Date.parse(now) / 1000);
			var timeLeft = endTime - now;
			var days = Math.floor(timeLeft / 86400);
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }
			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");
		}
		setInterval(function() { makeTimer(); }, 0);

		// Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
				formErrorSub();
				submitMSGSub(false, "Please enter your email correctly.");
			}
			else {
				event.preventDefault();
			}
		});
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Thank you for subscribing!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		function submitMSGSub(valid, msg){
			if(valid){
				var msgClasses = "validation-success";
			}
			else {
				var msgClasses = "validation-danger";
			}
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}
		// AJAX MailChimp
		$(".newsletter-form").ajaxChimp({
			url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
			callback: callbackFunction
		});

		// Input Plus & Minus Number JS
		$('.input-counter').each(function() {
			var spinner = jQuery(this),
			input = spinner.find('input[type="text"]'),
			btnUp = spinner.find('.plus-btn'),
			btnDown = spinner.find('.minus-btn'),
			min = input.attr('min'),
			max = input.attr('max');

			btnUp.on('click', function() {
				var oldValue = parseFloat(input.val());
				if (oldValue >= max) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue + 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
			btnDown.on('click', function() {
				var oldValue = parseFloat(input.val());
				if (oldValue <= min) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue - 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
		});

		// Products Details Image Slides
		$('.products-details-image-slides').slick({
			dots: true,
			speed: 500,
			fade: false,
			slide: 'li',
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			prevArrow: false,
    		nextArrow: false,
			responsive: [{
				breakpoint: 800,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '40px',
					variableWidth: false,
					slidesToShow: 1,
					dots: true
				},
				breakpoint: 1200,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '40px',
					variableWidth: false,
					slidesToShow: 1,
					dots: true
				}
			}],
			customPaging: function (slider, i) {
				return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
			}
        });

        // WOW Animation JS
		if($('.wow').length){
			var wow = new WOW({
				mobile: false
			});
			wow.init();
		}

		// Go to Top
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});

        // Preloader
		jQuery(window).on('load',function(){
			jQuery(".preloader").fadeOut(500);
		});

	var lava1;
	var lava2;
	var ge1doot = {
		screen: {
			elem:     null,
			callback: null,
			ctx:      null,
			width:    0,
			height:   0,
			left:     0,
			top:      0,
			init: function (id, callback, initRes) {
				this.elem = document.getElementById(id);
				this.callback = callback || null;
				if (this.elem.tagName == "CANVAS") this.ctx = this.elem.getContext("2d");
				window.addEventListener('resize', function () {
					this.resize();
				}.bind(this), false);
				this.elem.onselectstart = function () { return false; }
				this.elem.ondrag        = function () { return false; }
				initRes && this.resize();
				return this;
			},
			resize: function () {
				var o = this.elem;
				this.width  = o.offsetWidth;
				this.height = o.offsetHeight;
				for (this.left = 0, this.top = 0; o != null; o = o.offsetParent) {
					this.left += o.offsetLeft;
					this.top  += o.offsetTop;
				}
				if (this.ctx) {
					this.elem.width  = this.width;
					this.elem.height = this.height;
				}
				this.callback && this.callback();
			}
		}
	}

	// Point constructor
	var Point = function(x, y) {
		this.x = x;
		this.y = y;
		this.magnitude = x * x + y * y;
		this.computed = 0;
		this.force = 0;
	};
	Point.prototype.add = function(p) {
		return new Point(this.x + p.x, this.y + p.y);
	};

	// Ball constructor
	var Ball = function(parent) {
		var min = .1;
		var max = 1.5;
		this.vel = new Point(
			(Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.25), (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random())
		);
		this.pos = new Point(
			parent.width * 0.2 + Math.random() * parent.width * 0.6,
			parent.height * 0.2 + Math.random() * parent.height * 0.6
		);
		this.size = (parent.wh / 15) + ( Math.random() * (max - min) + min ) * (parent.wh / 15);
		this.width = parent.width;
		this.height = parent.height;
	};

	// move balls
	Ball.prototype.move = function() {

		// bounce borders
		if (this.pos.x >= this.width - this.size) {
			if (this.vel.x > 0) this.vel.x = -this.vel.x;
			this.pos.x = this.width - this.size;
		} else if (this.pos.x <= this.size) {
			if (this.vel.x < 0) this.vel.x = -this.vel.x;
			this.pos.x = this.size;
		}

		if (this.pos.y >= this.height - this.size) {
			if (this.vel.y > 0) this.vel.y = -this.vel.y;
			this.pos.y = this.height - this.size;
		} else if (this.pos.y <= this.size) {
			if (this.vel.y < 0) this.vel.y = -this.vel.y;
			this.pos.y = this.size;
		}

		// velocity
		this.pos = this.pos.add(this.vel);

	};

	// lavalamp constructor
	var LavaLamp = function(width, height, numBalls, c0, c1, ctx) {
		this.step = 5;
		this.width = width;
		this.height = height;
		this.wh = Math.min(width, height);
		this.sx = Math.floor(this.width / this.step);
		this.sy = Math.floor(this.height / this.step);
		this.paint = false;
		this.metaFill = createRadialGradient(width, height, width, c0, c1, ctx);
		this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
		this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
		this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
		this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1];
		this.grid = [];
		this.balls = [];
		this.iter = 0;
		this.sign = 1;

		// init grid
		for (var i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
			this.grid[i] = new Point(
				(i % (this.sx + 2)) * this.step, (Math.floor(i / (this.sx + 2))) * this.step
			)
		}

		// create metaballs
		for (var k = 0; k < numBalls; k++) {
			this.balls[k] = new Ball(this);
		}
	};
	// compute cell force
	LavaLamp.prototype.computeForce = function(x, y, idx) {

		var force;
		var id = idx || x + y * (this.sx + 2);

		if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
			force = 0.6 * this.sign;
		} else {
			force = 0;
			var cell = this.grid[id];
			var i = 0;
			var ball;
			while (ball = this.balls[i++]) {
				force += ball.size * ball.size / (-2 * cell.x * ball.pos.x - 2 * cell.y * ball.pos.y + ball.pos.magnitude + cell.magnitude);
			}
			force *= this.sign
		}
		this.grid[id].force = force;
		return force;
	};
	// compute cell
	LavaLamp.prototype.marchingSquares = function(next, ctx) {
		var x = next[0];
		var y = next[1];
		var pdir = next[2];
		var id = x + y * (this.sx + 2);
		if (this.grid[id].computed === this.iter) {
			return false;
		}
		var dir, mscase = 0;

		// neighbors force
		for (var i = 0; i < 4; i++) {
			var idn = (x + this.ix[i + 12]) + (y + this.ix[i + 16]) * (this.sx + 2);
			var force = this.grid[idn].force;
			if ((force > 0 && this.sign < 0) || (force < 0 && this.sign > 0) || !force) {
				// compute force if not in buffer
				force = this.computeForce(
					x + this.ix[i + 12],
					y + this.ix[i + 16],
					idn
				);
			}
			if (Math.abs(force) > 1) mscase += Math.pow(2, i);
		}
		if (mscase === 15) {
			// inside
			return [x, y - 1, false];
		} else {
			// ambiguous cases
			if (mscase === 5) dir = (pdir === 2) ? 3 : 1;
			else if (mscase === 10) dir = (pdir === 3) ? 0 : 2;
			else {
				// lookup
				dir = this.mscases[mscase];
				this.grid[id].computed = this.iter;
			}
			// draw line
			var ix = this.step / (
				Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 2]) + (y + this.ply[4 * dir + 2]) * (this.sx + 2)].force) - 1) /
				Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 3]) + (y + this.ply[4 * dir + 3]) * (this.sx + 2)].force) - 1) + 1
			);
			ctx.lineTo(
				this.grid[(x + this.plx[4 * dir]) + (y + this.ply[4 * dir]) * (this.sx + 2)].x + this.ix[dir] * ix,
				this.grid[(x + this.plx[4 * dir + 1]) + (y + this.ply[4 * dir + 1]) * (this.sx + 2)].y + this.ix[dir + 4] * ix
			);
			this.paint = true;
			// next
			return [
				x + this.ix[dir + 4],
				y + this.ix[dir + 8],
				dir
			];
		}
	};

	LavaLamp.prototype.renderMetaballs = function(ctx) {
		var i = 0, ball;
		while (ball = this.balls[i++]) ball.move();
		// reset grid
		this.iter++;
		this.sign = -this.sign;
		this.paint = false;
		ctx.fillStyle = this.metaFill;
		ctx.beginPath();
		// compute metaballs
		i = 0;
		//ctx.shadowBlur = 50;
		//ctx.shadowColor = "green";
		while (ball = this.balls[i++]) {
			// first cell
			var next = [
				Math.round(ball.pos.x / this.step),
				Math.round(ball.pos.y / this.step), false
			];
			// marching squares
			do {
				next = this.marchingSquares(next, ctx);
			} while (next);
			// fill and close path
			if (this.paint) {
				ctx.fill();
				ctx.closePath();
				ctx.beginPath();
				this.paint = false;
			}
		}
	};

	// gradients
	var createRadialGradient = function(w, h, r, c0, c1, ctx) {
		var gradient = ctx.createRadialGradient(
			w / 1, h / 1, 0,
			w / 1, h / 1, r
		);
		gradient.addColorStop(0, c0);
		gradient.addColorStop(1, c1);
		return gradient;
	};

	// main loop

	window.onload = function() {
		var run = function() {
			requestAnimationFrame(run);
			ctx.clearRect(0, 0, screen.width, screen.height);
			lava1.renderMetaballs(ctx);
		};

		var run2 = function() {
			requestAnimationFrame(run2);
			ctx2.clearRect(0, 0, screen2.width, screen2.height);
			lava2.renderMetaballs(ctx2);
		};
		// canvas
		var screen = ge1doot.screen.init("bubble", null, true),
			ctx = screen.ctx;
		screen.resize();
		// create LavaLamps
		lava1 = new LavaLamp(screen.width, screen.height, 8, "#6b0f54", "#6b0f54", ctx);

		var screen2 = ge1doot.screen.init("bubble2", null, true),
			ctx2 = screen2.ctx;
		screen2.resize();
		// create LavaLamps
		lava2 = new LavaLamp(screen2.width, screen2.height, 8, "#69590f", "#69590f", ctx2);

		run();
		run2();
	}

	$(document).ready(function() {
		var targetNode = document.querySelector('.meanmenu-reveal');
		var config = { attributes: true, childList: false, subtree: false };

		var callback = function(mutationsList, observer) {
			for(var mutation of mutationsList) {
				if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
					if($(targetNode).hasClass('meanclose')) {
						$('.ben-is-gay').css({
							'flex': '1 0 50%',
							'display': 'flex',
							'flex-direction': 'row-reverse'
						});
					} else {
						$('.ben-is-gay').css({
							'flex': '',
							'display': '',
							'flex-direction': ''
						});
					}
				}
			}
		};

		var observer = new MutationObserver(callback);
		observer.observe(targetNode, config);
	});

}(jQuery));
