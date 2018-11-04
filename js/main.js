var modal = document.querySelector('.modal'),
		img1 = document.querySelector('.gallery__img-1'),
		img2 = document.querySelector('.gallery__img-2'),
		img3 = document.querySelector('.gallery__img-3'),
		img4 = document.querySelector('.gallery__img-4'),
		img5 = document.querySelector('.gallery__img-5'),
		img6 = document.querySelector('.gallery__img-6'),
		img7 = document.querySelector('.gallery__img-7'),
		img8 = document.querySelector('.gallery__img-8'),
		img9 = document.querySelector('.gallery__img-9'),
		modal__img1 = document.querySelector('.modal__img1'),
		modal__img2 = document.querySelector('.modal__img2'),
		modal__img3 = document.querySelector('.modal__img3'),
		modal__img4 = document.querySelector('.modal__img4'),
		modal__img5 = document.querySelector('.modal__img5'),
		modal__img6 = document.querySelector('.modal__img6');
		modal__overlay = document.querySelector('.modal__overlay');

img1.addEventListener('click', function() {
	modal.style.display = 'block';
	modal__img1.style.display = 'block';
})

img2.addEventListener('click', function() {
	modal.style.display = 'block';
	modal__img2.style.display = 'block';
})

img3.addEventListener('click', function() {
	modal.style.display = 'block';
	modal__img3.style.display = 'block';
})

img4.addEventListener('click', function() {
	modal.style.display = 'block';
	modal__img4.style.display = 'block';
})

img5.addEventListener('click', function() {
	modal.style.display = 'block';
	modal__img5.style.display = 'block';
})

img6.addEventListener('click', function() {
	modal.style.display = 'block';
	modal__img6.style.display = 'block';
})

window.addEventListener('click', function (e) {
	if(e.target == modal__overlay) {
   		modal.style.display = "none";
   		modal__img1.style.display = 'none';
   		modal__img2.style.display = 'none';
   		modal__img3.style.display = 'none';
   		modal__img4.style.display = 'none';
   		modal__img5.style.display = 'none';
   		modal__img6.style.display = 'none';
	}  	
})