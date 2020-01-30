const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const imgList = document.querySelectorAll('.img-content');

let startNode = 0;

prevBtn.addEventListener('click', function() {
	if (imgList[startNode].classList[1] === 'active') {
		imgList[startNode - 1].classList.add('active');
		imgList[startNode].classList.remove('active');
		startNode--;
	}

	nextBtn.disabled = false;

	if (startNode === 0) {
		prevBtn.disabled = true;
	}
});

nextBtn.addEventListener('click', function() {
	if (imgList[startNode].classList[1] === 'active') {
		imgList[startNode + 1].classList.add('active');
		imgList[startNode].classList.remove('active');
		startNode++;
	}

	prevBtn.disabled = false;

	if (startNode === imgList.length - 1) {
		nextBtn.disabled = true;
	}
});

function init() {}

init();
