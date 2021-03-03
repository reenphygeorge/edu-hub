burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navleft = document.querySelector('.navleft')
navright = document.querySelector('.navright')

burger.addEventListener('click', ()=>{
	navright.classList.toggle('visibilityresp');
	navleft.classList.toggle('visibilityresp');
	navbar.classList.toggle('navheightresp');
})