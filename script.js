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
