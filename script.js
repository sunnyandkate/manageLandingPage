let toggleMenu = document.querySelector('.toggle-menu');
let toggleMenuImg = document.querySelector('.toggleMenuImg');
let menu = document.querySelector('.menu');
let contOverlay = document.querySelector('.container-overlay');




toggleMenu.addEventListener('click', function(){


	menu.classList.toggle('mobile-menu');
	contOverlay.classList.toggle('overlay');
	toggleMenu.classList.toggle('close');
	menu.classList.add('animate__animated', 'animate__fadeInDown');

});


//testimonial slider

let slide=0;

if(window.innerWidth < 990){
showCards();
}


function showCards(){
	let cards = document.querySelectorAll('.card');
	let dots = document.querySelectorAll('.slider-dots span');


	for(let i=0; i< cards.length;i++){

		cards[i].style.display='none';
	}
	slide++;
	
	if (slide > cards.length) {
		slide= 1
		}	

	for(j=0;j<dots.length;j++){
		
		dots[j].classList.remove('red');
		
	}
		cards[slide-1].style.display='block';
	
		dots[slide-1].classList.add('red');
		
		
	setTimeout(showCards, 4000); 
}


let inputValue = document.querySelector('#news');
let submitBtn = document.querySelector('.submit-btn');
let error = document.querySelector('.error');
let mailVal= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitBtn.addEventListener('click', function(){
if(inputValue.value == ''){
	
	
	error.textContent = 'input field cannot be empty';
	return false;
}
if(!inputValue.value.match(mailVal)){
	
	error.textContent = 'please enter a valid email address';
	return false;
	
}

	error.textContent='';

});









