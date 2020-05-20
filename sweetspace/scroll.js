function setupScroll() {
	const wrapEl = document.getElementById("scene");
	const logoEl = document.getElementById("heroLogo");
	const fadeEls = ["heroLogo", "studioName", "awardWinning"].map(x => document.getElementById(x));
	function fade(o) {
		fadeEls.forEach(x => x.style.opacity = o);
	}
	
	const header = document.getElementById("mainHeader");
	
	/**
	 * Whether a new animation repaint has already been requested
	 * @type {boolean}
	 */
	let anim = false;
	
	let visible = true;
	
	console.log("Going");
	
	window.onscroll = function () {
		console.log("Hi");
		if (!anim) {
			requestAnimationFrame(setScroll);
		}
		anim = true;
	};
	setScroll();
	
	function setScroll() {
		const height = window.pageYOffset / window.innerHeight;
		if (height <= 0.5) {
			fade(1-(2*height));
			visible = true;
		}
		if(height > 0.5 && height <= 1.5) {
			fade(0);
			wrapEl.style.transform = `translateY(${(height - 0.5)*100}%)`;
			header.style.transform = 'translateY(-100%)';
			visible = true;
		}
		
		if(height > 1 && height <= 1.5) {
			header.style.transform = `translateY(${(1-(height-1)*2)*-100}%)`;
		}
		
		if(visible && height > 1.5) {
			visible = false;
			fade(0);
			wrapEl.style.transform = "translateY(100%)";
		}
		
		anim = false;
	}
}