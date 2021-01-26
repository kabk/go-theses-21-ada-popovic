/////////////////////////////////
// NEW DOCUMENT TITLE ON CLICK
/////////////////////////////////

var arrayTitles = [
	"Phrenology Of Bookmarking",
	"Folksonomic Machine In The Post-Taxonomic Garden",
	"Taxopoetry AKA Everything is Miscellaneous",
	"Deep-diving Into The World Of Alternative Taxonomies",
	"Towards The In-between",
	"On the Performative Nomenclature of Prosthetic Knowledge Spaces",
	"A title would just destroy the whole thing",
	"On Pointlessness Of Titles",
	"A Manuscript Found On Serendip Island",
	"Regaining The Aliveness, One Title At A Time",
	"Taxopoetic Techniques Of Weaving New Worlds",
	"The Principle of Serendipity",
	"World – Name – World",
	"Canon (– Label – Memory) – Worldview – Mimesis",
	"It's All In The Name",
	"A Good Thesis Name"
];

var randomTitle = arrayTitles[Math.floor(Math.random()*arrayTitles.length)];

$("#box").one('click',function titleChange() {
	document.getElementById("texty").innerHTML = randomTitle;
});

/////////////////////////////////
// INPUT FIELD TYPEWRITER
/////////////////////////////////

//Version with deleting

var cursor = true;
        var speed = 550;
        setInterval(() => {
          if(cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
          }else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
          }
        }, speed);



$("#box").one('click', function() {
    $("#placeholder").css("display", "none");
		$("body").css("overflow-y", "auto");
		$('.navigation').fadeIn(5000);
		$('.epigraph').fadeIn(1000);
		$('h2').toggleClass('bigmargin');
});

$("#menu").click(function() {
		$("#menu-chapter-1").fadeToggle(1200);
    $("#menu-chapter-2").fadeToggle(1000);
    $("#menu-chapter-3").fadeToggle(800);
    $("#menu-chapter-4").fadeToggle(600);
    $("#menu-chapter-5").fadeToggle(400);
    $("#menu-chapter-6").fadeToggle(200);
});

// $("#menu").click(function() {
// 		$("#menu-chapter-1").fadeToggle(500);
//     $("#menu-chapter-2").fadeToggle(1000);
//     $("#menu-chapter-3").fadeToggle(1500);
//     $("#menu-chapter-4").fadeToggle(2000);
//     $("#menu-chapter-5").fadeToggle(2500);
//     $("#menu-chapter-6").fadeToggle(3000);
// });

$(".menu-chapter").click(function() {
		$("#menu-chapter-1").fadeOut(200);
    $("#menu-chapter-2").fadeOut(400);
    $("#menu-chapter-3").fadeOut(600);
    $("#menu-chapter-4").fadeOut(800);
    $("#menu-chapter-5").fadeOut(1000);
    $("#menu-chapter-6").fadeOut(1200);
});




$("#box").one('click',function typing() {

const words = [
	"Folksonomic Machine In The Post-Taxonomic Garden",
	"A Manuscript Found On Serendip Island",
	"Phrenology Of Bookmarking",
	"Taxopoetry AKA Everything is Miscellaneous",
	"Deep-diving Into The World Of Alternative Taxonomies",
	"Towards The In-between",
	"On the Performative Nomenclature of Prosthetic Knowledge Spaces",
	"A title would just destroy the whole thing",
	"On Pointlessness Of Titles",
	"Regaining The Aliveness, One Title At A Time",
	"Taxopoetic Techniques Of Weaving New Worlds",
	"The Principle of Serendipity",
	"World – Name – World",
	"Canon (– Label – Memory) – Worldview – Mimesis",
	"It's All In The Name",
	"A Good Thesis Name"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 200);
		// originally it was 200
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

typingEffect();

});


