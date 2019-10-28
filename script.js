let btn = document.querySelectorAll('div');
let blocks = document.querySelectorAll('ul');

let elHeight = blocks[0].clientHeight;

console.log(elHeight);

for (var i=0; i<blocks.length; i++) {

	blocks[i].style.height = 0;

}

for (var i=0; i<btn.length; i++) {

	btn[i].onclick = showIt;

}

function showIt() {

	for (var i=0; i<btn.length; i++) {
		blocks[i].style.height = 0;
	}

	this.querySelector('ul').style.height = elHeight + 'px';
}
