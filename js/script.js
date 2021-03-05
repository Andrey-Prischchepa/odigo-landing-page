//Burger menu//
let burger = document.querySelector('.header__nav-burger');
let burger_menu = document.querySelector('.header__nav-list');
let body = document.querySelector('#body')

burger.onclick = function() {
	burger_menu.classList.toggle('active');
	burger.classList.toggle('active');
	body.classList.toggle('lock');
};
//---//

//Header onscroll//
(function () {
	const header = document.querySelector('.header');
	const header_wrap = document.querySelector('.header__wrapper');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header_active'); 
			header_wrap.classList.add('wrapper_active');
		}	else {
			header.classList.remove('header_active');
			header_wrap.classList.remove('wrapper_active');
		}
	};
}());
//---//

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
//---//