//Version with blinking cursor

	// $("[data-typer]").attr("data-typer", function(i, txt) {
	//
	//   var $typer = $(this),
	//     tot = txt.length,
	//     pauseMax = 300,
	//     pauseMin = 60,
	//     ch = 0;
	//
	//   (function typeIt() {
	//     if (ch > tot) return;
	//     $typer.text(txt.substring(0, ch++));
	//     setTimeout(typeIt, ~~(Math.random() * (pauseMax - pauseMin + 1) + pauseMin));
	//   }());
	//
	// });

	/////////////////////////////////
	// TABLE OF CONTENT
	/////////////////////////////////


	$(document).ready(function() {
			$('a[href*=#]').bind('click', function(e) {
					e.preventDefault(); // prevent hard jump, the default behavior

					var target = $(this).attr("href"); // Set the target as variable

					// perform animated scrolling by getting top-position of target-element and set it as scroll target
					$('html, body').stop().animate({
							scrollTop: $(target).offset().top
					}, 600, function() {
							location.hash = target; //attach the hash (#jumptarget) to the pageurl
					});

					return false;
			});
	});

	$(window).scroll(function() {
			var scrollDistance = $(window).scrollTop();

			// Show/hide menu on scroll
			//if (scrollDistance >= 850) {
			//		$('nav').fadeIn("fast");
			//} else {
			//		$('nav').fadeOut("fast");
			//}

			// Assign active class to nav links while scolling
			$('.page-section').each(function(i) {
					if ($(this).position().top <= scrollDistance) {
							$('.navigation a.active').removeClass('active');
							$('.navigation a').eq(i).addClass('active');
					}
			});
	}).scroll();


// ///////////////////////////////
// SLIDESHOW ANIMATION
// ///////////////////////////////

// document.addEventListener("DOMContentLoaded", function(event) {
//   var slideIndex = 0;
//   showSlides();
//
//   function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
//   }
// });

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16),
        r = (bigint >> 16) & 255,
        g = (bigint >> 8) & 255,
        b = bigint & 255;
    return [r,g,b];
}

/**
 * Create Duotone Matrix Values
 *
 * return [string] (matrix values)
 */
function duotone (hexes) {
    // After many failed attempts at the Matrix voodoo I found the right path here:
    // https://ines.io/blog/dynamic-duotone-svg-jade
    var hex = hexes.split(',');
    var matrix = document.querySelector('.color-matrix');
    var color1 = hexToRgb(hex[0]);
    var color2 = hexToRgb(hex[1]);

    var c1   = {};
    c1.red   = color1[0] / 256;
    c1.green = color1[1] / 256;
    c1.blue  = color1[2] / 256;

    var c2   = {};
    c2.red   = color2[0] / 256;
    c2.green = color2[1] / 256;
    c2.blue  = color2[2] / 256;

    var value = [];
    value = value.concat([c1.red - c2.red, 0, 0, 0, c2.red]);
    value = value.concat([c1.green - c2.green, 0, 0, 0, c2.green]);
    value = value.concat([c1.blue - c2.blue, 0, 0, 0, c2.blue]);
    value = value.concat([0, 0, 0, 1, 0]);

    return value.join(' ');
}


/**
 * Create Additional Color Filters
 *
 * return [bool]
 */
function createSvgFilters (hex,i) {
    var filterNum = 'duotone_' + i,
        ns = 'http://www.w3.org/2000/svg',
        svg = document.createElementNS(ns,'svg'),
        filterEl = document.createElementNS(ns,"filter"),
        matrix = document.createElementNS(ns,"feColorMatrix");

        svg.setAttribute('style','color-interpolation-filters: sRGB');
        svg.classList.add('svg-filter');
        filterEl.setAttribute('id','duotone_' + i);
        matrix.setAttribute('type', 'matrix');
        matrix.setAttribute('values', duotone(hex));

    document.body.appendChild(svg).appendChild(filterEl).appendChild(matrix);
    return;
}

/**
 * Fire it up!
 *
 * Runs through the DOM and looks for data-hex
 * attributes. Takes the values and applies a
 * gradient map.
 */

(function(){
   var gradientImages = document.querySelectorAll('[data-hex]');
    gradientImages.forEach(function(img, i) {
        hex = img.dataset.hex;
        createSvgFilters(hex,i);
        filterName = '#duotone_' + i;
        img.setAttribute('style','filter: url('+ filterName +')');
    });
})();



const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
