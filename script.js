const btn = document.querySelectorAll('div');
const blocks = document.querySelectorAll('ul');

function showIt() {

	let thisOne = this.childNodes[3];

	if (thisOne)

	// if (this.classList.contains('hide')) {
	// 	this.classList.contains ('show');
	// } else this.classList.add ('hide');
	console.log(thisOne);
}

btn.forEach(function (item) {
	item.onclick = showIt;
});