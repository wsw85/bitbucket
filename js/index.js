function scrollToAnchor(id){
	event.preventDefault();
	let element = document.querySelector(id);
	let scrollY = element.getBoundingClientRect().top-16;
	let deltaScrollY = scrollY / 20;

	function scroller(){	
		window.scrollBy(0, deltaScrollY);
	}

	let i = 0;
	setTimeout(function run() {
		scroller();
		i++;
		if(i<20){
			setTimeout(run, 50);}
	}, 50);
}

function openText(idTitle, idSpoiler, idTitleQuestion){

	let openT = document.querySelector('.open-text');
	let changeT = document.querySelector('.spoiler-title-change');
	let symbolR = document.querySelector('.spoiler-symbol-rotate');

	let title = document.getElementById(idTitle);
	let titleQuestion = document.getElementById(idTitleQuestion);
	let spoiler = document.getElementById(idSpoiler);
	
	if(
		openT != null && 
		changeT != null && 
		symbolR != null &&
		openT != title &&
		changeT != titleQuestion &&
		symbolR != spoiler
		) {
			openT.classList.toggle('open-text');
			changeT.classList.toggle('spoiler-title-change');
			symbolR.classList.toggle('spoiler-symbol-rotate');

			title.classList.toggle('open-text');
			titleQuestion.classList.toggle('spoiler-title-change');	
			spoiler.classList.toggle('spoiler-symbol-rotate');
	}
	else {	
			title.classList.toggle('open-text');	
			titleQuestion.classList.toggle('spoiler-title-change');	
			spoiler.classList.toggle('spoiler-symbol-rotate');
	}

	
 
 }

document.onclick = checkClick;

function openMenu(){
	let smenu = document.getElementById('smenu');
	smenu.classList.toggle("active");	
}

function checkClick(event){ 
	let element = event.target || event.srcElement;
	let smenu = document.getElementById('smenu');
	
	if (element.className == 'button-menu' || element.className == 'links-menu') {				
		openMenu();
	} else if (!element.classList.contains('links-menu') &&
		smenu.classList.contains('active')) {
		smenu.classList.remove('active');
	}
}